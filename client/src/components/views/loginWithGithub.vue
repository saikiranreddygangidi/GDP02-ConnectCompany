<template>
  <div class="{'blur-content': showModal}">
    <div class="home-card-container">
      <div outlined class="home-card">
        <div class="content-container">
          <div
            class="col col1 border text-dark bg-light d-flex align-items-center justify-content-center"
          >
            <h1>Hello usery,</h1>
            <h2>We tried implementing login with Github using Auth0. But it did not work for us  </h2>
            <p>
            <ul>
             <li> Our application need to authorize different user based upon the roles such as user, companyuser and adminuser.</li>
              <li>We classify the there dashboard based upon the role which is not possible when considering with github authorization we can't do that .</li>
              <li>Instead we do username-password authorization where generated jwt token(bearer token) </li>
              <li>we also concentrated on the user details security by encrypting with algorithm SHA-256 where we used on crypto js package for that.</li>
              <li>while we are successful in implementing the functionality using Vue.js and Adonis.js libraries </li>
              </ul>
              Instead everyone learn it and worked on sample project <a href="https://test-auth0-case.herokuapp.com/">Here is link for sample project </a>
            </p>
            <div style="display:flex;">
              <router-link to="/register">
                <button class="button">Register</button> </router-link
              ><router-link to="/login">
                <button class="button">Login</button>
              </router-link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import PritiNavbar from "../components/PritiNavbar.vue";
export default {
  data() {
    return {
      items: [],
      address: [],
    };
  },
  methods: {},
  name: "LoginWithGithub",
  components: {
    // PritiNavbar,
  },
};
</script>
<style scoped>
.home-card-container {
  background-color: #0093e9;
  background-image: url("../../assets/welcome.jpg");
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-size: cover;
  color: white;
  padding: 0px 40px;
  height: 100%;
  width: 100%;
}
.home-card {
  height: 150vh;
}
.content-container {
  display: grid;
  height: 100%;
  grid-template-rows: 80% 20%;
}
.col1 {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  color: white;
  margin-left: 20%;
  margin-top: 5%;

  height: 400px;
}
.button {
  background-color: #4caf50; /* Green */
  color: white;
  padding: 8px;
  margin-left: 9px;
  border-radius: 12px;
}
.search-bar {
  display: grid;
  grid-template-columns: 80% 20%;
  width: 40%;
  align-items: center;
  padding: 8px;
}
.col2 {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
}
.col2-divs {
  padding: 10px;
}
.col2-reviews {
  display: grid;
  place-items: center;
}
.booking {
  display: grid;
  grid-template-columns: auto auto auto auto;
}
.column {
  margin: 10px;
  display: grid;
  place-items: center;
  text-align: center;
}
.feature-image {
  height: 200px;
}
.feature-container {
  width: 100%;
  min-width: 100%;
  padding: 20px 80px;
}
.add-property {
  text-align: center;
  padding: 80px;
  background-color: #fafafa;
}
</style>