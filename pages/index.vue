<template>
  <main
    class="flex flex-col justify-between min-h-[calc(100vh-208px)] bg-slate-100"
  >
    <section class="grow-[0.6] flex justify-center items-end">
      <div
        class="flex flex-col border-double rounded-md border-8 border-slate-900 px-11 pt-4 pb-2.5 bg-white shadow-2xl"
      >
        <h3 class="text-4xl xs:text-3xl">Restaurante</h3>
        <h1 class="font-alegreya text-8xl xs:text-6xl text-gray-900">
          La Pruebita
        </h1>
      </div>
    </section>

    <section class="grow-[0.4] flex justify-around items-end pb-2.5">
      <article class="bg-slate-200 px-5 py-3 rounded-md">
        <p class="text-lg">Calle Central s/n</p>
        <p class="text-sm">Tlf 665 55 55 55</p>
        <p class="text-sm">info@lapruebita.es</p>
      </article>

      <article class="scheduleContainer">
        <h6 class="scheduleTitle">Horario</h6>
        <p class="scheduleDateOne">Lunes</p>
        <p class="scheduleTimeOne">Cerrado</p>

        <p class="scheduleDateTwo">Martes a Domingo</p>
        <p class="scheduleTimeTwo">De 12:00 a 16:00 y de 19:00 a 23:00</p>
      </article>
    </section>
  </main>
</template>

<style scoped>
.scheduleContainer {
  display: grid;
  grid-template: "a a" "b c" "d e";
  grid-template-rows: repeat(3, 1.5rem);
  grid-template-columns: repeat(2, auto);
  column-gap: 1rem;
  background-color: rgb(226 232 240);
  padding: 0.75rem 1.25rem;
  border-radius: 0.375rem;
  font-family: "Roboto", sans-serif;
}
.scheduleTitle {
  grid-area: a;
  font-weight: 700;
}
.scheduleDateOne {
  grid-area: b;
}
.scheduleTimeOne {
  grid-area: c;
  font-weight: 400;
}
.scheduleDateTwo {
  grid-area: d;
}
.scheduleTimeTwo {
  grid-area: e;
  font-weight: 400;
}
@media screen and (max-width: 480px) {
  .scheduleContainer {
    grid-template-rows: repeat(3, 1rem);
  }
}
</style>
