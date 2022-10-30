<template>
  <h1>LoginComp</h1>
  <div class="login_register_container">
    {{ this.$store.getters._saltKey }}
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
import CryptoJS from "crypto-js";
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
      const password = this.userData.password;
      console.log("password : >> ", password);
      // const cryptedPassword = CryptoJS.AES.encrypt(password, key);
      // 🔻 Aşağıdaki farklı farklı password lar üretiyor.
      // const cryptedPassword = CryptoJS.AES.encrypt(password, this.$store.getters._saltKey).toString();
      // 🔻 Buna çeviriyoruz aynı password u üretiyor.
      const cryptedPassword = CryptoJS.HmacSHA1(password, this.$store.getters._saltKey).toString();
      console.log("Hashlenmiş şifre-->", cryptedPassword);

      this.$appAxios
        .get(`/users?username=${this.userData.username}&password=${password}`)
        .then((login_response) => {
          // console.log(login_response);
          if (login_response?.data?.length > 0) {
            this.$store.commit("setUser", login_response?.data[0]);
            this.$router.push({ name: "HomePage" });
          } else {
            alert("Böyle bir kullancı bulunamadı...");
          }
        })
        .catch((e) => console.log(e));
      // .finally(() => (this.loader = false))
    },
  },
};
</script>
