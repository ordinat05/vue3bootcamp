<template>
  <h1>RegisterComp</h1>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Kayıt Ol</h3>
    <input v-model="userData.fullname" type="text" placeholder="Tam Ad" class="input mb-3" />
    <input v-model="userData.username" type="text" placeholder="Kullanıcı Adı" class="input mb-3" />
    <input v-model="userData.password" type="password" placeholder="Şifre" class="input mb-3" />
    <button @click="onSave" class="default-button">Kayıt ol</button>
    <span class="text-center mt-3 text-sm">
      Zaten Üyeyim,
      <router-link :to="{ name: 'LoginPage' }" class="text-red-900 hover:text-black">
        <!-- <a href="#" class="text-red-900 hover:text-black">Giriş yap!</a> -->
        Giriş yap!
      </router-link>
    </span>
  </div>
</template>
<script>
// import { clearScreenDown } from "readline";
import CryptoJS from "crypto-js";

export default {
  data() {
    return {
      userData: {
        fullname: null,
        username: null,
        password: null,
      },
    };
  },
  methods: {
    onSave() {
      // console.log("BakBakalım SAVE-->", this.userData);
      const password = this.userData.password;
      const key = "hashlemekicintext";
      // const cryptedPassword = CryptoJS.AES.encrypt(password, key);
      const cryptedPassword = CryptoJS.AES.encrypt(password, key).toString();
      console.log("Hashlenmiş şifre-->", cryptedPassword);
      // 🔻 START aşağıdaki ise şifreyi çözümlemeye yarıyor.
      // const decryptedPassword = CryptoJS.AES.decrypt(cryptedPassword, key).toString(CryptoJS.enc.Utf8);
      // console.log("decrypted şifre-->", decryptedPassword);
      // 🔺 FINISH
      this.$appAxios.post("/users", { ...this.userData, cryptedPassword }).then((registered_user_response) => console.log("yazdır --> ", registered_user_response));
      this.$router.push({ name: "HomePage" });
    },
  },
};
</script>
