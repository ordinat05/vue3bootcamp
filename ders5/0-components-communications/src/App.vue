<template>
  <div class="container">
    <UserSection2 />
  </div>
</template>

<script>
import UserSection2 from "@/components/UserSection2.vue";
export default {
  components: {
    UserSection2,
  },
  data() {
    return {
      provideData: {
        userList: ["Tayfun", "Gökhan", "Defne", "Handan", "Aslı"],
      },
    };
  },
  methods: {
    newItem(item) {
      this.provideData.userList.push(item);
    },
  },
  provide() {
    return {
      userList: this.provideData.userList,
      newItem: this.newItem,
    };
  },
};
</script>
