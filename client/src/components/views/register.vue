<template>
  <b-container fluid class="container">
    <b-row>
      <div class="col-sm-12">
        <h2 class="mt-5 mb-5 text-light">Welcome to ConnectCompany</h2>
      </div>
      <b-col></b-col>
      <b-col sm="6" lg="4">
        <div class="register">
          <h4>Register</h4>
          <hr class="mb-0" />
          <b-form class="p-4" @submit.prevent="register">
            <b-form-group
              class="text-left"
              id="email-group-1"
              label="email:"
              label-for="email"
            >
              <b-form-input
                id="email"
                class="input-field"
                v-model="input.email"
                type="text"
                placeholder="Enter email id"
                required
              ></b-form-input>
            </b-form-group>
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
                placeholder="Enter username"
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

            <p class="text-danger">{{ this.wizard.register }}</p>

            <b-button variant="primary" type="submit">
              Register
              <font-awesome-icon icon="sign-in-alt" class="m-t-4" />
            </b-button>
            <router-link to="/loginWithGithub">
                <button class="button" style="padding-top:5px;padding-bottom:5px; margin-left:5px;border-radius:4px;"><font-awesome-icon :icon="['fab', 'github']" />
Register With Github</button>
              </router-link>
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
  name: "Register",
  data() {
    return {
      input: {
        email: "",
        username: "",
        code: "",
      },
      wizard: {},
    };
  },
  methods: {
    /**
     * @vuese
     * This method takes the user credentials and register the user
     */
    register() {
      console.log(this.input);
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
      this.$axios
        .post("/register", this.input)
        .then((response) => {
          console.log(response);
          this.input.email = "";
          this.input.username = "";
          this.input.code = "";
          this.wizard.register =
            " successfully uploaded data. you can login now !";
        })
        .catch((err) => {
          console.log(err);
          this.wizard.register = " error in uploading data";
        });
    },
  },
};
</script>

<style scoped>
.register {
  border: 1px solid #cccccc;
  background-color: #ffffff;
}
</style>