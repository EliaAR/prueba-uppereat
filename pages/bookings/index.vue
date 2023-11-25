<template>
  <h2
    class="grow-[0.25] flex items-center mb-4 text-4xl font-semibold text-gray-800 uppercase"
  >
    Listado de Reservas
  </h2>

  <section class="rounded-lg bg-white shadow-md mb-5">
    <article
      class="grid grid-cols-6 bg-gray-200 p-4 text-left text-sm font-semibold uppercase text-gray-600"
    >
      <p>Nombre</p>
      <p>Nº Personas</p>
      <p>Fecha y Hora</p>
      <p>Terraza</p>
      <p>Acciones</p>
      <p>Nº Reserva</p>
    </article>

    <article class="grid grid-cols-6 border-b p-4 text-sm text-gray-800">
      <p>John Doe</p>
      <p>4</p>
      <p>2023-11-30 19:30</p>
      <p>Sí</p>
      <p>789</p>

      <div class="flex items-center space-x-3">
        <article class="relative">
          <select
            class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-2 py-1 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="status"
          >
            <option>Pendiente</option>
            <option>Confirmada</option>
            <option>Cancelada</option>
            <option>Completada</option>
          </select>
          <article
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.3,7l4.7,4.7l4.7-4.7H5.3z" />
            </svg>
          </article>
        </article>
        <button
          class="focus:shadow-outline rounded bg-red-500 px-3 py-1 font-bold text-white hover:bg-red-700 focus:outline-none text-xs"
          type="button"
          title="Borrar"
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
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </article>
  </section>

  <section class="flex justify-between items-center mb-4">
    <NuxtLink
      to="/create-booking"
      class="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >Crear nueva reserva</NuxtLink
    >
  </section>
</template>
