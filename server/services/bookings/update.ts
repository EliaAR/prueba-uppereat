import prisma from "~/server/lib/prisma";
import { type UpdateBookingDTO, type BookingModel } from "~/types/bookings";

async function updateBooking({
  id,
  data,
}: UpdateBookingDTO): Promise<BookingModel | null> {
  try {
    const result = await prisma.booking.update({
      where: { id },
      data,
    });
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { updateBooking };
