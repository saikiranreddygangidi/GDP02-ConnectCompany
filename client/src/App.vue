<template>
  <div id="app">
    <div class="body-height">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Semantic/Header.vue";
import Footer from "./components/Semantic/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
  created() {
    let token = sessionStorage.getItem("access_token");
    this.$axios.defaults.headers.common["Authorization"] = token;
    // we should authorize token here by making API call if the token is invalid then clear localStorage and redirect to login page
  },
};
</script>

<style>
#app {
  background: url("./assets/home.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  font-size: 14px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.body-height {
  min-height: 100vh;
}

.nw-color {
  color: #006747;
}

.bg-nw {
  background-color: #006747 !important;
}

.footer-bottom {
  margin-bottom: 62px;
}

.vue-form-wizard .wizard-header {
  display: none;
}

.vue-form-wizard .wizard-tab-content {
  padding: 20px 20px !important;
  margin-top: 10px;
  border-top: 1px solid #ccc;
}

.fw-500 {
  font-weight: 500;
}

.fw-600 {
  font-weight: 600;
}

.fw-700 {
  font-weight: 700;
}
</style>
