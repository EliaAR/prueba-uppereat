<template>
  <div>
    <header>
      <nav
        class="flex items-center bg-gray-900 w-full h-12 justify-between p-4"
      >
        <section class="logo mr-4">
          <p class="text-xl font-bold text-white">
            <NuxtLink to="/" class="flex items-center">
              <img
                src="../assets/logo la pruebita.png"
                alt="logo"
                class="w-8 h-8"
              />
              La Pruebita
            </NuxtLink>
          </p>
        </section>

        <section class="links">
          <ul class="flex items-center">
            <li class="cursor-pointer text-white text-base font-normal">
              <NuxtLink to="/bookings">Reservas</NuxtLink>
            </li>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-slash w-5 h-5 mx-2 text-white"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>

            <li class="cursor-pointer text-white text-base font-normal">
              <NuxtLink to="/menu">Menú</NuxtLink>
            </li>
          </ul>
        </section>
      </nav>
    </header>

    <main
      class="flex flex-col justify-center items-center min-h-[calc(100vh-217px)] bg-slate-100"
    >
      <slot />
    </main>

    <footer
      class="footer-container w-full flex items-center justify-center p-4 flex-col bg-gray-700"
    >
      <section
        class="social-icon flex items-center mt-8 w-48 justify-around text-green-400"
      >
        <article class="twitter">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-twitter w-4 h-4"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              />
            </svg>
          </a>
        </article>

        <article class="instagram">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-instagram w-4 h-4"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
              />
            </svg>
          </a>
        </article>

        <article class="facebook">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-facebook w-4 h-4"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
              />
            </svg>
          </a>
        </article>

        <article>
          <a href="#">
            <svg
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.2 320.2"
              fill="currentColor"
              width="16"
              height="16"
            >
              <path
                class="st0"
                d="M128.2 127.9C92.7 127.9 64 156.6 64 192c0 35.4 28.7 64.1 64.1 64.1 35.4 0 64.1-28.7 64.1-64.1.1-35.4-28.6-64.1-64-64.1zm0 110c-25.3 0-45.9-20.5-45.9-45.9s20.5-45.9 45.9-45.9S174 166.7 174 192s-20.5 45.9-45.8 45.9z"
              />
              <circle class="st0" cx="128.4" cy="191.9" r="31.9" />
              <path
                class="st0"
                d="M384.2 127.9c-35.4 0-64.1 28.7-64.1 64.1 0 35.4 28.7 64.1 64.1 64.1 35.4 0 64.1-28.7 64.1-64.1 0-35.4-28.7-64.1-64.1-64.1zm0 110c-25.3 0-45.9-20.5-45.9-45.9s20.5-45.9 45.9-45.9S430 166.7 430 192s-20.5 45.9-45.8 45.9z"
              />
              <circle class="st0" cx="384.4" cy="191.9" r="31.9" />
              <path
                class="st0"
                d="M474.4 101.2l37.7-37.4h-76.4C392.9 29 321.8 0 255.9 0c-66 0-136.5 29-179.3 63.8H0l37.7 37.4C14.4 124.4 0 156.5 0 192c0 70.8 57.4 128.2 128.2 128.2 32.5 0 62.2-12.1 84.8-32.1l43.4 31.9 42.9-31.2-.5-1.2c22.7 20.2 52.5 32.5 85.3 32.5 70.8 0 128.2-57.4 128.2-128.2-.1-35.4-14.6-67.5-37.9-90.7zM368 64.8c-60.7 7.6-108.3 57.6-111.9 119.5-3.7-62-51.4-112.1-112.3-119.5 30.6-22 69.6-32.8 112.1-32.8S337.4 42.8 368 64.8zM128.2 288.2C75 288.2 32 245.1 32 192s43.1-96.2 96.2-96.2 96.2 43.1 96.2 96.2c-.1 53.1-43.1 96.2-96.2 96.2zm256 0c-53.1 0-96.2-43.1-96.2-96.2s43.1-96.2 96.2-96.2 96.2 43.1 96.2 96.2c-.1 53.1-43.1 96.2-96.2 96.2z"
              />
            </svg>
          </a>
        </article>
      </section>

      <section class="links mb-8 w-2/4 mt-8">
        <ul class="flex items-end justify-between">
          <li class="text-gray-400 text-base">
            <a href="#">Aviso legal</a>
          </li>
          <li class="text-gray-400 text-base">
            <a href="#">Política de privacidad</a>
          </li>
          <li class="text-gray-400 text-base">
            <a href="#">Cookies</a>
          </li>
          <li class="text-gray-400 text-base">
            <small>© 2023 La Pruebita</small>
          </li>
        </ul>
      </section>
    </footer>
  </div>
</template>

<script setup></script>
