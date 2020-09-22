import Vue from 'vue'

Vue.filter('formatDate', (value) => {
  return new Date(value).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})

Vue.filter('millisToMinutes', (value) => {
  const minutes = Math.ceil(value / 60000)
  const text = minutes > 1 ? 'minutos de lectura' : 'minuto de lectura'
  return `${minutes} ${text}`
})
