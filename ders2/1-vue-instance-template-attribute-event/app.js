const app = Vue.createApp({
  data() {
    return {
      title: "Bu Vue tarafından gelen bir bilgidir..",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur quasi explicabo porro itaque fugit beatae eaque tempore adipisci, illum quibusdam.",
      hobbies: [1, 2, 3, 4, 5],
      personal: {
        name: "Gokhan",
        lname: "Kandemir",
        phone: "xxxx",
      },
      details: `<a href="https://eduflow.kablosuzkedi.com"> Müfredat için tıklayınız</a>`,
      url: "https://www.youtube.com/watch?v=siN1Kexpjh4&list=PL_f2F0Oyaj48Y0Uv4BTlqzK7INi92D2wp&index=2",
      testText: "denemeyazisi",
      coordX: 0,
      coordY: 0,
      fullName: "Gökhan Kandemir",
      // 🏮 BÖLÜM 1
    };
  },
  methods: {
    // updateTitle() {
    //   this.title = "Bu Benim Yeni Mesajım..";
    // },
    updateTitle(title) {
      this.title = title || "Bu Benim Yeni Mesajım..";
      this.fullName = "Değiştir";
    },
    // updateCoords() {
    //   console.log("updateCoords");
    // },
    updateCoords(e) {
      this.coordX = e.offsetX;
      this.coordY = e.offsetY;
      // console.log(e.offsetX, e.offsetY);
      this.updateTitle(`-${this.coordX}--${this.coordY}-`);
    },
    // updateValue(e) {
    //   console.log(e.target.value);
    //   this.fullName = e.target.value;
    // },
    // 🔻 EVENT + ARGUMAN
    updateValue(customText, e) {
      console.log(customText, e);
      this.fullName = e.target.value;
    },
  },
  computed: {},
}).mount("#app");

// new Vue({
//   data: {
//     // 🏮 BÖLÜM 2
//     el: "#app",
//     data: {},
//   },
// });
