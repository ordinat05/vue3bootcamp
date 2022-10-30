import { createRouter, createWebHashHistory, routerKey } from "vue-router";
import store from "../store";

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
// export default createRouter({
//   // routes: [],
//   routes,
//   history: createWebHashHistory(),
// });
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  // router.beforeEach((to, _, next) => {
  // 🔺 Kullanılmayacak olan böyle _ yapılabilir. Yoksa hata verir.
  const authRequiredRoutes = ["HomePage"];
  const authNotRequiredRoutes = ["LoginPage", "RegisterPage"];
  const _isAuthenticated = store.getters._isAuthenticated;

  console.log(to, from);

  if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) next(false);

  if (authRequiredRoutes.indexOf(to.name) > -1) {
    // 🔺 Eğer kullanıcının giriş yaptığı, Authenticate olduğu route lardan birisine denk  geliyorsa gitmeye çalıştığı yer ,
    if (_isAuthenticated) next();
    // 🔺 Bak Authenticate mi ? Öyleyse yoluna devam et
    // else next(false);
    // 🔺 Değilse ... Nereye gidiyorsun.. Durdur.. Şimdilik false diyoruz, Sonra değiştireceğiz.
    else next({ name: "LoginPage" });
  } else {
    next();
    // Bunlardan birisi değilse, nereye gitmek istiyorsan devam et
  }

  next(false);
  // Store içindeki _isAuthenticated
  // if (_isAuthenticated) {
  //   next();
  // }

  // console.log("Selam to", to);
  // console.log("Selam from", from);
  // next();
});

export default router;
