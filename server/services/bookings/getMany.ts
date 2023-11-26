import prisma from "~/server/lib/prisma";
import { Prisma } from "@prisma/client";
import { type GetManyBookingsDTO, type BookingModel } from "~/types/bookings";

async function getBookings(
  data: GetManyBookingsDTO
): Promise<BookingModel[] | null> {
  const ANDarray: Prisma.BookingWhereInput[] = [];
  if (data.name) {
    ANDarray.push({
      user_name: {
        contains: data.name,
        mode: "insensitive",
      },
    });
  }
  if (data.date) {
    const startOfDay = new Date(data.date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(data.date);
    endOfDay.setHours(23, 59, 59, 999);
    ANDarray.push({
      booking_datetime: {
        gte: startOfDay,
        lte: endOfDay,
      },
    });
  }
  if (data.status) {
    ANDarray.push({
      status: {
        equals: data.status,
      },
    });
  }
  const whereBooking = Prisma.validator<Prisma.BookingWhereInput>()({
    AND: ANDarray,
  });

  try {
    const result = await prisma.booking.findMany({
      where: whereBooking,
      orderBy: { booking_datetime: "asc" },
    });
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { getBookings };
