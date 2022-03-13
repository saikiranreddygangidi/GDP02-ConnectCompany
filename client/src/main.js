import Vue from "vue";
import _ from "lodash";
import axios from "axios";
//import jquery from "jquery";
import moment from 'moment';
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import JsonExcel from 'vue-json-excel';

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

library.add(faSpinner);
library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component('downloadExcel', JsonExcel);

// Integrating jQuery with vue
//window.$ = window.jQuery = jquery;

// Integrating axios with vue
Vue.prototype.$axios = axios.create({
  //baseURL: `${process.env.API_BASE_URL}`,
  baseURL: "https://connectcompanyapi.herokuapp.com/connectcompany/api/v1",
  //baseURL: "http://127.0.0.1:3333/connectcompany/api/v1",

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
Vue.prototype.moment = moment

// Integrating axios with vue
Vue.prototype.$_ = _;

// Adding data and time filter
Vue.filter('formatDate', function (value, formatType) {
  if (formatType == 'date' && value) {
    return moment.utc(new Date(String(value))).format('MMMM Do YYYY');
  }

  if (formatType == 'time' && value) {
    // const time = value.split(":");
    // if (time[0] <= 12) {
    //   return `${time[0].padStart(2, "0")}:${time[1].padStart(2, "0")} AM`;
    // } else {
    //   return `${(time[0] - 12).toString().padStart(2, "0")}:${time[1].padStart(2, "0")} PM`;
    // }
    return moment.utc(value,'HH:mm:ss').format('hh:mm a')
  }

});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
