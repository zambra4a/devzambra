<template>
  <div class="mb-4">
    <h2 v-if="page.toc.length > 0">Contenido de este artículo</h2>
    <ul>
      <NuxtLink
        v-for="link of page.toc"
        :key="link.id"
        class="p-2 my-2 cursor-pointer hover:shadow-md hover:text-primary dark-hover:bg-gray-900"
        :to="`#${link.id}`"
        tag="li"
      >
        {{ link.text }}
      </NuxtLink>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
})
</script>
