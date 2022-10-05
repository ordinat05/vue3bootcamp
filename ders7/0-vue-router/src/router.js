// import { createRouter, createWebHistory } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import HomeCmp from "@/views/HomeComp.vue";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: HomeCmp,
  },
  // üstteki uzun yöntem alttaki kısa yöntem.
  {
    name: "AboutPage",
    path: "/hakkimda",
    component: () => import("@/views/AboutComp.vue"),
  },
  {
    name: "DetailPage",
    path: "/detay/:userID",
    component: () => import("@/views/DetailsComp.vue"),
  },
];

const router = createRouter({
  routes: routes,
  //   mode : "hash|history",
  //   history: createWebHistory(),
  history: createWebHashHistory(),
});

export default router;
