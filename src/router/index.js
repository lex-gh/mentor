import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/profile/:id",
    name: "profile",
    component: () => import("../views/ProfileView.vue"),
  },
  {
    path: "/create-profile",
    name: "create",
    component: () => import("../views/AuthView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
