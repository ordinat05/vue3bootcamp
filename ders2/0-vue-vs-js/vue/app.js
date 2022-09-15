const app = Vue.createApp({
  data() {
    return {
      todoText: null,
      todoList: [],
    };
  },
  methods: {
    addTodo() {
      this.todoList.push(this.todoText);
      this.todoText = "";
      this.$refs.todoTextRef.focus();
    },
  },
}).mount("#app");
