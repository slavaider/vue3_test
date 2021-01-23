<template>
  <div
    id="v-model-example"
    class="demo"
  >
    <p>First name: {{ firstName }}</p>
    <p>Last name: {{ lastName }}</p>
    <user-name
      v-model:firstName="firstName"
      v-model:lastName.capitalize="lastName"
    />
    <user>
      <template #firstName>
        firstName:{{ firstName }}
        <hr>
      </template>
      <template #lastName>
        lastName:{{ lastName }}
        <hr>
      </template>
      <template #age>
        age: 123
        <hr>
      </template>
      <template #default="slotProps">
        <span>Done </span>
        <span style="color:red">{{ slotProps.item }}</span>
      </template>
    </user>
    <user-details />
    <label>
      <input
        ref="input"
        type="text"
      >
    </label>
  </div>
</template>

<script>
  import user from './user'
  import userDetails from './user-details'
  import {computed, defineAsyncComponent} from 'vue'

  export default {
    name: 'Users',
    components: {
      userName: defineAsyncComponent(() => new Promise((async (resolve, reject) => {
          try {
            setTimeout(() => resolve(import('./user-name')), 5000)
          } catch (e) {
            if (error) reject(error)
          }
        }))
      ), user, userDetails
    },
    provide() {
      return {
        details: computed(() => this.firstName)
      }
    },
    data() {
      return {
        firstName: '',
        lastName: '',
      }
    },
    mounted() {
      this.focusInput()
    },
    methods: {
      focusInput() {
        this.$refs.input.focus()
      }
    },

  }
</script>

<style scoped>
  .demo {
    font-family: sans-serif;
    border: 1px solid #eee;
    border-radius: 2px;
    padding: 20px 30px;
    margin-top: 1em;
    margin-bottom: 40px;
    user-select: none;
    overflow-x: auto;
  }
</style>
