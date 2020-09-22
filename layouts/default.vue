<template>
  <span>
    <div class="container flex flex-col min-h-screen justify-between px-3">
      <Navbar />
      <Nuxt />
      <Footer />
    </div>
    <MobileNav class="sm:hidden" />
  </span>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  font-size: 18px;
}
h1 {
  font-size: 2em;
}
h2 {
  font-size: 1.5em;
}
h3 {
  font-size: 1.3em;
}
h4 {
  font-size: 1.1em;
}
.blog-article {
  h2,
  h3,
  h4 {
    @apply text-primary;
  }
  p {
    font-size: 1rem;
    text-align: justify;
    line-height: 2em;
    margin-bottom: 2.5rem;
  }
}

.container {
  margin: 0 auto;
}
.secondary-title {
  font-size: 1.675rem;
  text-align: center;
}
</style>
