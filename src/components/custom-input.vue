<template>
  <label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </label>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    modelValue:{
      type:String,
      default:''
    }
  },
  emits: ['update:modelValue']
}
</script>

<style scoped>

</style>
