<template>
    <li class="list-group-item d-flex justify-content-between">
        {{ title }}
        <button class="btn btn-primary" @click="$emit('remove')">Remove</button>
    </li>
</template>

<script>
    export default {
        name: "todoItem",
        props: ['title'],
        emits: ['remove']
    }
</script>

<style scoped>

</style>
