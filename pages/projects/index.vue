<template>
  <div>
    <h2 class="text-center">Mis proyectos destacados</h2>
    <div
      v-for="(repo, index) of repos"
      :key="index"
      class="m-5 p-5 border rounded-lg"
    >
      <h3>{{ repo.name }}</h3>
      <p>{{ repo.description }}</p>
      <span class="mt-5 flex justify-between sm:flex-row flex-col">
        <a :href="repo.homepage" target="_blank" class="text-primary">
          Sitio web
        </a>
        <a :href="repo.html_url" target="_blank" class="text-primary">
          Ver en Github
        </a>
      </span>
    </div>
    <div class="flex justify-center">
      <a
        href="https://github.com/devzambra?tab=repositories"
        target="_blank"
        class="hover:opacity-75 bg-primary px-4 py-2 rounded-lg text-xl text-white font-bold mx-2"
        >Ver más en Github</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      repos: [],
    }
  },
  mounted() {
    fetch('https://api.github.com/users/devzambra/repos?sort=pushed', {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.repos = data.filter((d: any) => d.homepage)
      })
  },
})
</script>
