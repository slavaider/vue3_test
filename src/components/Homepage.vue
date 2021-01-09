<template>
    <div class="Homepage">
        {{counter}}
        <ul class="list-group">
            <li class="list-group-item" v-for="(value,key,index) in items" :key="index">
                {{index+1}}. {{key}}:{{value}}
            </li>
        </ul>
        <br>
        <ul class="list-group">
            <li class="list-group-item" v-for="(item,index) in todos" :key="index">
                {{index+1}}. {{item.text}}
            </li>
        </ul>
        <p>{{ message }}</p>
        <button @click="reverseMessage" class="btn btn-success">Reverse Message</button>
    </div>
</template>

<script>
    export default {
        name: 'Homepage',
        data() {
            return {
                counter: 0,
                items: {
                    person1: '123',
                    person2: '456',
                    person3: '789',
                },
                message: 'Hello world!',
                todos: [
                    {text: 'Learn JavaScript'},
                    {text: 'Learn Vue'},
                    {text: 'Build something awesome'}
                ]
            }
        },
        methods: {
            reverseMessage() {
                this.message = this.message.split('').reverse().join('')
            }
        },
        mounted() {
            setInterval(() => this.counter++, 1000)
        }
    }
</script>

<style scoped>
    .Homepage {
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
