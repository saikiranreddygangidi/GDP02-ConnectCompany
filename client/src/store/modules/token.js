import Vue from "vue";
import _ from "lodash";
import axios from "axios";

// axios.defaults.baseURL = process.env.API_BASE_URL;
axios.defaults.baseURL = "https://connectcompanyapi.herokuapp.com/connectcompany/api/v1";
//axios.defaults.baseURL = "http://127.0.0.1:3333/connectcompany/api/v1";

const state = {
  token: sessionStorage.getItem("access_token") || null,
  userDetails: localStorage.getItem("user_details")
    ? JSON.parse(localStorage.getItem("user_details"))
    : null,
};

const getters = {
  loggedIn: (state) => {
    return state.token !== null;
  },
  userDetails: (state) => {
    return state.userDetails;
  },
};

const mutations = {
  saveUserAuth: (state, payload) => {
    // console.log(payload,"-----------payload")
    state.token = payload.token;
    state.userDetails = payload.userDetails;
  },
  destroyUserAuth: (state) => {
    state.token = null;
    state.userDetails = null;
  },
};

const actions = {
  retrieveToken: (context, credentials) => {
    return new Promise((resolve, reject) => {
      console.log(axios);
      axios
        .post("/login", credentials)
        .then((response) => {
          console.log(response);
          const token = response.data.token;
          console.log(token);
          Vue.prototype.$axios.defaults.headers.common["Authorization"] =
            "Bearer " + token;
          console.log("token for user ", token);
          let userDetails = _.omit(response.data, ["token", "message"]);
          userDetails = userDetails.data;
          sessionStorage.setItem("access_token", "Bearer " + token);
          localStorage.setItem("user_details", JSON.stringify(userDetails));
          console.log("userdetails is  ", userDetails);
          context.commit("saveUserAuth", { token, userDetails });
          resolve(response);
        })
        .catch((error) => {
          sessionStorage.removeItem("access_token");
          localStorage.removeItem("user_details");
          reject(error);
        });
    });
  },

  destroyToken({ commit }) {
    return new Promise((resolve) => {
      commit("destroyUserAuth");
      console.log("--------------destroy token");
      sessionStorage.removeItem("access_token");
      localStorage.removeItem("user_details");
      resolve();
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
