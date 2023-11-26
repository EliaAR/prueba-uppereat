import { deleteBooking } from "~/server/services/bookings/delete";
import type { DeleteBookingDTO } from "~/types/bookings";

export default defineEventHandler(async (event) => {
  const data = getQuery(event);

  if (!data.id) {
    return {
      statusCode: 400,
      message: "Falta el id",
      booking: null,
    };
  }

  const result = await deleteBooking({ id: data.id } as DeleteBookingDTO);

  if (!result) {
    return {
      statusCode: 500,
      message: "Fallo al eliminar la reserva",
      booking: null,
    };
  }

  return {
    statusCode: 200,
    message: "Reserva eliminada correctamente",
    booking: result,
  };
});
