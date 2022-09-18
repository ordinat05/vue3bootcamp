const app = Vue.createApp({
  data() {
    return {
      styles: {
        backgroundColor: false,
        border: false,
        borderRadius: false,
        color: false,
        fontBold: false,
        fontItalic: false,
      },
    };
  },
  computed: {
    textAreaClass() {
      return {
        backgroundColor: this.styles.backgroundColor,
        border: this.styles.border,
        // styles: içerisindeki border true ise border ver demek
        borderRadius: this.styles.borderRadius,
        color: this.styles.color,
        fontBold: this.styles.fontBold,
        fontItalic: this.styles.fontItalic,
      };
    },
  },
}).mount("#app");
