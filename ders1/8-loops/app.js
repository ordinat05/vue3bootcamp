const app = Vue.createApp({
  data() {
    return {
      // todoList: ["Todo1", "Todo2", "Todo3", "Todo4"],
      todoList: [
        { id: 1, text: "Vue Bootcamp Hafta1", completed: false },
        { id: 2, text: "Vue Bootcamp Hafta2", completed: false },
        { id: 3, text: "Vue Bootcamp Hafta3", completed: false },
        { id: 4, text: "Vue Bootcamp Hafta4", completed: false },
        { id: 5, text: "Vue Bootcamp Hafta5", completed: false },
        { id: 6, text: "Vue Bootcamp Hafta6", completed: false },
        { id: 7, text: "Vue Bootcamp Hafta7", completed: false },
      ],
    };
  },
  methods: {
    addTodo(event) {
      this.todoList.push({
        id: new Date().getTime(),
        text: event.target.value,
        completed: false,
      });
      event.target.value = "";
    },
    removeItem(todoItem) {
      console.log(todoItem);
      this.todoList = this.todoList.filter((todo) => todo != todoItem);
    },
  },
  computed: {
    completedItemCount() {
      return this.todoList.filter((t) => t.completed).length;
    },
    uncompletedItemCount() {
      return this.todoList.filter((t) => !t.completed).length;
    },
  },
}).mount("#app");
