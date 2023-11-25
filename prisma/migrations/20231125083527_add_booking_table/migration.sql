-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "amount_diners" INTEGER NOT NULL,
    "booking_datetime" TIMESTAMP(3) NOT NULL,
    "table_number" INTEGER NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);
