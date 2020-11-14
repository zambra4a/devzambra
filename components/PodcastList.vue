<template>
  <div>
    <article
      v-for="item in items"
      :key="item.guid"
      class="flex flex-col justify-between items-center rounded shadow-lg p-5 my-5 hover:shadow-xl dark:bg-gray-900"
    >
      <div class="flex flex-col sm:flex-row justify-between items-center">
        <div class="sm:mb-0 mb-4">
          <img :src="item.itunes.image" class="w-40" />
        </div>
        <div class="ml-4">
          <h3 class="font-bold text-xl">{{ item.title }}</h3>
          <p>{{ item.contentSnippet }}</p>
        </div>
      </div>
      <div class="flex w-full mt-2">
        <audio controls class="flex w-full rounded">
          <source :src="item.enclosure.url" :type="item.enclosure.type" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
