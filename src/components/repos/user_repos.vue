<template>
  <div>
    <label>
      <input
        type="text"
        :value="user"
        @keyup.enter="user=$event.target.value"
      >
    </label>
    <RepositoriesFilters />
    <RepositoriesSortBy />
    <RepositoriesList />
  </div>
</template>

<script>
  import RepositoriesFilters from "@/components/repos/RepositoriesFilters";
  import RepositoriesSortBy from "@/components/repos/RepositoriesSortBy";
  import RepositoriesList from "@/components/repos/RepositoriesList";
  import {provide, ref} from 'vue'

  export default {
    components: {RepositoriesFilters, RepositoriesSortBy, RepositoriesList},
    setup() {
      const user = ref('slavaider')
      provide('user', user)
      return {
        user
      }
    },
    data() {
      return {
        filters: {
          words: '',
          type: null
        }, // 3
        searchQuery: '' // 2
      }
    },
    computed: {
      filteredRepositories() {
        return this.repositories.filter((el) => el.name.indexOf(this.filters.words) !== -1)
      }, // 3
      repositoriesMatchingSearchQuery() {
        return this.repositories.filter((el) => el.name.indexOf(this.searchQuery) !== -1)
      }, // 2
    },
  }
</script>

<style scoped>

</style>
