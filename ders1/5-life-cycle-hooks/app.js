const app = Vue.createApp({
  data() {
    return {
      title: "Test Başlığı",
      itemList: [],
    };
  },
  beforeCreate() {
    console.log("beforeCreate Çalıştı");
  },
  created() {
    console.log("created Çalıştı");
    setTimeout(() => {
      this.itemList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }, 2000);
    setTimeout(() => {
      this.title = "Bu yeni başlık";
    }, 2000);
  },
  beforeMount() {
    console.log("beforeMount Çalıştı");
  },
  mounted() {
    console.log("mounted Çalıştı");
  },
  beforeUpdate() {
    console.log("beforeUpdate Çalıştı");
  },
  updated() {
    console.log("updated Çalıştı");
  },
  beforeUnmount() {
    console.log("beforeUnmount Çalıştı");
  },
  unmounted() {
    console.log("unmounted Çalıştı");
  },
});
app.mount("#app");
// .mount("#app"); Bu uygulamayı mount etmedim . Buradaki Vue Instance  Id si app olan div in içerisinde bulunan template i kontrol edecek.

setTimeout(() => {
  app.unmount();
}, 3000);
