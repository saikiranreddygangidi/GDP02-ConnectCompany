import Vue from "vue";
import VueRouter from "vue-router";
import WelcomeComponent from "../components/views/welcome.vue";
import AdminDashboard from "../components/views/adminDashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "welcome",
    },
  },
  {
    path: "/welcome",
    name: "welcome",
    component: WelcomeComponent,
  },
  {
    path: "/adminDashboard",
    name: "AdminDashboard",
    component: AdminDashboard,
  },
];

const router = new VueRouter({
  routes,
  store,
});

export default router;
