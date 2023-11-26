import prisma from "~/server/lib/prisma";
import { Prisma } from "@prisma/client";
import { type DeleteBookingDTO, type BookingModel } from "~/types/bookings";

async function deleteBooking(
  data: DeleteBookingDTO
): Promise<BookingModel | null> {
  const whereBooking = Prisma.validator<Prisma.BookingWhereInput>()({
    id: data.id,
  });

  try {
    const result = await prisma.booking.delete({
      where: whereBooking,
    });
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { deleteBooking };
