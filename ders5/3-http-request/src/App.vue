<template>
  <div class="container">
    <h3>Alışveriş Listesi</h3>
    <hr />
    <div class="my-2">
      <input type="text" placeholder="ne alacaksın?" @keydown.enter="onSave" />
    </div>
    <ul>
      <li
        v-for="item in itemsList"
        :key="item.id"
        class="d-flex justify-content-between align-items-center"
      >
        <span>{{ item.title }}</span>
        <button class="sm red">Sil</button>
      </li>
    </ul>
    <small class="mt-2 text-red d-flex justify-content-end align-items-center"
      >{{ itemsList.length }} {{ itemCount }} adet alınacak ürün var.</small
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  // name: "App",
  data() {
    return {
      itemsList: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/items").then((items_response) => {
      console.log("items_response :>> ", items_response);
      this.itemsList = items_response.data || [];
      console.log("this.itemsList :>> ", this.itemsList);
    });
  },
  methods: {
    onSave(e) {
      // alert(e.target.value);
      const saveObject = {
        title: e.target.value,
        created_at: new Date(),
        completed: false,
      };
      axios
        .post("http://localhost:3000/items", saveObject)
        .then((save_response) => {
          console.log(save_response);
        });
      e.target.value = "";
      e.target.focus();
    },
  },
  // components: {},
  computed: {
    itemCount() {
      return this.itemsList.length || 0;
    },
  },
};
</script>
