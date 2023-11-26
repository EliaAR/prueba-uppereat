import prisma from "~/server/lib/prisma";
import { Prisma } from "@prisma/client";
import { type GetUniqueBookingDTO, type BookingModel } from "~/types/bookings";

async function getUniqueBooking(
  data: GetUniqueBookingDTO
): Promise<BookingModel | null> {
  const whereBooking = Prisma.validator<Prisma.BookingWhereInput>()({
    id: data.id,
  });

  try {
    const result = await prisma.booking.findUnique({
      where: whereBooking,
    });
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { getUniqueBooking };
