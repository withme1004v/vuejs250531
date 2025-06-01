import { createRouter, createWebHistory } from "vue-router";

import TheHomeView from "@/views/TheHomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: TheHomeView,
    },
    {
      path: "/axios",
      name: "axios",
      component: () => import("../views/TheAxiosTestView.vue"),
    },
    {
      path: "/cat",
      name: "cat",
      component: () => import("../views/TheCatView.vue"),
    },
  ],
});

export default router;
