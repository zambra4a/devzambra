<template>
  <div class="my-10 flex justify-around">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="flex items-center text-primary"
    >
      <img src="@/assets/icons/prev.svg" class="mr-2 w-5 h-5" />
      <span>{{ prev.title }}</span>
    </NuxtLink>

    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="flex items-center text-primary"
    >
      <span class="mr-2">{{ next.title }}</span>
      <img src="@/assets/icons/next.svg" class="w-5 h-5" />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    prev: {
      type: Object,
      default: null,
    },
    next: {
      type: Object,
      default: null,
    },
  },
})
</script>
