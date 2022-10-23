<template>
  <h1>LoginComp</h1>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Giriş Yap</h3>
    <input v-model="userData.username" type="text" placeholder="Kullanıcı Adı" class="input mb-3" />
    <input v-model="userData.password" type="password" placeholder="Şifre" class="input mb-3" />
    <button @click="onSubmit" class="default-button">Giriş yap</button>
    <span class="text-center mt-3 text-sm">
      Üye değilim,
      <!-- <a href="#" class="text-blue-900 hover:text-black">Üye olmak istiyorum!</a> -->
      <router-link :to="{ name: 'RegisterPage' }" class="text-red-900 hover:text-black"> Üye olmak istiyorum! </router-link>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userData: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    onSubmit() {
      this.$appAxios.get(`/users?username={this.userData.username}&password=${password}`);
    },
  },
};
</script>
