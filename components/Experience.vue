<template>
  <div class="mt-20 flex flex-col items-center justify-center">
    <h1 class="text-2xl font-bold mb-10">Mi experiencia 👨🏻‍💻</h1>
    <div class="flex md:flex-row flex-col items-center justify-center">
      <div
        v-for="(job, index) in jobs"
        :key="index"
        class="job-card m-5 p-5 shadow-lg rounded-lg dark:bg-gray-900"
      >
        <h2 class="text-lg font-bold">
          {{ job.city }}
        </h2>
        <em class="text-md">{{ job.company }}</em>
        <p class="mt-2">{{ job.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      jobs: [
        {
          company: 'Grupo ICA',
          city: 'Barcelona',
          description:
            'Desarrollador Frontend Senior con Angular. Desarrollo aplicaciones web y móviles usando Angular, Swift, TDD, Docker...',
        },
        {
          company: 'Everis',
          city: 'Sevilla',
          description:
            'Desarrollador Liferay desarrollando aplicaciones para grandes compañías usando Lifeay, Scrum, Jenkins...',
        },
        {
          company: 'Guadaltel S.A.',
          city: 'Sevilla',
          description:
            'Prácticas. Desarrollador Junior realizando aplicaciones con Java, Oracle, Spring, Richfaces...',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.job-card:hover {
  @apply shadow-2xl;
}
</style>
