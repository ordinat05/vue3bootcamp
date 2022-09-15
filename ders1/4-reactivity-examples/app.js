const app = Vue.createApp({
  data() {
    return {
      search: "",
      itemList: ["elma", "armut", "kiraz", "çilek"],
      // filteredList: [],
    };
  },

  methods: {
    searchList() {
      // this.filteredList = this.itemList.filter((i) => i.includes(this.search));
      // console.log("Filtrelenmiş Liste : >>", filteredList());
    },
  },
  computed: {
    filteredList() {
      return this.itemList.filter((i) => i.includes(this.search));
      comolist();
    },
  },
  // computed: {},
  // watch: {},
}).mount("#app");
