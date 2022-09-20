import { createApp } from "vue";
import App from "./App.vue";
// import "/src/assets/style.css";
// import "./assets/style.css";
import "@/assets/style.css";
import appHeader from "@/components/appHeader.vue";
// import CounterItem from "@/components/CounterItem.vue";

const app = createApp(App);
// createApp(App).mount("#app");
app.component("appHeader", appHeader);
// app.component("CounterItem", CounterItem);
app.mount("#app");
