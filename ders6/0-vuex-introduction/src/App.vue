<template>
  <div class="container">
    <hr />
    <div>
      Computed metodu ile Butona basınca Listeye yeni RAF objesi eklemek.
      <button @click="changeName">GETTERS a obje ekle</button>
      <ul>
        <!-- <li v-for="item in $store.getters.woodItems" :key="item"> -->
        <!-- <li v-for="(item, index) in $store.state.woodItems" :key="index"> -->
        <!-- 🔺 1. Yöntem getter ile çekmek -->
        <!-- <li v-for="item in mobilyaElemanlari" :key="item"> -->
        <!-- <li v-for="(item, index) in mobilyaElemanlari" :key="index"> -->
        <!-- 🔺 2. Yöntem Computed ile çekmek -->
        <!-- {{ item.id }} {{ item.title }} {{ item.type }} -->
        <!-- </li> -->

        <!-- <li v-for="(item, index) in woodItems" :key="index"> -->
        <!-- 🔺  1. Yöntem Computed mapGetters çekmek -->
        <!-- {{ item.id }} {{ item.title }} {{ item.type }} -->
        <!-- </li> -->
        <li v-for="(item, index) in cihazlar" :key="index">
          <!-- 🔺  2. Yöntem Computed mapGetters çekmek -->
          {{ item.id }} {{ item.title }} {{ item.type }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {},
  created() {
    // console.log(this.$store.getters.activePerson);
    // console.log("this.activePerson2 :>>", this.activePerson);
    console.log("this.activePerson2 :>>", this.elaman);
  },
  methods: {
    changeName() {
      this.$store.state.itemList.push({ id: 6, title: "Raf", type: "mobilya" });
    },
  },
  // computed: mapGetters(["woodItems", "electronical", "activePerson"]),
  computed: {
    // ...mapGetters(["woodItems", "electronical", "activePerson"]),
    ...mapGetters({
      agacElemanlari: "woodItems",
      cihazlar: "electronical",
      elaman: "activePerson",
    }),
    // Buradaki Gibi spread operated kullanabilirsin. aşağıdakileri de çalışır.
    // custonComputed() {
    // 🏮 Sallamasyon bir fonksiyon tanımlamaya başlayabilirim
    // },
  },
  // computed: {
  //   mobilyaElemanlari() {
  //     return this.$store.getters.woodItems;
  //   },
  // },
};
</script>
