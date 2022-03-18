<template>
  <b-container fluid class="container">
    <div class="container-fluid mt-4">
      <h2 class="text-left mt-3">
        Admin Dashboard

        <div class="float-right">
          <router-link to="/logout">
            <b-button
              pill
              variant="danger"
              class="float-right"
              style="margin-left: 50px"
            >
              Logout
            </b-button>
          </router-link>

          <router-link to="/adminDashboard">
            <b-button
              pill
              variant="info"
              class="float-right"
              style="margin-left: 20px"
            >
              dashboard
              <font-awesome-icon icon="fa-solid fa-user-secret" class="ml-1" />
            </b-button>
          </router-link>
        </div>
      </h2>
      <b-alert :show="loading" variant="info">Loading...</b-alert>
    </div>

    <b-row>
      <b-col></b-col>
      <b-col lg="6" md="8" sm="10">
        <b-card>
          <b-form @submit.prevent="savePost">
            <b-form-group label="Company Name">
              <b-form-input
                type="text"
                v-model="companies.companyName"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="CompanyMemeber Email">
              <b-form-input
                type="email"
                v-model="companies.CompanyMemberEmail"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Company Member Username">
              <b-form-input
                v-model="companies.CompanyMemberUserName"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Company Location">
              <b-form-input
                rows="4"
                v-model="companies.companyLocation"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Company Start date">
              <b-form-input
                type="date"
                v-model="companies.eventDate"
              ></b-form-input>
            </b-form-group>
            <br />
            <br />
            <div>
              <b-btn type="submit" variant="success">Save Company</b-btn>
            </div>
          </b-form>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>
<script>
//import api from '@/api'
export default {
  name: "addCompany",
  data() {
    return {
      loading: false,
      companies: {},
    };
  },
  async created() {},
  async mounted() {},
  methods: {
    savePost() {
      console.log(this.$store.getters.userDetails.id, "djfhgdwfhghjn");

      this.companies.userId = this.$store.getters.userDetails.id;
      this.$axios
        .post("/addCompany", this.companies)
        .then((response) => {
          this.spin = false;
          this.$root.$bvToast.toast(`Company added successfully`, {
            title: `Company Created `,
            variant: "success",
            autoHideDelay: 50000,
          });

          console.log("----", response.data);
        })
        .catch((error) => {
          this.spin = false;
          console.log("----", error.response.data);
        });
      this.companies = {};
    },

    logout() {
      this.$store.dispatch("destroyToken").then(() => {
        this.$router.push({ name: "login" });
      });
    },
  },
};
</script>
