<template>
  <div class="demo-tab">
    Posts component
  </div>
  <ul>
    <li
      v-for="(i,index) in items"
      :key="index"
    >
      {{ i }}
    </li>
  </ul>
  <button
    class="btn btn-primary"
    @click="items.push(123)"
  >
    Add
  </button>
</template>

<script>
  export default {
    name: 'TabPosts',
    data() {
      return {items: [1, 2, 3]}
    }
  }
</script>

<style scoped>

</style>
