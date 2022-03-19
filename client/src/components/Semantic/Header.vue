<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand href="#">ConnectCompany</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      login: false,
      role: "",
    };
  },
  mounted() {
    this.login = this.$store.getters.loggedIn;
    // this.role =this.$store.getters.userdetails.role;
    //console.log(" loginned to ----", this.login,"------------------",this.role);
  },
  methods: {
    // getName(){

    //   return this.$store.getters.userdetails.role;
    // },
    isloggied() {
      return this.$store.getters.loggedIn;
    },
  },
};
</script>

<style scoped>
b-navbar {
  padding: 10px;
  background: #0e3029;
  color: white;
  font-size: 50px;
  float: left;
  width: 100%;
}
.nav-but {
  margin-right: 10px;
  padding: 5px;
  text-decoration: none;
}
</style>
