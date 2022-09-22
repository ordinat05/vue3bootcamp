<template>
  <ListSection1 :userList="userList" />
  <AddSection1 @new-item="$emit('new-item', $event)" />
  <!-- @new-item="userList.push($event)" -->
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
