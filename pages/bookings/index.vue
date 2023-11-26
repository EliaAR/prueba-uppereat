<template>
  <main
    class="flex flex-col items-center min-h-[calc(100vh-208px)] bg-slate-100"
  >
    <h2
      class="grow-[0.20] flex items-center xs:text-center text-5xl font-semibold uppercase text-gray-800 [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-gray-500"
      :style="{ paddingBlock: bookings.length ? '1rem' : '0' }"
    >
      Listado de Reservas
    </h2>

    <div class="overflow-x-auto w-full">
      <section
        class="min-w-max grow-[0.80] flex flex-col items-center justify-start pt-2.5"
      >
        <article class="mb-4 flex gap-2">
          <input
            v-model="filterName"
            type="text"
            placeholder="Filtrar por Nombre"
            class="rounded border px-2 py-1"
          />
          <input
            v-model="filterDate"
            type="date"
            placeholder="Filtrar por Fecha"
            class="rounded border px-2 py-1"
          />
          <select
            v-model="filterStatus"
            class="rounded border px-2 py-1 bg-white"
          >
            <option value="">Todos los Estatus</option>
            <option>Pendiente</option>
            <option>Confirmada</option>
            <option>Cancelada</option>
            <option>Completada</option>
          </select>
          <button
            @click="deleteFilters"
            title="Borrar Filtros"
            class="font-bold py-2 px-4 rounded bg-gray-500 hover:bg-gray-700 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </article>

        <article class="min-w-max rounded-lg bg-white shadow-md mb-5">
          <article
            class="grid grid-cols-6 gap-x-2 rounded-t-lg bg-slate-300 p-4 text-left text-sm font-semibold uppercase text-gray-600"
          >
            <p class="justify-self-center">Nombre</p>
            <p class="justify-self-center">Nº Personas</p>
            <p class="justify-self-center">Fecha y Hora</p>
            <p class="justify-self-center">Terraza</p>
            <p class="justify-self-center">Estatus</p>
            <p class="justify-self-center">Acciones</p>
          </article>

          <article
            v-if="bookings.length === 0"
            class="flex justify-center py-4 font-bold uppercase"
          >
            <p>No hay reservas</p>
          </article>

          <template v-for="(booking, index) in bookings">
            <article
              class="grid grid-cols-6 gap-x-2 border-b p-4 text-sm text-gray-800"
            >
              <p class="pl-1.5">{{ booking.user_name }}</p>
              <p class="justify-self-center">{{ booking.amount_diners }}</p>
              <p class="justify-self-center">
                {{ bookingDate(index) }}
              </p>
              <p class="justify-self-center">{{ booking.terrace }}</p>
              <p class="justify-self-center">{{ booking.status }}</p>

              <article
                class="relative flex justify-center justify-self-center gap-x-2"
              >
                <button
                  type="button"
                  title="Borrar"
                  @click="showTooltip = booking.id"
                  class="focus:shadow-outline rounded bg-red-500 px-3 py-1 font-bold text-white hover:bg-red-700 focus:outline-none text-xs"
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
                <article
                  v-if="showTooltip === booking.id"
                  class="absolute w-60 bottom-full flex flex-col gap-y-3 items-center mb-2 px-4 py-2 border border-solid border-slate-300 bg-slate-50 rounded shadow-lg"
                >
                  <p class="text-center font-bold">
                    ¿Estás seguro que quieres eliminar la reserva?
                  </p>
                  <div class="flex w-full justify-evenly">
                    <button
                      @click="deleteBooking(booking.id)"
                      class="focus:shadow-outline rounded bg-red-500 px-3 py-1 font-bold text-white hover:bg-red-700 focus:outline-none text-xs"
                    >
                      Borrarla
                    </button>
                    <button
                      @click="showTooltip = false"
                      class="focus:shadow-outline rounded bg-sky-700 px-3 py-1 font-bold text-white hover:bg-sky-800 focus:outline-none text-xs"
                    >
                      Cancelar
                    </button>
                  </div>
                </article>
                <button
                  type="button"
                  title="Editar"
                  class="focus:shadow-outline rounded bg-amber-500 px-3 py-1 font-bold text-white hover:bg-amber-700 focus:outline-none text-xs"
                >
                  <NuxtLink :to="`/edit-booking/${booking.id}`">
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
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </NuxtLink>
                </button>
              </article>
            </article>
          </template>
        </article>

        <article class="flex justify-between items-center mb-4">
          <NuxtLink
            to="/create-booking"
            class="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >Crear nueva reserva</NuxtLink
          >
        </article>
      </section>
    </div>
  </main>
</template>

<script lang="ts" setup>
const filterName = ref("");
const filterDate = ref("");
const filterStatus = ref("");
const showTooltip = ref<false | string>(false);

const { data, refresh } = await useFetch("/api/bookings", {
  query: {
    name: filterName,
    date: filterDate,
    status: filterStatus,
  },
});

const deleteFilters = () => {
  filterName.value = "";
  filterDate.value = "";
  filterStatus.value = "";
};

const bookings = computed(() => data?.value?.bookings || []);

const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};
const bookingDate = (index: number) => {
  const transformDate = new Date(bookings.value[index].booking_datetime);
  return transformDate.toLocaleString("es-ES", dateOptions);
};

const deleteBooking = async (id: string) => {
  await fetch(`/api/bookings/remove?id=${id}`, {
    method: "DELETE",
  });
  showTooltip.value = false;
  refresh();
};
</script>
