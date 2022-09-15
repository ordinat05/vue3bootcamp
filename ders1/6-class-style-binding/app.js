const app = Vue.createApp({
  data() {
    return {
      showBorder: false,
      redBG: false,
      boxClass: "border green",
      bgColor: "cyan",
      styleBorder: "4px dashed rgb(202, 17, 178)",
      styleTextcolor: "blue",
    };
  },
  computed: {
    boxClasses() {
      return { border: this.showBorder, red: this.redBG };
      // eğer burada tireli - birşey kullanacaksan tırnaklar içerisinde  kullanabilirsin. Javascript kuralı geçerli. border yerine "border-aa" bu şekilde kullanabilirsin.
    },
  },
}).mount("#app");

// setTimeout(() => {
//   app.unmount();
// }, 3000);
