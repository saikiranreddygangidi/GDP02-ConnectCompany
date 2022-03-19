<template>
  <div>
    <div class="container studContainer">
      <h2 class="text-left mt-3">
        Admin Dashboard

        <div class="float-right">
          <router-link to="/logout">
            <b-button pill variant="danger" class="float-right">
              Logout
            </b-button>
          </router-link>
        </div>
        
        <div class="float-right" style="margin-left:80%">
        
          <router-link to="/addCompany">
            <b-button pill variant="info" class="float-right">
              Create Company
              <font-awesome-icon icon="fa-solid fa-user-secret" class="ml-1" />
            </b-button>
          </router-link>
        </div>
      </h2>

      <b-card no-body class="mb-3" v-if="events.length">
        <b-card-header header-tag="header" class="p-0" role="tab">
          <b-button
            block
            v-b-toggle.private-accordion
            variant="info"
            class="btn-lg text-left"
            id="pvtEvent-btn"
          >
            All Events
            <span>(Latest events)</span>
            <font-awesome-icon
              icon="chevron-circle-down"
              class="mt-1 ml-1 float-right"
              id="arrow-down0"
            />
            <font-awesome-icon
              icon="chevron-circle-up"
              class="mt-1 ml-1 float-right d-none"
              id="arrow-up0"
            />
          </b-button>
        </b-card-header>
        <b-collapse
          id="private-accordion"
          visible
          accordion="private-accd"
          role="tabpane2"
        >
          <b-card-body>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Event Name</th>
                  <th scope="col">Event Type</th>
                  <th scope="col">Event Location</th>
                  <th scope="col">EventDate</th>
                  <th scope="col">Open Company</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="event in events" :key="event.id">
                  <td>{{ event.eventName }}</td>
                  <td>{{ event.eventType }}</td>
                  <td>{{ event.eventLocation }}</td>
                  <td>{{ event.eventDate }}</td>
                  <td
                    @click="
                      $bvModal.show('addModal');

                      openCompany(event.id);
                    "
                  >
                    <button type="button" class="btn btn-primary">
                      company details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-modal id="addModal" hide-footer centered>
        <template #modal-title>
          Company details
        </template>
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <div>
            <!-- <label for="select event">Select Event</label> -->
            <span> Company Name : {{ cdetails.companyName }} </span>
          </div>
          <div>
            <span> company Location : {{ cdetails.companyLocation }} </span>
          </div>

          <div>
            <b-button
              class="mt-3 col-12"
              block
              @click="$bvModal.hide('addModal')"
              >ok</b-button
            >
          </div>
        </div>
      </b-modal>
    </div>
  </div>
</template>
<script>
// import EventItem from "../components/Events/EventItem";
// import Loader from "../components/Utils/Loader";
import $ from "jquery";

let publicAccd = true;
let editEventAccd = true;
let pvtEventAccd = true;

export default {
  name: "AdminDashboard",

  data() {
    return {
      userId: this.$store.getters.userDetails.id,

      events: [],
      editAccessEvents: [],
      noEditAccess: [],
      cdetails: { companyName: "", companyLocation: "" },
    };
  },

  async mounted() {
    console.log(
      JSON.parse(localStorage.getItem("user_details")),
      "------local storage user details"
    );
    console.log(
      this.$store.getters.userDetails.id,
      this.$store.getters.userDetails.role,
      "---role froms store"
						  
																	
									   
		 
	  
									   
    );
    $("#public-btn").click(function() {
      if (publicAccd) {
        $("#arrow-down0").addClass("d-none");
        $("#arrow-up0").removeClass("d-none");
						  
														 
      } else {
        $("#arrow-down0").removeClass("d-none");
        $("#arrow-up0").addClass("d-none");
      }
      publicAccd = !publicAccd;
    });

    $("#editEvent-btn").click(function() {
      if (editEventAccd) {
        $("#arrow-down1").addClass("d-none");
        $("#arrow-up1").removeClass("d-none");
      } else {
        $("#arrow-down1").removeClass("d-none");
        $("#arrow-up1").addClass("d-none");
									
									  
      }
      editEventAccd = !editEventAccd;
    });

    $("#pvtEvent-btn").click(function() {
      console.log("****private button**");
      if (pvtEventAccd) {
        alert("hello");
        $("#arrow-down2").addClass("d-none");
        $("#arrow-up2").removeClass("d-none");
      } else {
        alert("hello");
        $("#arrow-down2").removeClass("d-none");
        $("#arrow-up2").addClass("d-none");
      }
      pvtEventAccd = !pvtEventAccd;
      alert(pvtEventAccd);
    });

    await this.getAllEvents();
  },
  methods: {
    async getAllEvents() {
      console.log("entereddd");
      await this.$axios
        .get(`/getAllEvents`)
        .then((response) => {

          this.eventsCount = response.data.length;
          this.events = response.data;

          // this.privateEvents.filter()
        })
        .catch((error) => {
          console.log("cameeeeee");
          console.log(error);
        });
    },
    async openCompany(id) {
      await this.$axios
        .get("/getCompanyDetails/" + id)
        .then((response) => {
          // console.log("***  inside public events fn  *****");
          // console.log(response.data);
          // console.log("***  inside public events fn  *****");
          console.log(response.data, "kdfbhkdsfjdfhbhhhh  ====");
          this.cdetails = response.data[0];

          // this.privateEvents.filter()
        })
        .catch((error) => {
          console.log("cameeeeee");
          console.log(error);
        });
    },
  },
};
</script>