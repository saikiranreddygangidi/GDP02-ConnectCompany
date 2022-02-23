import Vue from "vue";
import _ from "lodash";
import axios from "axios";

// axios.defaults.baseURL = process.env.API_BASE_URL;
axios.defaults.baseURL =
  "https://connectcompanyapi.herokuapp.com/connectcompany/api/v1";
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
