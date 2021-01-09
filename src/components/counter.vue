<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Title</h4>
                <p class="card-text">Text</p>
            </div>
            <div class="card-actions">
                <button class="btn btn-primary" @click="goAway">
                    To home
                </button>
            </div>
            <p
                    :class="{active: true,'text-danger': false }"
                    :style="{ 'color': 'red', 'font-size': 15 + 'px' }"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, voluptates.</p>
            <h1 v-if="awesome">Vue is awesome!</h1>
            <h1 v-else>Oh no 😢</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "counter",
        data() {
            return {
                awesome: 1
            }
        },
        methods: {
            goAway() {
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

</style>
