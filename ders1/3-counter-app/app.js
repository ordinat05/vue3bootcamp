const app = Vue.createApp({
  data() {
    return {
      title: "Vue.js Eğitimi",
      description: "Sıfırdan İleri Seviye Vue Eğitimi",
      liked: 4500,
      counter: 0,
      counter2: 0,
    };
  },

  methods: {
    // 🔻 Dom da hata verdiren kodlar ikisi beraber çalışıyor. computed e geçiyoruz
    // getCounterResult() {
    //   console.log("Counter 1 Çalıştı");
    //   return this.counter > 2 ? "BÜYÜK" : "KÜÇÜK";
    // },
    // getCounter2Result() {
    //   console.log("Counter 2 Çalıştı");
    //   return this.counter2 > 2 ? "BÜYÜK" : "KÜÇÜK";
    // },
    // 🔺 Dom da hata verdiren kodlar ikisi beraber çalışıyor. computed e geçiyoruz
  },
  computed: {
    getCounterResult() {
      // console.log("Counter 1 Çalıştı");
      return this.counter > 2 || this.counter < -2 ? "BÜYÜK" : "KÜÇÜK";
    },
    getCounter2Result() {
      // console.log("Counter 2 Çalıştı");
      return this.counter2 > 2 || this.counter2 < -2 ? "BÜYÜK" : "KÜÇÜK";
    },
  },
  watch: {
    counter(newValue, oldValue) {
      console.log("Counter", oldValue, "=>", newValue);
    },
    counter2(newValue, oldValue) {
      console.log("Counter", oldValue, "=>", newValue);
    },
    getCounterResult(newValue, oldValue) {
      console.log("RESULT", oldValue, "=>", newValue);
    },
    getCounter2Result(newValue, oldValue) {
      console.log("RESULT", oldValue, "=>", newValue);
    },
  },
}).mount("#app");
