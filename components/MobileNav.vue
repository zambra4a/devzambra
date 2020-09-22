<template>
  <div class="bg-gray-100 sticky bottom-0 shadow-outline">
    <nav class="h-16 flex justify-center items-center">
      <ul
        class="w-full h-full grid grid-flow-col grid-cols-3 gap-4 text-center py-2"
      >
        <nuxt-link to="/" class="flex justify-end items-center flex-col" exact>
          <img class="h-6 w-6" src="@/assets/icons/home.svg" />
          <span>Inicio</span>
        </nuxt-link>
        <nuxt-link to="/blog" class="flex justify-end items-center flex-col">
          <img class="h-6 w-6" src="@/assets/icons/blog.svg" />
          <span>Blog</span>
        </nuxt-link>

        <nuxt-link to="/about" class="flex justify-end items-center flex-col">
          <img class="h-6 w-6" src="@/assets/icons/about.svg" />
          <span>Sobre mí</span>
        </nuxt-link>
      </ul>
    </nav>
  </div>
</template>
