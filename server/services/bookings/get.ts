import prisma from "~/server/lib/prisma";
import { Prisma } from "@prisma/client";
import { type GetBookingDTO, type BookingModel } from "~/types/bookings";

async function getBookings(
  data: GetBookingDTO
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
    ANDarray.push({
      booking_datetime: {
        equals: data.date,
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
