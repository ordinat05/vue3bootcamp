// const app = Vue.createApp({
//   data() {
//     return {
//       todoText: null,
//       todoList: [],
//     };
//   },
//   methods: {
//     addTodo() {
//       this.todoList.push(this.todoText);
//     },
//   },
// }).mount("#app");

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
    },
    resetInput() {
      this.todoText = "";
      this.$refs.todoTextRef.focus();
    },
    silListeyi() {
      document.getElementById("todoList").innerHTML = "";
      alert("Liste Temizlendi");
    },
  },
}).mount("#app");
