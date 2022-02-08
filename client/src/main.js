import Vue from "vue";
import App from "./App.vue";
import Router from "./router";
import axios from "axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import store from "./store";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.prototype.$axios = axios.create({
  //baseURL: `${process.env.API_BASE_URL}`,
  baseURL: "https://connectcompanyapi.herokuapp.com/connectcompany/api/v1",
  //baseURL: "http://127.0.0.1:3333/connectcompany/api/v1",

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
Vue.config.productionTip = false;

new Vue({
  router: Router,
  store,
  render: (h) => h(App),
}).$mount("#app");
