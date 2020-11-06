<template>
  <div class="flex flex-col fixed bottom-0 mb-16 sm:mb-0 right-0 w-16 h-16 p-2">
    <button
      class="flex justify-center items-center rounded rounded-full dark:bg-gray-900 bg-primary shadow-lg w-full h-full"
      @click="setColorMode"
    >
      <component :is="modeIcon" class="w-6 h-6" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sunIcon: require('@/assets/icons/sun.svg?inline'),
      moonIcon: require('@/assets/icons/moon.svg?inline'),
    }
  },
  computed: {
    modeIcon() {
      return this.$colorMode.preference === 'light'
        ? this.moonIcon
        : this.sunIcon
    },
  },
  mounted() {
    if (this.$colorMode.preference === 'system') {
      this.$colorMode.preference = 'light'
    }
  },
  methods: {
    setColorMode() {
      let colorMode = 'light'
      if (process.browser) {
        if (this.$colorMode.preference === 'light') {
          colorMode = 'dark'
        } else {
          colorMode = 'light'
        }
      }
      this.$colorMode.preference = colorMode
    },
  },
}
</script>

<style scoped>
svg path {
  fill: white;
}
button {
  outline: none;
}
</style>
