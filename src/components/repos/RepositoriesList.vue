<template>
  <div>
    <ul class="list-group">
      <li
        v-for="(repo,index) in repositories"
        :key="repo.id"
        class="list-group-item"
      >
        {{ index }}) {{ repo.name }}
      </li>
    </ul>
  </div>
</template>

<script>
  import {onMounted, ref, watch,inject} from 'vue'

  export default {
    name: "RepositoriesList",
    props: {
      user: {
        type: String,
        default: null
      }
    },
    setup() {
      const user = inject('user')
      const repositories = ref([])
      const getUserRepositories = async () => {
        await fetch(`https://api.github.com/users/${user.value}/repos`, {
          headers: {
            "Authorization": "50185cb4fe84bdd3fa474765be7eb4dabf377241 OAUTH-TOKEN"
          },
        })
          .then(data => data.json()).then(
            data => repositories.value = data
          )
      }
      onMounted(getUserRepositories)
      watch(user, getUserRepositories)

      return {
        repositories,
        getUserRepositories
      }
    }
  }
</script>

<style scoped>

</style>
