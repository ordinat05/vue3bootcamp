const app = Vue.createApp({
  data() {
    return {
      myClass: "text-green bg-orange",
      counter: 0,
      counter2: 0,
      showState: true,
      showState2: true,
    };
  },
  methods: {
    addItem() {
      this.itemList.push(new Date().getTime());
    },
    inc() {
      this.counter++;
    },
    dec() {
      this.counter--;
    },
    inc2() {
      this.counter2++;
    },
    dec2() {
      this.counter2--;
    },
  },
  computed: {},
  watch: {},
}).mount("#app");
