import { createBooking } from "~/server/services/bookings/create";

export default defineEventHandler(async (event) => {
  const data = await readBody(event);

  const booking = await createBooking(data);

  if (!booking) {
    return {
      statusCode: 500,
      message: "Failed to create booking",
    };
  }

  return {
    statusCode: 201,
    booking,
  };
});
