import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import About from "@/views/About.vue";
import Services from "@/views/Services.vue";
import Portfolio from "@/views/Portfolio.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About,
    },
    {
      path: "/services",
      name: "services",

      component: Services,
    },
    {
      path: "/portfolio",
      name: "/Portfolio",

      component: Portfolio,
    },
  ],
});

export default router;
