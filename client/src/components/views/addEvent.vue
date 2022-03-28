<template>
  <div class="container-fluid mt-4">
    <h2 class="text-left mt-3">
      CompanyUser Dashboard

      <div class="float-right">
        <router-link to="/logout">
          <b-button
            pill
            variant="danger"
            id="logout"
            class="float-right"
            style="margin-left:50px"
          >
            Logout
          </b-button>
        </router-link>

        <router-link to="/companyUserDashboard">
          <b-button
            pill
            variant="info"
            class="float-right"
            style="margin-left:20px"
          >
            dashboard
            <font-awesome-icon icon="fa-solid fa-user-secret" class="ml-1" />
          </b-button>
        </router-link>
      </div>
    </h2>
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <b-row>
      <b-col></b-col>
      <b-col lg="6" md="8" sm="10">
        <b-card>
          <b-form @submit.prevent="savePost">
            <b-form-group label="Event Name">
              <b-form-input
                type="text"
                v-model="event.eventName"
              ></b-form-input>
            </b-form-group>
            <b-form-group label="Event Type">
              <b-form-input rows="4" v-model="event.EventType"></b-form-input>
            </b-form-group>
            <b-form-group label="Event Location">
              <b-form-input v-model="event.eventLocation"></b-form-input>
            </b-form-group>
            <br />
            <br />
            <div>
              <b-btn type="submit" id="submit" variant="success"
                >Save Company</b-btn
              >
            </div>
          </b-form>
          <span style="red">{{ errmsg }}</span>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
    <br />
  </div>
</template>

<script>
//import api from '@/api'
export default {
  name: "addEvent",
  data() {
    return {
      loading: false,
      event: {},
      errmsg: "",
    };
  },
  async created() {},
  async mounted() {},
  methods: {
    /**
     * @vuese
     * This method adds new event to the events list
     */
    async savePost() {
      let userId = this.$store.getters.userDetails.id;

      this.event.createdBy = this.$store.getters.userDetails.id;
      let company = await this.$axios.get("/getCompanyDetailsByUID/" + userId);
      this.event.belongsTo = company.data[0].id;
      console.log(this.event);

      this.$axios
        .post("/addEvent", this.event)
        .then((response) => {
          this.errmsg = "Event data is successfully uploaded";
          this.spin = false;
          this.$root.$bvToast.toast(`event added successfully`, {
            title: `Event Created `,
            variant: "success",
            autoHideDelay: 5000,
          });

          console.log("----", response.data);
        })
        .catch((error) => {
          this.spin = false;
          this.errmsg = "There is error in uploading the event data";
          console.log("----", error.response.data);
        });
      this.event = {};
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