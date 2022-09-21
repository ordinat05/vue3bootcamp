<template>
  <ul>
    <!-- {{
      myData
    }} -->
    <TodoListItem @delete-todo-item="$emit('delete-todo-item', $event)" v-for="todoItem in myData" :key="todoItem.id" :item="todoItem" />
    <!-- <TodoListItem v-for="i in 10" :key="i" /> -->
  </ul>
</template>
<script>
import TodoListItem from "@/components/TodoListItem";
export default {
  props: ["myData"],
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
