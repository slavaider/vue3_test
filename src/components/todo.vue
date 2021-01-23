<template>
  <div
    id="todo-list-example"
    class="col-md-6 offset-md-3"
  >
    <form
      class="form"
      @submit.prevent="addNewTodo"
    >
      <div class="input-group">
        <label for="new-todo" />
        <input
          id="new-todo"
          v-model="newTodoText"
          class="form-control"
          placeholder="E.g. Feed the cat"
        >
        <button class="btn btn-success input-group-append">
          Add
        </button>
      </div>
    </form>
    <ul class="list-group mt-1">
      <TodoItem
        v-for="(todo, index) in todos"
        :key="todo.id"
        :title="todo.title"
        @remove="todos.splice(index, 1)"
      />
    </ul>
    <p>{{ searchText }}</p>
    <custom-input
      :model-value="searchText"
      @update:model-value="searchText = $event"
    />
    <!--  Same-->
    <custom-input
      v-model="searchText"
    />
  </div>
</template>

<script>
import TodoItem from './todoItem'
import CustomInput from './custom-input'

export default {
  name: 'Todo',
  components: { TodoItem, CustomInput },
  data () {
    return {
      newTodoText: '',
      searchText: '',
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
    addNewTodo () {
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
