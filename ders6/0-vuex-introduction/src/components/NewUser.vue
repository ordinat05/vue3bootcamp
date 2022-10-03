<template>
  <button @click="changeName">GETTERS a obje ekle</button>
</template>

<script>
export default {
  methods: {
    // changeName() {
    //   const userData = {
    //     id: new Date().getTime(),
    //     title: "Raf " + new Date().getTime(),
    //     type: "mobilya",
    //   };
    //   this.$store.commit("newItem", userData);
    //   //   this.$store.state.itemList.push(userData);
    //   //   this.$store.state.fullName = new Date().getTime();
    // },
    // 🔺 Mutation da kullandık
    changeName() {
      const userData = {
        id: new Date().getTime(),
        title: "Raf " + new Date().getTime(),
        type: "mobilya",
      };
      this.$store.dispatch("newItem", userData);
      //   this.$store.state.itemList.push(userData);
      //   this.$store.state.fullName = new Date().getTime();
    },
    // 🔺 ACTION da kullandık
  },
};
</script>
