const app = Vue.createApp({
  data() {
    return {
      name: "kablosuzkedi",
      age: 33,
      imageUrl:
        "http://kablosuzkedi.com/wp-content/uploads/2016/11/Ekran-Resmi-2016-11-12-01.39.36.png",
      imageUrl2:
        "https://productimages.hepsiburada.net/s/51/375/11054368260146.jpg",
      getRandomSayi: 0,
    };
  },
  methods: {
    getRandom() {
      // return Math.round(Math.random());
      this.getRandomSayi = Math.floor(Math.random() * 100);
    },
    // degistir(event) {
    //   console.log(event.target.value);
    //   name = e.target.value;
    // },
    addTodo(event) {
      console.log(event.target.value);
      // name: event.target.value;
      // this.todoList.push({

      // id: new Date().getTime(),
      // text: event.target.value,
      // completed: false,
      // });
      // event.target.value = "";
    },
    // valueUpdated(e) {
    //   console.log(e.target.value);
    //   // this.name = e.target.value;
    // },
  },
  computed: {},
}).mount("#exercise");
