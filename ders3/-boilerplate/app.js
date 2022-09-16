const app = Vue.createApp({
  data() {
    return {
      counter: 0,
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
}).mount("#app");
