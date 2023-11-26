import { getUniqueBooking } from "~/server/services/bookings/getUnique";
import type { GetUniqueBookingDTO } from "~/types/bookings";

export default defineEventHandler(async (event) => {
  const data = getQuery(event);

  if (!data.id) {
    return {
      statusCode: 400,
      message: "Falta el id",
      booking: null,
    };
  }

  const result = await getUniqueBooking({ id: data.id } as GetUniqueBookingDTO);

  if (!result) {
    return {
      statusCode: 500,
      message: "Fallo al obtener la reserva",
      booking: null,
    };
  }

  return {
    statusCode: 200,
    message: "Reserva obtenida correctamente",
    booking: result,
  };
});
