<template>
  <div class="container">
    <!-- <h3>Bu benim container ım</h3>
     -->
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
      // emits: ["new-item"],
    };
  },
};
</script>
