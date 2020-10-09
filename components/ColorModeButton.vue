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
      colorMode: 'light',
    }
  },
  computed: {
    modeIcon() {
      return this.colorMode === 'light' ? this.moonIcon : this.sunIcon
    },
    mode() {
      if (process.browser) {
        const activeMode = localStorage.getItem('colorMode')
        return activeMode && (activeMode === 'light' || activeMode === 'dark')
          ? activeMode
          : 'light'
      }
      return 'light'
    },
  },
  mounted() {
    this.$colorMode.preference = this.mode
    this.colorMode = this.mode
  },
  methods: {
    setColorMode() {
      if (process.browser) {
        if (this.colorMode === 'light') {
          localStorage.setItem('colorMode', 'dark')
          this.colorMode = 'dark'
        } else {
          localStorage.setItem('colorMode', 'light')
          this.colorMode = 'light'
        }
      }
      this.$colorMode.preference = this.colorMode
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
