<template>
  <div class="bg-gray-100 sticky bottom-0 with-top-shadow dark:bg-gray-900">
    <nav class="h-16 flex justify-center items-center">
      <ul
        class="w-full h-full grid grid-flow-col grid-cols-4 gap-2 text-center py-2"
      >
        <nuxt-link to="/blog" class="flex justify-end items-center flex-col">
          <component :is="blogIcon" class="h-6 w-6" />
          <span>Blog</span>
        </nuxt-link>
        <nuxt-link to="/podcast" class="flex justify-end items-center flex-col">
          <component :is="podcastIcon" class="h-6 w-6" />
          <span>Podcast</span>
        </nuxt-link>
        <nuxt-link
          to="/projects"
          class="flex justify-end items-center flex-col"
        >
          <component :is="projectsIcon" class="h-6 w-6" />
          <span>Proyectos</span>
        </nuxt-link>
        <nuxt-link to="/about" class="flex justify-end items-center flex-col">
          <component :is="aboutIcon" class="h-6 w-6" />
          <span>Sobre mí</span>
        </nuxt-link>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homeIcon: require('@/assets/icons/home.svg?inline'),
      blogIcon: require('@/assets/icons/blog.svg?inline'),
      projectsIcon: require('@/assets/icons/projects.svg?inline'),
      aboutIcon: require('@/assets/icons/about.svg?inline'),
      podcastIcon: require('@/assets/icons/mic.svg?inline'),
    }
  },
}
</script>

<style scoped>
.dark-mode svg path {
  fill: white;
}
a.text-primary svg path {
  fill: #48bb78;
}
.with-top-shadow {
  box-shadow: 0 -20px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>
