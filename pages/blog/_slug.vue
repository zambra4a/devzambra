<template>
  <div
    class="mt-10 flex-1 w-full h-full md:grid grid-flow-col grid-cols-3 gap-8 py-2"
  >
    <article class="blog-article col-span-2">
      <h1>{{ page.title }}</h1>
      <small
        >🗓 {{ page.createdAt | formatDate }} - ⏳
        {{ page.readingTime | millisToMinutes }}
        <a class="ml-2 hover:text-primary" :href="page.github" target="_blank"
          >¿Hay un error? Edita el artículo</a
        >
      </small>
      <nuxt-content :document="page" class="mt-4" />
      <PrevNext :prev="prev" :next="next" />
    </article>
    <aside>
      <Toc :page="page" />
      <h2>Todas las categorías</h2>
      <CategoryList />
    </aside>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('blog', params.slug).fetch()
    const [prev, next] = await $content('blog')
      .only(['title', 'slug', 'github'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      page,
      prev,
      next,
    }
  },
}
</script>
