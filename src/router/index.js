import { createRouter, createWebHashHistory } from "vue-router";
import { Base64 } from "js-base64";
import { getTheDay } from "@/utils/tools.js";

const routes = [
  {
    path: "/",
    name: "Default",
    redirect: "Demo",
  },
  {
    path: "/demo",
    name: "Demo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/demo.vue"),
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    next();
  } else {
    let token = localStorage.getItem("Authorization");
    if (token && Base64.decode(token) != getTheDay()) {
      localStorage.removeItem("Authorization");
      token = null;
    }
    if (token == null || token == "") {
      next("/login");
    } else {
      next();
    }
  }
});

export default router;
