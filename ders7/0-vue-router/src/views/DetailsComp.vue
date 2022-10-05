<template>
  <h1>DETAILS</h1>
  <h2 class="bg-green">
    anasayfada INPUT a girilen değer. ROUTE üzerinden alıyoruz.
    {{ $route.params.userID }}
  </h2>
  <p>
    ID numarası olmazsa gitmez. Backend de de böyledir. Açıklamalar burada yer
    alacaktır..
  </p>
  <p>COMOLOKKO</p>
  <p>{{ $route.params.userID }}</p>
  <button @click="goBack">GERİ DÖN</button>
</template>

<script>
export default {
  name: "DetailsComp",
  props: {
    // msg: String,
  },
  created() {
    console.log("göster bana", this.$route);
  },
  methods: {
    goBack() {
      //   alert();
      //   this.$router.push("/");
      this.$router.push("/hakkimda");
    },
  },
};
</script>
