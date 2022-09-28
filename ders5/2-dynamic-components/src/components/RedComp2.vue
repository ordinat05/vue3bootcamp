<template>
  <h3 class="bg-red text-white">{{ propMesaj }} Red Component</h3>
</template>

<script>
export default {
  props: ["propMesaj"],
  mounted() {
    console.log("RedComp2 mounted");
  },
};
</script>
