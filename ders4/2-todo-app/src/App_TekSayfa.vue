<template>
  <div class="container">
    <!-- <div id="sebomOffline">
      İnternet Bağlantınızda bir problem var Lütfen Kontrol Edin.
    </div> -->
    <h3 class="text-center">Todo App</h3>
    <hr class="my-2 mx-2" />
    <label for="todoText"></label>
    <input @keydown.enter="addNewTodo" type="text" id="todoText" placeholder="Birşeyler yazınız..." />
    <ul>
      <li v-for="todoItem in todoList" :key="todoItem" class="d-flex justify-content-between align-items-center">
        <span> {{ todoItem.text }}</span>
        <button @click="deleteItem(todoItem)" class="sm red">Sil</button>
      </li>
    </ul>
    <small class="d-flex justify-content-end green mt-2"> {{ todoList.length }} adet todo vardır</small>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todoList: [
        { id: 1, text: "Bootcamp #2" },
        { id: 2, text: "Bootcamp #2.1" },
        { id: 3, text: "Bootcamp #2.2" },
        { id: 4, text: "Bootcamp #2.3" },
        { id: 5, text: "Bootcamp #2.4" },
        { id: 6, text: "Bootcamp #2.5" },
      ],
    };
  },
  methods: {
    deleteItem(todoItem) {
      // console.log(todoItem);
      this.todoList = this.todoList.filter((t) => t !== todoItem);
    },
    addNewTodo(event) {
      // console.log(event.target.value);
      this.todoList.push({
        id: new Date().getTime(),
        text: event.target.value,
      });
      event.target.value = "";
    },
  },
};
</script>
