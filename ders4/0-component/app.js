const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
      itemList: [],
    };
  },
  methods: {
    addItem() {
      this.itemList.push(new Date().getTime());
    },
  },
  computed: {},
  watch: {},
});
app.component("counter-item", {
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  // String Template Component
  template: `
  <div class="container-sm">
    <h3 class="mb-2"> {{ counter }}</h3>
    <button @click="counter--" class="red sm sebom_mr2">-</button>
    <button @click="counter++" class="green sm sebom_mr2">+</button>
</div>`,
});

app.mount("#app");
