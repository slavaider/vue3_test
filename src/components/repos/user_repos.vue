<template>
  <div>
    <RepositoriesFilters />
    <RepositoriesSortBy />
    <RepositoriesList />
  </div>
</template>

<script>
  import RepositoriesFilters from "@/components/repos/RepositoriesFilters";
  import RepositoriesSortBy from "@/components/repos/RepositoriesSortBy";
  import RepositoriesList from "@/components/repos/RepositoriesList";

  export default {
    components: {RepositoriesFilters, RepositoriesSortBy, RepositoriesList},
    data() {
      return {
        user: {name: ''},
        repositories: [], // 1
        filters: {}, // 3
        searchQuery: '' // 2
      }
    },
    // computed: {
    //   filteredRepositories() {
    //   }, // 3
    //   repositoriesMatchingSearchQuery() {
    //   }, // 2
    // },
    watch: {
      user: 'getUserRepositories' // 1
    },
    mounted() {
      this.getUserRepositories() // 1
    },
    methods: {
      getUserRepositories() {
        // using `this.user` to fetch user repositories
      }, // 1
      updateFilters() {
      }, // 3
    }
  }
</script>

<style scoped>

</style>
