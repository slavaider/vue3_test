<template>
    <div id="todo-list-example" class="col-md-6 offset-md-3">
        <form class="form" v-on:submit.prevent="addNewTodo">
            <div class="input-group">
                <label for="new-todo"></label>
                <input
                        class="form-control"
                        v-model="newTodoText"
                        id="new-todo"
                        placeholder="E.g. Feed the cat"
                />
                <button class="btn btn-success input-group-append">Add</button>
            </div>
        </form>
        <ul class="list-group mt-1">
            <TodoItem
                    v-for="(todo, index) in todos"
                    :key="todo.id"
                    :title="todo.title"
                    @remove="todos.splice(index, 1)"
            ></TodoItem>
        </ul>
    </div>
</template>

<script>
    import TodoItem from './todoItem'

    export default {
        name: "todo",
        components: {TodoItem},
        data() {
            return {
                newTodoText: '',
                todos: [
                    {
                        id: 1,
                        title: 'Do the dishes'
                    },
                    {
                        id: 2,
                        title: 'Take out the trash'
                    },
                    {
                        id: 3,
                        title: 'Mow the lawn'
                    }
                ],
                nextTodoId: 4
            }
        },
        methods: {
            addNewTodo() {
                this.todos.push({
                    id: this.nextTodoId++,
                    title: this.newTodoText
                })
                this.newTodoText = ''
            }
        }
    }
</script>

<style scoped>

</style>
