<template>
  <div class="flex flex-col justify-center">
    <nuxt-link
      v-for="(post, index) in posts"
      :key="index"
      :to="'/blog/' + post.slug"
    >
      <article class="rounded shadow-lg p-5 my-5 hover:shadow-xl">
        <h1 class="font-bold text-xl">{{ post.title }}</h1>
        <small
          >{{ post.createdAt | formatDate }} -
          {{ post.readingTime | millisToMinutes }}</small
        >
        <p>{{ post.description }}</p>
      </article>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>
