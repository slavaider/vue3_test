<template>
  <li class="list-group-item d-flex justify-content-between">
    {{ title }}
    <button
      class="btn btn-primary"
      @click="$emit('remove')"
    >
      Remove
    </button>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    title:{
      type:String,
      default:''
    }
  },
  emits: ['remove']
}
</script>

<style scoped>

</style>
