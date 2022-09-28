<template>
  <!-- <h3 class="bg-green text-white">Green Component</h3> -->
  <slot />
</template>
<script>
export default {
  props: ["propMesaj"],
  mounted() {
    console.log("GreenComp2 mounted");
  },
};
</script>
