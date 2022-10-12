const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 🔺 component name home should always be multi-word kapatmak.
  // bu sayede import appBookmarkList from "@/components/Shared/appBookmarkList"; buradaki Klasör İmport edilebiliyor. Çünkü içinde index.vue dosyası var ve onu otomatik görüyor.
});
