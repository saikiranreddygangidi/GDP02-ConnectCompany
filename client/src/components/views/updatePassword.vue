<template>
  <div class="container-fluid mt-4">
    <h2 class="text-left mt-3">
      Update Password
    </h2>
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <b-row>
      <b-card
        class="d-flex justify-content-center col-sm-3 "
        style="margin-left : 40%"
      >
        <form @submit.prevent="savePost">
          <b-form-group label="New Password">
            <b-form-input v-model="user.password"></b-form-input>
          </b-form-group>
          <b-form-group label="Reenter Password">
            <b-form-input v-model="testpassword"></b-form-input>
          </b-form-group>
        
          <br />
          <span style="color:red">{{message}}</span>
          <br/>
          
          <div>
            <b-btn type="submit" variant="success">Save Company</b-btn>
          </div>
        </form>
      </b-card>
    </b-row>
    <br />
  </div>
</template>
<script>
//import api from '@/api'
export default {
  name: "updatePassword",
  data() {
    return {
      loading: false,
      user: {},
      message:"",
      testpassword:""
    };
  },
  async created() {},
  async mounted() {},
  methods: {
     /**
     * @vuese
     * This method updates the password
     */
    async savePost() {
      let userId = this.$route.params.userId;
      this.user.userId = userId;
      console.log(this.user);
      console.log(this.user.password,this.testpassword);

      if(this.user.password == this.testpassword){
await this.$axios.post("/updatePassword", this.user);
this.message="updated successfully";
this.$router.push({ name: "login" });
      }else{
          this.message="password should match"
      }

      

      console.log(this.user);
    },
    /**
     * @vuese
     * This method destroys the token and logs out of the application
     */
    logout() {
      this.$store.dispatch("destroyToken").then(() => {
        this.$router.push({ name: "login" });
      });
    },
  },
};
</script>