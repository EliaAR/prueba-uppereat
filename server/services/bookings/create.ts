import prisma from "~/server/lib/prisma";
import { CreateBookingDTO, BookingModel } from "~/types/bookings";

async function createBooking(
  data: CreateBookingDTO
): Promise<BookingModel | null> {
  try {
    const result = await prisma.booking.create({ data });
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { createBooking };
