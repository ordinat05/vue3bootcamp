import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/home"),
  },
  {
    name: "LoginPage",
    path: "/login",
    component: () => import("@/views/login.vue"),
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: () => import("@/views/register.vue"),
  },
  {
    name: "NewBookmarkPage",
    path: "/new",
    component: () => import("@/views/newBookmark.vue"),
  },
];
export default createRouter({
  // routes: [],
  routes,
  history: createWebHashHistory(),
});
