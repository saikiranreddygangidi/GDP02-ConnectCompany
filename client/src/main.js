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


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");