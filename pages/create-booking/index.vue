<template>
  <section
    class="relative py-7 px-10 rounded-lg border-solid border-2 border-slate-900 bg-white"
  >
    <h6 class="text-3xl font-bold text-gray-700 text-center">
      Formulario de Reservas
    </h6>
    <form class="mt-4">
      <article class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="customerName"
        >
          Nombre del Cliente
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="customerName"
          type="text"
          placeholder="Nombre Completo"
        />
      </article>

      <article class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="numberOfPeople"
        >
          Número de Personas
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="numberOfPeople"
          type="number"
          placeholder="Ej: 4"
        />
      </article>

      <article class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="reservationDate"
        >
          Fecha y Hora de la Reserva
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="reservationDate"
          type="datetime-local"
        />
      </article>

      <article class="mb-4 flex items-center">
        <input
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
          class="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Reservar
        </button>
      </article>
    </form>
  </section>

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
</template>
