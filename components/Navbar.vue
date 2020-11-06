<template>
  <header class="py-5">
    <div class="container flex justify-between items-center">
      <nuxt-link class="flex items-center no-active" to="/" exact>
        <h2 class="font-bold">Manuel Zambrano</h2>
      </nuxt-link>
      <nav class="flex items-center">
        <ul class="text-center hidden sm:flex">
          <li class="px-2 border-r-2 links">
            <nuxt-link to="/" class="link" exact> Inicio </nuxt-link>
          </li>
          <li class="px-2 border-r-2 links">
            <nuxt-link to="/blog" class="link"> Blog </nuxt-link>
          </li>
          <li class="px-2 border-r-2 links">
            <nuxt-link to="/projects" class="link"> Proyectos </nuxt-link>
          </li>
          <li class="px-2 links">
            <nuxt-link to="/about" class="link"> Sobre mí </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
