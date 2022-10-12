<template>
  <!-- <h1>HomeComp</h1> -->
  <appHeader />
  <div class="flex flex-row">
    <sidebar />
    <appBookmarkList />
    <!-- <aaaaBbbb /> -->
  </div>
</template>
<script>
import sidebar from "@/components/Home/sidebar.vue";
export default {
  components: {
    sidebar,
  },
};
</script>
