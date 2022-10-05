<template>
  <div class="container">
    <div class="mb-2">
      <router-link class="nav-link" active-class="active" to="/"
        >Anasayfa</router-link
      >
      <!-- visited-class="visited" -->
      <router-link class="nav-link" active-class="active" to="/hakkimda"
        >Hakkımda</router-link
      >
      <router-link class="nav-link" active-class="active" to="/detay/123"
        >Detay</router-link
      >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style>
.nav-link {
  padding: 5px 10px;
  text-decoration: none;
  display: inline-block;
  border: 1px solid #fa6558;
  color: #fa6558;
  margin-right: 5px;
  margin-top: 5px;
  /* background-color: #fa6558; */
  /* color: #fff; */
}
.active {
  background-color: #fa6558;
  color: #fff;
}
/* .visited { */
/* background-color: #58fa63; */
/* color: rgb(123, 165, 239); */
/* } */
</style>
