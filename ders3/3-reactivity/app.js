const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
      itemList: [],
      eski: 0,
      yeni: 0,
      sayi: 0,
    };
  },
  methods: {
    addItem() {
      this.itemList.push(new Date().getTime());
    },
  },
  computed: {
    getResult() {
      // this.counter2 > 5;
      console.log("Counter1 Çalıştı..");
      return this.counter > 0
        ? "Pozitif"
        : this.counter < 0
        ? "Negatif"
        : "Sıfır";
    },
    getResult2() {
      console.log("Counter2 Çalıştı..");
      return this.counter2 > 0
        ? "Pozitif"
        : this.counter2 < 0
        ? "Negatif"
        : "Sıfır";
    },
  },
  watch: {
    // counter() {
    //   console.log("Counter Watcher Çalıştı.");
    // },
    // counter(newValue, oldValue) {
    //   console.log("Counter Watcher Çalıştı.", newValue, oldValue);
    // },
    // getResult(newValue, oldValue) {
    //   console.log(`getResult Watcher : Result ${oldValue} => ${newValue}`);
    // },
    // itemList(itemList) {
    //   console.log("itemList : >>", itemList);
    // },
    itemList: {
      deep: true,
      handler(itemList) {
        console.log("itemList : >>", itemList);
      },
    },
  },
}).mount("#app");
