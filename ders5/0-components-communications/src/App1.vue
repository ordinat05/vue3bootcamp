<template>
  <div class="container">
    <UserSection1 :userList="userList" @new-item="userList.push($event)" />
  </div>
</template>

<script>
import UserSection1 from "@/components/UserSection1.vue";
export default {
  components: {
    UserSection1,
  },
  data() {
    return {
      userList: ["Tayfun", "Gökhan", "Defne", "Handan", "Aslı"],
    };
  },
};
</script>
