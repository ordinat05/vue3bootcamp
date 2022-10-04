<template>
  <p>
    {{ $store.state.mainName }}
  </p>

  <p>
    {{ $store.state.musteri }}
  </p>

  <p>
    {{ $store.state.musteri.contactAdress }}
  </p>

  <p>
    {{ $store.state.taskManager }}
  </p>

  <p class="bg-green text-white">
    computed: { ...mapGetters({ musteriADI: "musteri/_contactName", }), },
    <span class="bg-white text-black">{{ musteriADI }}</span>
  </p>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {},
  created() {
    // console.log(this.$store);
    console.log(this.$store.getters["musteri/_contactName"]);
  },
  computed: {
    ...mapGetters({
      musteriADI: "musteri/_contactName",
    }),
  },
};
</script>
