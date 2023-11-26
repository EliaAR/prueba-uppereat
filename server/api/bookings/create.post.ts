import { createBooking } from "~/server/services/bookings/create";

export default defineEventHandler(async (event) => {
  const data = await readBody(event);

  const booking = await createBooking(data);

  if (!booking) {
    return {
      statusCode: 500,
      message: "Fallo al crear la reserva",
    };
  }

  return {
    statusCode: 201,
    booking,
  };
});
