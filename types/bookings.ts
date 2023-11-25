import { type Booking } from "@prisma/client";

export type BookingModel = Booking;

export type CreateBookingDTO = Omit<BookingModel, "id" | "status">;
