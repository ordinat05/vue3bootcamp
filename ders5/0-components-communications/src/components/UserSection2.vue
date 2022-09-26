<template>
  <h3 style="width: 100%; background-color: red">
    Versiyon 2 provide ve inject metodları
  </h3>
  <AddSection2 />
  <!-- @new-item="userList.push($event)" -->
  <ListSection2 />
</template>

<script>
import ListSection2 from "@/components/ListSection2.vue";
import AddSection2 from "@/components/AddSection2.vue";
export default {
  // props: ["userList"],
  // emits: ["new-item"],
  components: {
    ListSection2,
    AddSection2,
  },
};
</script>
