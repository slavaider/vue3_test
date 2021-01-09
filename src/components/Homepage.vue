<template>
    <div class="Homepage">
        {{my_counter}}
        <button class="btn btn-success" @click="add(5)">Add 5</button>
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
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'Homepage',
        computed: {
            ...mapGetters({my_counter: 'counter'})
        },
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
            },
            ...mapActions({add: 'Async_increment'})
        },
        mounted() {
            setInterval(() => this.counter++, 1000)
        }
    }
</script>

