<template lang="pug">
  v-calendar(
    type="week"
    start="now"
    end="next"
    first-interval="8"
    interval-count="15"
    interval-height="30"
  )
</template>

<script>
export default {
  components: {
  },
  computed: {
    now: () => new Date().toISOString().split('T')[0],
    next: () => {
      const d = new Date()
      d.setDate(d.getDate() + 7)
      return d
    }
  }
}
</script>

<style scoped>
</style>
