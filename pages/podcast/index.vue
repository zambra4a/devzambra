<template>
  <div class="mt-10 flex-1 w-full h-full py-2">
    <section class="">
      <h2 class="text-2xl">Todos los capítulos del podcast</h2>
      <PodcastList :items="items" />
    </section>
  </div>
</template>

<script>
const Parser = require('rss-parser')

export default {
  async asyncData() {
    const rss = await new Parser().parseURL(
      'https://anchor.fm/s/3f0ee6d0/podcast/rss'
    )
    const { items } = rss

    return { items }
  },
}
</script>
