import { updateBooking } from "~/server/services/bookings/update";

export default defineEventHandler(async (event) => {
  const { id, ...data } = await readBody(event);

  if (!id) {
    return {
      statusCode: 400,
      message: "Falta el id",
    };
  }

  const result = await updateBooking({ id, data });

  if (!result) {
    return {
      statusCode: 500,
      message: "Fallo al actualizar la reserva",
    };
  }

  return {
    statusCode: 200,
    booking: result,
  };
});
