const app = Vue.createApp({
  data() {
    return {
      title: "Vue.js Bootcamp 1. gün",
      content: "Lorem ipsum dolor sit amet..",
      eduflow: {
        title: "Müfredat ve Açıklamalar için Tıklayınız.",
        target: "_blank",
        url: "https://eduflow.kablosuzkedi.com",
        alt: "mufredat-kablosuzkedi-vue-bootcamp",
      },
      owner: "Pogaca",
      coords: {
        x: 0,
        y: 0,
      },
    };
  },
  methods: {
    // changeTitle() {
    //   alert("selam1");
    //   this.title = "Yeni Title Değeri";
    // },
    changeTitle(pTitle) {
      // alert("selam1");
      this.title = pTitle;
    },
    updateCoords(message, event) {
      // document.getElementById("todoList").innerHTML = "";
      // console.log(event.x, event.y);
      // console.log(message, event.x, event.y);
      this.changeTitle(`${event.x},${event.y}`);
      this.coords = {
        x: event.x,
        y: event.y,
      };
    },
  },
}).mount("#app");

// Vue2 Version
// new Vue ({
// 	data:{

// 	}
// })
