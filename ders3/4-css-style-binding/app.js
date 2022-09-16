const app = Vue.createApp({
  data() {
    return {
      myClass: "text-green bg-orange",
      counter: 0,
      polling: null,
      b: 5,
      textRenkler: ["text-green", "text-orange", "text-red", "text-default"],
      // boxShadow: "2px 2px 10px 0 rgba(0,0,0,0.05)",
      boxShadow: "12px 12px 5px rgba(0,0,0,0.4)",

      styleObject: {
        color: "red",
        fontSize: "13px",
        fontWeight: "bold",
        // text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF,
        // hShadow: "12px",
        // vShadow: "13px",
        // blurRadius: "4px",
        // text-shadow: 2px 2px 1px rgba(0,0,0,0.4);
        // box-shadow: 0 -1px 0 inset #333,
      },
      bgColor: "cyan",
      styleBorder: "4px dashed rgb(202, 17, 178)",
      styleTextcolor: "blue",
    };
  },
  created() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
  methods: {
    addItem() {
      this.itemList.push(new Date().getTime());
    },
  },
  watch: {
    // counter() {
    //   console.log("Counter Watcher Çalıştı.");
    //   this.counter = 0 : this.counter > 5,
    // },
  },
  computed: {
    boxClass() {
      return {
        "text-green": this.counter == 0,
        "text-orange": this.counter > 1,
        "text-red": this.counter > 2,
        "text-default": this.counter > 3,
      };
    },
    // counter() {
    //   console.log("Counter Watcher Çalıştı.");
    //   this.counter > 5;
    //   this.counter = 0;
    // },
  },
}).mount("#app");
