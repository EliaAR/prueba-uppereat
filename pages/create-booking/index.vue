<template>
  <main
    class="flex flex-col items-center justify-center min-h-[calc(100vh-208px)] bg-slate-100"
  >
    <section
      class="relative flex flex-col gap-y-8 py-7 px-10 rounded-lg border-solid border-2 border-slate-900 bg-white shadow-lg"
    >
      <h6
        class="text-3xl xs:text-2xl font-bold text-center text-gray-700 [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-gray-500"
      >
        Formulario de Reservas
      </h6>
      <form @submit.prevent="save" class="flex flex-col gap-y-5">
        <article class="flex flex-col gap-y-1">
          <label
            for="customerName"
            class="block text-gray-700 text-sm font-bold"
          >
            Nombre del Cliente
          </label>
          <input
            v-model="name"
            id="customerName"
            type="text"
            required
            placeholder="Escribe aquí el nombre"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </article>

        <article class="flex flex-col gap-y-1">
          <label
            for="numberOfPeople"
            class="block text-gray-700 text-sm font-bold"
          >
            Número de Personas
          </label>
          <input
            v-model="numberOfPeople"
            id="numberOfPeople"
            type="number"
            min="1"
            max="6"
            required
            placeholder="Selecciona el número de personas"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </article>

        <article class="flex flex-col gap-y-1">
          <label
            for="reservationDate"
            class="block text-gray-700 text-sm font-bold"
          >
            Fecha y Hora de la Reserva
          </label>
          <input
            v-model="reservationDate"
            id="reservationDate"
            type="datetime-local"
            required
            :min="getCurrentDateTime()"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </article>

        <article class="flex items-center">
          <input
            v-model="terraceOption"
            id="terraceOption"
            type="checkbox"
            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label for="terraceOption" class="ml-2 block text-sm text-gray-900">
            ¿Desea reservar en terraza?
          </label>
        </article>

        <article class="flex flex-col items-center justify-center gap-y-3">
          <button
            type="submit"
            :disabled="!name || !numberOfPeople || !reservationDate"
            class="relative bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            Reservar
          </button>

          <p
            v-if="!name || !numberOfPeople || !reservationDate"
            class="text-center text-xs text-rose-500"
          >
            Debes rellenar todos los campos
          </p>
        </article>
      </form>
    </section>

    <NuxtLink
      to="/bookings"
      class="flex items-center gap-x-2 mt-3 p-2 text-slate-700 hover:text-slate-800"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
        />
      </svg>

      Volver a reservas</NuxtLink
    >

    <section
      v-if="bookingError"
      class="relative bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-5"
      role="alert"
    >
      <span class="block xs:inline pr-5">{{ bookingMessage }}</span>
      <svg
        @click="bookingMessage = ''"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="absolute w-6 h-6 top-3 right-0.5 cursor-pointer"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </section>

    <section
      v-if="bookingMessage && !bookingError"
      class="relative bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-5"
      role="alert"
    >
      <span class="block xs:inline pr-5">{{ bookingMessage }}</span>
      <svg
        @click="bookingMessage = ''"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="absolute w-6 h-6 top-3 right-0.5 cursor-pointer"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </section>
  </main>
</template>

<script lang="ts" setup>
const name = ref("");
const numberOfPeople = ref();
const reservationDate = ref();
const terraceOption = ref(false);
const bookingError = ref(false);
const bookingMessage = ref("");

const getCurrentDateTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }T${hour < 10 ? "0" + hour : hour}:${minutes < 10 ? "0" + minutes : minutes}`;
};

const save = async () => {
  if (name.value && numberOfPeople.value && reservationDate.value) {
    const parsedDate = new Date(reservationDate.value);
    try {
      const response = await fetch("/api/bookings/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: name.value,
          amount_diners: numberOfPeople.value,
          booking_datetime: parsedDate.toISOString(),
          terrace: terraceOption.value,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        if (result.statusCode === 201) {
          name.value = "";
          numberOfPeople.value = "";
          reservationDate.value = "";
          terraceOption.value = false;
          bookingError.value = false;
          bookingMessage.value = result.message;
        } else {
          bookingError.value = true;
          bookingMessage.value = result.message;
        }
      } else {
        console.error("Error:", response.status);
        bookingError.value = true;
        bookingMessage.value = "Error al crear la reserva";
      }
    } catch (error) {
      console.error("Error:", error);
      bookingError.value = true;
      bookingMessage.value = "Error al crear la reserva";
    }
  }
};
</script>
