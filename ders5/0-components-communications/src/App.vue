<template>
  <div class="container">
    <UserSection @new-item="userList.push($event)" />
  </div>
</template>

<script>
import UserSection from "@/components/UserSection.vue";
export default {
  components: {
    UserSection,
  },
  data() {
    return {
      provideData: {
        userList: ["Tayfun", "Gökhan", "Defne", "Handan", "Aslı"],
      },
    };
  },
  provide() {
    return {
      userList: this.provideData.userList,
    };
  },
};
</script>
