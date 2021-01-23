<template>
  <div>
    <label>
      <input
        type="text"
        :value="firstName"
        @input="$emit('update:firstName', $event.target.value)"
      >
    </label>

    <label>
      <input
        type="text"
        :value="lastName"
        @input="emitValue"
      >
    </label>
  </div>
</template>

<script>
  export default {
    name: 'UserName',
    props: {
      firstName: {
        type: String,
        default:''
      },
      lastName: {
        type: String,
        default:''
      },
      lastNameModifiers: {
        type: Object,
        default:null
      }
    },
    emits: ['update:firstName', 'update:lastName'],
    methods: {
      emitValue(e) {
        let value = e.target.value;
        if (this.lastNameModifiers.capitalize) {
          value = value.charAt(0).toUpperCase() + value.slice(1)
        }
        this.$emit('update:lastName', value)
      }
    }
  }
</script>

<style scoped>

</style>
