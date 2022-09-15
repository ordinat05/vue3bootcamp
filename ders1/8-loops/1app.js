const app = Vue.createApp({
  data() {
    return {
      eklenecekKelime: "",
      todoList: ["Todo1", "Todo2", "Todo3", "Todo4"],
    };
  },
  methods: {
    pushEt() {
      // this.todoList.push($event.target.value);
      this.todoList.push(this.eklenecekKelime);
    },
    temizleInput() {
      this.eklenecekKelime = "";
      this.$refs.todoTextRef.focus();
      // document.getElementById("todoList").innerHTML = "";
      // alert("Liste Temizlendi");
    },
  },
  // methods: {
  //   addTodo() {
  //     this.todoList.push(this.eklenecekKelime);
  //     this.todoList.push(this.todoText);
  //   },
  // },
}).mount("#app");
