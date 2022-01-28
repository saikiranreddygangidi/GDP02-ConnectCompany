import Vue from "vue";
import VueRouter from "vue-router";
import WelcomeComponent from "../components/views/welcome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {
      name: "welcome",
    },},
    {
        path: "/welcome",
        name: "welcome",
        component: WelcomeComponent,
      },

];

const router = new VueRouter({
  routes,
  store,
});

export default router;
