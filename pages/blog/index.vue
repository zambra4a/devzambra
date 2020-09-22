<template>
  <div
    class="mt-10 flex-1 w-full h-full md:grid grid-flow-col grid-cols-3 gap-8 py-2"
  >
    <section class="col-span-2">
      <h2 class="text-2xl">Últimas entradas del blog</h2>
      <PostsList :posts="posts" />
    </section>
    <aside>
      <nuxt-link tag="h2" to="/blog" class="text-2xl cursor-pointer" exact
        >Todas las categorías</nuxt-link
      >
      <CategoryList />
    </aside>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ $content }) {
    const posts = await $content('blog')
      .sortBy('createdAt:dsc')
      .only(['title', 'description', 'createdAt', 'slug', 'readingTime'])
      .limit(10)
      .fetch()

    return { posts }
  },
})
</script>
