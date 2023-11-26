import { getBookings } from "~/server/services/bookings/get";

export default defineEventHandler(async (event) => {
  const data = getQuery(event);

  const results = await getBookings(data);

  if (!results) {
    return {
      statusCode: 500,
      message: "Fallo al obtener las reservas",
      bookings: [],
    };
  }

  return {
    statusCode: 200,
    message: "Reservas obtenidas correctamente",
    bookings: results,
  };
});
