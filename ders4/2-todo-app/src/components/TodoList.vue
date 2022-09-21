<template>
  <ul>
    <!-- {{
      myData
    }} -->
    <TodoListItem v-for="todoItem in provideData.todoList" :key="todoItem.id" :item="todoItem" />
    <!-- <TodoListItem v-for="i in 10" :key="i" /> -->
  </ul>
</template>
<script>
import TodoListItem from "@/components/TodoListItem";
export default {
  // props: ["myData"],
  inject: ["provideData"],
  // props: {
  //   myData: {
  //     type: String,
  //     required: false,
  //     default: "",
  //   },
  // },
  components: {
    TodoListItem,
  },
};
</script>
