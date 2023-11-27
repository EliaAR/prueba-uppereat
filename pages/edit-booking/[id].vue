<template>
  <main
    class="flex flex-col items-center min-h-[calc(100vh-208px)] bg-slate-100"
  >
    <h2
      class="grow-[0.45] flex items-center xs:text-center text-5xl xs:text-4xl font-semibold uppercase text-gray-800 [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-gray-500 xs:pt-5"
    >
      Reserva a editar
    </h2>

    <section
      class="grow-[0.25] flex flex-col items-center justify-center xs:pb-5"
    >
      <form
        @submit.prevent="update"
        class="flex flex-col gap-y-3.5 rounded-lg border-solid border-2 border-slate-900 bg-white shadow-lg py-7 px-10 xs:px-6"
      >
        <article class="flex flex-col gap-y-1">
          <label
            for="customerName"
            class="block text-gray-700 text-base font-bold"
          >
            Nombre del Cliente
          </label>
          <input
            v-model="name"
            id="customerName"
            type="text"
            required
            placeholder="Nombre y Primer Apellido"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </article>

        <article class="flex flex-col gap-y-1">
          <label
            for="numberOfPeople"
            class="block text-gray-700 text-base font-bold"
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
            placeholder="Ej: 4"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </article>

        <article class="flex flex-col gap-y-1">
          <label
            for="reservationDate"
            class="block text-gray-700 text-base font-bold"
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

        <article class="relative justify-self-center flex flex-col gap-y-1">
          <label for="status" class="block text-gray-700 text-base font-bold">
            Estado de la Reserva
          </label>
          <select
            v-model="status"
            id="status"
            class="block w-full appearance-none rounded border border-gray-200 bg-white px-2 py-1 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
          >
            <option value="PENDING">Pendiente</option>
            <option value="CONFIRMED">Confirmada</option>
            <option value="CANCELLED">Cancelada</option>
            <option value="COMPLETED">Completada</option>
          </select>
          <article
            class="pointer-events-none absolute bottom-1.5 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="fill-current h-4 w-4"
              viewBox="0 0 20 20"
            >
              <path d="M5.3,7l4.7,4.7l4.7-4.7H5.3z" />
            </svg>
          </article>
        </article>

        <article class="mb-4 flex items-center mt-4">
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
            class="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            Editar reserva
          </button>

          <p
            v-if="!name || !numberOfPeople || !reservationDate"
            class="text-center text-xs text-rose-500"
          >
            Debes rellenar todos los campos
          </p>
        </article>
      </form>

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
    </section>

    <section
      v-if="editBookingError"
      class="relative bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-5"
      role="alert"
    >
      <span class="block xs:inline pr-5">{{ editBookingMessage }}</span>
      <svg
        @click="editBookingMessage = ''"
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
      v-if="editBookingMessage && !editBookingError"
      class="relative bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-5"
      role="alert"
    >
      <span class="block xs:inline pr-5">{{ editBookingMessage }}</span>
      <svg
        @click="editBookingMessage = ''"
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
const route = useRoute();

const editBookingError = ref(false);
const editBookingMessage = ref("");

const { data } = await useFetch("/api/bookings/unique", {
  query: {
    id: route.params.id,
  },
});

const reservationDateTemp = new Date(
  data.value?.booking?.booking_datetime as string
);
const formattedDate = reservationDateTemp.toISOString().slice(0, 16);

const name = ref(data.value?.booking?.user_name);
const numberOfPeople = ref(data.value?.booking?.amount_diners);
const reservationDate = ref(formattedDate);
const terraceOption = ref(data.value?.booking?.terrace);
const status = ref(data.value?.booking?.status);

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

const update = async () => {
  if (name.value) {
    const parsedDate = new Date(reservationDate.value);
    try {
      const response = await fetch("/api/bookings/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: route.params.id,
          user_name: name.value,
          amount_diners: numberOfPeople.value,
          booking_datetime: parsedDate,
          status: status.value,
          terrace: terraceOption.value,
        }),
      });
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        if (result.statusCode === 200) {
          editBookingError.value = false;
          editBookingMessage.value = result.message;
        } else {
          editBookingError.value = true;
          editBookingMessage.value = result.message;
        }
      } else {
        console.error("Error:", response.status);
        editBookingError.value = true;
        editBookingMessage.value = "Error al editar la reserva";
      }
    } catch (error) {
      console.error("Error:", error);
      editBookingError.value = true;
      editBookingMessage.value = "Error al editar la reserva";
    }
  }
};
</script>
