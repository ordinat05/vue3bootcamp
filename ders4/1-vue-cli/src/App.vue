<template>
  <appHeader />
  <!-- <appHeader></appHeader> -->

  <div>
    <h3>Bu benim ilk VUE CLI Uygulamam</h3>
    <p>Bugün Component ve Vue CLI</p>
  </div>
  <!-- <CounterItem></CounterItem> -->
  <CounterItem />
  <Counter-Item />
</template>
<script>
import CounterItem from "@/components/CounterItem";
// import appHeader from "@/components/appHeader";

export default {
  components: {
    CounterItem,
    // appHeader,
  },
};
</script>
<style></style>
