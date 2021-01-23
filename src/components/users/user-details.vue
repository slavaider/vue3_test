<template>
  <div>
    <p>{{ details }}</p>
  </div>
</template>

<script>
  export default {
    name: "UserDetails",
    inject: ['details'],
  }
</script>

<style scoped>

</style>
