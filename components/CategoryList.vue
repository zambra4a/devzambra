<template>
  <div class="flex flex-col justify-center">
    <nuxt-link
      v-for="(category, index) in categories"
      :key="index"
      :to="'/blog/category/' + category.title"
    >
      <article
        class="rounded shadow-lg p-5 my-2 hover:shadow-xl flex items-center dark:bg-gray-900"
      >
        <component :is="category.icon" class="w-10 h-10 mr-4" />
        <h4 class="font-bold text-xl">{{ category.title }}</h4>
      </article>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { CATEGORIES } from '@/constants/categories'

export default Vue.extend({
  data() {
    return {
      categories: CATEGORIES,
    }
  },
})
</script>
