<template>
  <div>
    <slot name="firstName" />
    <slot name="lastName" />
    <slot name="age" />
    <ul
      v-for="(item,index) in items"
      :key="index"
    >
      <li class="list-group-item">
        <slot :item="item" />
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "User",
    data() {
      return {
        items: [1, 2, 3]
      }
    }
  }
</script>

<style scoped>

</style>
