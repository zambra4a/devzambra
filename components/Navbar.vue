<template>
  <header class="py-5">
    <div class="container flex justify-between items-center">
      <nuxt-link class="flex items-center no-active" to="/" exact>
        <h2>Manuel Zambrano</h2>
      </nuxt-link>
      <nav class="flex items-center">
        <ul class="text-center hidden sm:flex">
          <li class="px-2 border-r-2 links">
            <nuxt-link to="/" class="link" exact> Inicio </nuxt-link>
          </li>
          <li class="px-2 border-r-2 links">
            <nuxt-link to="/blog" class="link"> Blog </nuxt-link>
          </li>
          <li class="px-2 links">
            <nuxt-link to="/about" class="link"> Sobre mí </nuxt-link>
          </li>
        </ul>
        <!-- <div class="hidden sm:block" data-v-1ed1303c="">
          <ul class="flex items-center justify-center" data-v-1ed1303c="">
            <li data-v-1ed1303c="">
              <svg
                data-v-1ed1303c=""
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-moon light cursor-pointer"
              >
                <path
                  data-v-1ed1303c=""
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                ></path>
              </svg>
            </li>
          </ul>
        </div> -->
      </nav>
    </div>
  </header>
</template>
