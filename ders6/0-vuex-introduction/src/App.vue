<template>
  <div class="container">
    <hr />
    <div>
      NewUser.vue ve UserList.vue Componentleri ile APP.VUE da işlem yapıyoruz.
      <br />
      Yeni Item Ekle
      <br />
      <NewUser />
      <UserList />
    </div>
  </div>
</template>

<script>
import UserList from "@/components/UserList.vue";
import NewUser from "@/components/NewUser.vue";

export default {
  name: "App",
  components: { UserList, NewUser },
  created() {
    // console.log("this.activePerson2 :>>", this.elaman);
  },
};
</script>
