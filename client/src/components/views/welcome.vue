<template>
  <div class="{'blur-content': showModal}">
    <div class="home-card-container">
      <div outlined class="home-card">
        <div class="content-container">
          <div
            class="col col1 border text-dark bg-light d-flex align-items-center justify-content-center"
          >
            <h1>Welcome to Connect Company.</h1>
            <p>
              This is the place where users can directly connect to the
              Companies without any third parties. Companies can directly post
              the new job openings on the Connect Company site. Users can
              directly register for the new events by clicking on the Event. By
              Using the Connect Company there are multiple side advantages for
              both the Users and Companie
            </p>
            <div style="display: flex">
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
  name: "Home",
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
  height: 96vh;
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

  height: 300px;
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
