<template>
  <h3 style="width: 100%; background-color: blue">
    Versiyon 1 (emit ve custom Event yöntemi)
  </h3>

  <AddSection1 @new-item="$emit('new-item', $event)" />
  <!-- @new-item="userList.push($event)" -->
  <ListSection1 :userList="userList" />
</template>

<script>
import ListSection1 from "@/components/ListSection1.vue";
import AddSection1 from "@/components/AddSection1.vue";
export default {
  props: ["userList"],
  emits: ["new-item"],
  components: {
    ListSection1,
    AddSection1,
  },
};
</script>
