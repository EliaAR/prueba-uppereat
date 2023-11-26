<template>
  <main
    class="flex flex-col items-center gap-y-5 min-h-[calc(100vh-208px)] bg-slate-100"
  >
    <h2
      class="grow-[0.3] flex items-center xs:text-center text-5xl xs:text-4xl font-semibold uppercase text-gray-800 [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-gray-500 xs:pt-5"
    >
      Reserva a editar
    </h2>

    <section
      class="grow-[0.25] flex flex-col items-center justify-center xs:pb-5"
    >
      <form
        @submit.prevent="update"
        class="rounded-lg border-solid border-2 border-slate-900 bg-white shadow-lg py-7 px-10 xs:px-6"
      >
        <article class="mb-4">
          <label
            for="customerName"
            class="block text-gray-700 text-sm font-bold mb-2"
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

        <article class="mb-4">
          <label
            for="numberOfPeople"
            class="block text-gray-700 text-sm font-bold mb-2"
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

        <article class="mb-4">
          <label
            for="reservationDate"
            class="block text-gray-700 text-sm font-bold mb-2"
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

        <article class="relative justify-self-center">
          <label
            for="status"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
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

        <article class="flex items-center justify-center mt-8">
          <button
            type="submit"
            :disabled="!name || !numberOfPeople || !reservationDate"
            class="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-500"
          >
            Editar reserva
          </button>
        </article>
      </form>

      <NuxtLink
        to="/bookings"
        class="flex items-center gap-x-2 mt-5 text-slate-700 hover:text-slate-800"
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
  </main>
</template>

<script lang="ts" setup>
const route = useRoute();

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
  const parsedDate = new Date(reservationDate.value);

  await fetch("/api/bookings/update", {
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
};
</script>
