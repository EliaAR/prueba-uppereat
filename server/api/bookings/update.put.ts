import { updateBooking } from "~/server/services/bookings/update";

export default defineEventHandler(async (event) => {
  const { id, ...data } = await readBody(event);

  if (!id) {
    return {
      statusCode: 400,
      message: "Falta el id",
      booking: null,
    };
  }

  const result = await updateBooking({ id, data });

  if (!result) {
    return {
      statusCode: 500,
      message: "Fallo al actualizar la reserva",
      booking: null,
    };
  }

  return {
    statusCode: 200,
    message: "Reserva actualizada correctamente",
    booking: result,
  };
});
