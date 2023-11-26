import { type Booking, $Enums } from "@prisma/client";

export type BookingModel = Booking;

export type CreateBookingDTO = Omit<BookingModel, "id" | "status">;

export type GetManyBookingsDTO = {
  name?: string;
  date?: string;
  status?: $Enums.Status;
};

export type GetUniqueBookingDTO = {
  id: string;
};

export type UpdateBookingDTO = {
  id: string;
  data: Partial<BookingModel>;
};

export type DeleteBookingDTO = {
  id: string;
};
