import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { appAxios } from "@/utils/appAxios";
import "@/assets/style.css";

import appHeader from "@/components/Shared/appHeader.vue";
import appBookmarkList from "@/components/Shared/appBookmarkList";

const app = createApp(App);
app.component("appHeader", appHeader);
app.component("appBookmarkList", appBookmarkList);
app.use(router);
app.use(store);
app.config.globalProperties.$appAxios = appAxios;
app.mount("#app");

// import aaaaBbbb from "./TestBookmarkListItem";
// 🔺 Aynı dizinde ise
// import aaaaBbbb from "@/components/TestBookmarkListItem";
// 🔺 aynı dizindeki klasörün içindeki dosyaya erişmek
// import aaaaBbbb from "./components/TestBookmarkListItem";
// 🔺 Aynı dizindeki klasörün içindeyse
// import aaaaBbbb from "./components/Home/TestBookmarkListItem";
// 🔺 Aynı dizindeki klasörün içindeki klasördeyse içindeyse⭐
// import aaaaBbbb from "@/components/Home/TestBookmarkListItem";
// 🔺 Aynı dizindeki klasörün içindeki klasördeyse içindeyse⭐
// import aaaaBbbb from "@/components/Home";
// 🔺 Component olarak klasör tanımlamayı kabul etmedi. Çoklu dosya için.

// app.component("aaaaBbbb", aaaaBbbb);
