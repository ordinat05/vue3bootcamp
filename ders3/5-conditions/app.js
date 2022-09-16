const app = Vue.createApp({
  data() {
    return {
      myClass: "text-green bg-orange",
      counter: 0,
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
