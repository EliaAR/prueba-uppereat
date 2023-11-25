import { type Booking, $Enums } from "@prisma/client";

export type BookingModel = Booking;

export type CreateBookingDTO = Omit<BookingModel, "id" | "status">;

export type GetBookingDTO = {
  name?: string;
  date?: string;
  status?: $Enums.Status;
};
