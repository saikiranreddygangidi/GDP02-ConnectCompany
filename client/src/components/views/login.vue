<template>
  <b-container fluid class="container">
  
    <b-row>
      <div class="col-sm-12">
        <h2 class="mt-5 mb-5 text-light">Welcome to ConnectCompany</h2>
      </div>
      <b-col></b-col>
      <b-col sm="6" lg="4">
        <div class="login">
          <h4>Log In</h4>
          <hr class="mb-0" />
          <b-form class="p-4" @submit.prevent="login">
            <b-form-group
              class="text-left"
              id="username-group-1"
              label="Username:"
              label-for="username"
            >
              <b-form-input
                id="username"
                class="input-field"
                v-model="input.username"
                type="text"
                placeholder="Enter username or email id"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              class="text-left"
              id="username-group-1"
              label="Password:"
              label-for="password"
            >
              <b-form-input
                id="password"
                v-model="input.code"
                type="password"
                required
                placeholder="Enter password"
                autocomplete="on"
              ></b-form-input>
            </b-form-group>

            <p class="text-danger">{{ this.wizard.login }}</p>

            <b-button variant="primary" type="submit">
              Login
              <font-awesome-icon icon="sign-in-alt" class="m-t-4" />
            </b-button>
          </b-form>
        </div>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>
<script>
import CryptoJS from "crypto-js";

export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        code: "",
      },
      wizard: {},
    };
  },
  methods: {
    login() {
      console.log("in login *****");
      console.log("data is ", this.input);

      const iv = "sinasinasisinaaa";
      //console.log("store Intern", this.$store);
      const cipher = CryptoJS.AES.encrypt(
        this.input.code,
        CryptoJS.enc.Utf8.parse("82f2ceed4c503896c8a291e560bd4325"),
        {
          iv: CryptoJS.enc.Utf8.parse(iv),
          mode: CryptoJS.mode.CBC,
        }
      );

      this.input.code = cipher.toString();
      this.$store
        .dispatch("retrieveToken", this.input)
        .then((response) => {
          console.log(response);
          // let role = response.data.role;
          // if (role == "user") {
          //   this.loading = false;
          this.$router.push({ name: "home" });
          // } else {
          //   this.loading = false;
          //   this.$router.push({ name: "Dashboard" });
          // }
        })
        .catch((error) => {
          console.log(error);
          this.input.username = "";
          this.input.code = "";
          this.wizard.login = " Invalid Credentials. Enter correct details";
        });
      // this.$axios
      //   .post("/login", this.input)
      //   .then((response) => {
      //     console.log(response);
      //     this.$router.push({ name: "home" });
      //   })
      //   .catch((err) => {
      //     console.log("error message is ", err);
      //     this.input.username = "";
      //     this.input.code = "";
      //     this.wizard.login = " Invalid Credentials. Enter correct details";
      //   });
    },
  },
};
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;

  margin: auto;
  margin-top: 10%;
  padding: 20px;
}
.login {
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #ffffff;
}

.m-t-4 {
  margin-top: 4px;
}
span {
  color: red;
}
</style>