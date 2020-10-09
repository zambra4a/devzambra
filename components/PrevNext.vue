<template>
  <div class="my-10 flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="flex items-center text-primary"
    >
      <component :is="prevIcon" class="mr-2 w-5 h-5 prevNextIcon" />
      <span>{{ prev.title }}</span>
    </NuxtLink>

    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="flex items-center text-primary"
    >
      <span class="mr-2">{{ next.title }}</span>
      <component :is="nextIcon" class="mr-2 w-5 h-5 prevNextIcon" />
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
  data() {
    return {
      prevIcon: require('@/assets/icons/prev.svg?inline'),
      nextIcon: require('@/assets/icons/next.svg?inline'),
    }
  },
})
</script>

<style scoped>
.prevNextIcon g polygon {
  fill: #48bb78;
}
</style>
