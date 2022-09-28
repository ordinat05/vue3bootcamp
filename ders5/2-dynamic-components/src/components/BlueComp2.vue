<template>
  <h3 class="bg-blue text-white">Blue Component</h3>
  <input type="text" />
</template>
<script>
export default {
  props: ["propMesaj"],
  mounted() {
    console.log("BlueComp2 mounted");
  },
  activated() {
    console.log("BlueComp2 activated");
  },
  deactivated() {
    console.log("BlueComp2 deactivated");
  },
};
</script>
