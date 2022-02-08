import Vue from "vue";
import Vuex from "vuex";
import tokens from "./modules/token";

// load vuex similar to routes
Vue.use(Vuex);

//create store
export default new Vuex.Store({
  modules: {
    tokens,
  },
});
