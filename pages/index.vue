<template>
  <main class="mb-auto">
    <section>
      <section class="pb-10 items-center md:grid md:grid-cols-1">
        <div>
          <h1 class="text-2xl font-semibold">¡Hola! Soy Manuel Zambrano.</h1>
          <div class="h-2" />

          <p>
            Soy Senior Frontend Developer actualmente enfocado al mundo del
            desarrollo web con Angular, Vue, Nuxt y JavaScript, entre otros.
          </p>
          <p>
            Mi actual objetivo es seguir aprendiendo muchísimo de este
            maravilloso mundo del Frontend y ser cada vez mejor profesional.
          </p>
          <p>
            Si queréis saber más sobre mí o mi trabajo, podéis visitar el blog o
            seguirme por las redes sociales que aparecen abajo ☝☝
          </p>
          <div class="flex justify-center items-center my-4">
            <nuxt-link
              to="/blog"
              class="blog-button hover:opacity-75 bg-primary px-4 py-2 rounded-lg text-xl text-white font-bold mx-2"
            >
              Blog
            </nuxt-link>
            <nuxt-link
              to="/about"
              class="about-button hover:bg-primary hover:text-white border-primary px-4 py-2 rounded-lg text-lg font-bold mx-2"
            >
              Sobre mí
            </nuxt-link>
            <a
              href="https://www.linkedin.com/in/manuel-zambrano"
              class="mx-2 h-8 w-8"
              target="_blank"
            >
              <img style="width: 100%" src="@/assets/icons/linkedin.svg" />
            </a>
            <a
              href="https://github.com/devzambra"
              class="mx-2 h-8 w-8"
              target="_blank"
            >
              <img style="width: 100%" src="@/assets/icons/github.svg" />
            </a>
            <a
              href="mailto:dev.mzambrano@gmail.com"
              class="mx-2 h-8 w-8"
              target="_blank"
            >
              <img style="width: 100%" src="@/assets/icons/mail.svg" />
            </a>
          </div>
        </div>
      </section>
      <section>
        <h2 class="text-3xl">Últimas entradas del blog</h2>
        <PostsList :posts="posts" />
      </section>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('blog')
      .only(['title', 'description', 'createdAt', 'slug', 'readingTime'])
      .sortBy('createdAt:desc')
      .limit(3)
      .fetch()

    return { posts }
  },
}
</script>

<style scoped>
.image-wrapper .image {
  width: 385px;
  height: 510px;
  @apply rounded;
}
</style>
