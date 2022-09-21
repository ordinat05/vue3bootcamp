<template>
  <div class="container">
    <h3 class="text-center">Todo App</h3>
    <hr class="my-2" />
    <AddSection :addNewTodo="addNewTodo" @add-todo="addNewTodo" />
    <ListSection @delete-todo-item="deleteItem" />
    <!-- <TodoList @delete-todo-item="deleteItem" :myData="todoList" />
    <ResultBar :itemCount="todoList.length" /> -->
  </div>
</template>
<script>
import AddSection from "@/components/AddSection";
import ListSection from "@/components/ListSection.vue";
// import TodoList from "@/components/TodoList";
// import ResultBar from "@/components/ResultBar";
export default {
  components: {
    AddSection,
    ListSection,
    // TodoList,
    // ResultBar,
  },
  created() {
    // setTimeout(() => {
    //   this.todoList = [
    //     { id: 1, text: "Bootcamp #2" },
    //     { id: 2, text: "Bootcamp #2.1" },
    //     { id: 3, text: "Bootcamp #2.2" },
    //     { id: 4, text: "Bootcamp #2.3" },
    //     { id: 5, text: "Bootcamp #2.4" },
    //     { id: 6, text: "Bootcamp #2.5" },
    //   ];
    // }, 2000);
  },
  data() {
    return {
      provideData: {
        todoList: [
          { id: 1, text: "Bootcamp #2" },
          { id: 2, text: "Bootcamp #2.1" },
          { id: 3, text: "Bootcamp #2.2" },
          { id: 4, text: "Bootcamp #2.3" },
          { id: 5, text: "Bootcamp #2.4" },
          { id: 6, text: "Bootcamp #2.5" },
        ],
      },
    };
  },
  provide() {
    return {
      provideData: this.provideData,
      deleteItem: this.deleteItem,
    };
  },
  methods: {
    testEvent(data) {
      alert(data);
    },
    deleteItem(todoItem) {
      // console.log(todoItem);
      this.provideData.todoList = this.todoList.filter((t) => t !== todoItem);
    },
    addNewTodo(todo) {
      // console.log(event.target.value);
      // console.log("event", event);
      this.provideData.todoList.push({
        id: new Date().getTime(),
        text: todo,
      });
      // event.target.value = "";
    },
  },
};
</script>
