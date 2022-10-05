import { createRouter, createWebHistory } from "vue-router";
import HomeCmp from "@/views/HomeComp.vue";

const routes = [
  {
    path: "/",
    component: HomeCmp,
  },
  // üstteki uzun yöntem alttaki kısa yöntem.
  {
    path: "/hakkimda",
    component: () => import("@/views/AboutComp.vue"),
  },
];

const router = createRouter({
  routes: routes,
  //   mode : "hash|history",
  history: createWebHistory(),
});

export default router;
