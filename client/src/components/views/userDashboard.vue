<template>
  <div>
    <div class="container studContainer">
      <h2 class="text-left mt-3">
       User Dashboard

        <div class="float-right">
          <router-link to="/logout">
            <b-button pill variant="danger" class="float-right">
              Logout
            </b-button>
          </router-link>
        </div>
      </h2>

      <b-card no-body class="mb-3" v-if="notEnrollEvents.length">
        <b-card-header header-tag="header" class="p-0" role="tab">
          <b-button
            block
            v-b-toggle.private-accordion
            variant="info"
            class="btn-lg text-left"
            id="pvtEvent-btn"
          >
            All Events Not enrolled
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
                  <th scope="col">Enroll Button</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="event in notEnrollEvents" :key="event.id">
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
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="enroll(event.id)"
                    >
                      Enroll
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-3" v-if="events.length">
        <b-card-header header-tag="header" class="p-0" role="tab">
          <b-button
            block
            v-b-toggle.private-accordion
            variant="info"
            class="btn-lg text-left"
            id="pvtEvent-btn"
          >
            All Events enrolled
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
            <span> <b>Company Name : </b>{{ cdetails.companyName }} </span>
          </div>
          <div>
            <span> <b>Company Location :</b> {{ cdetails.companyLocation }} </span>
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
//import api from '@/api'
export default {
  data() {
    return {
      loading: false,
      modalShow: false,
      companies: [],
      model: {},
    };
  },
  async created() {
    this.refreshPosts();
  },
  methods: {
    async refreshPosts() {
      const username = this.$store.getters.userdetails.username;
      await this.$axios
        .get("/getAllCompaniesByEmail/" + username)
        .then((response) => {
          this.companies = response.data;
        });
    },
    async open(id) {
      if (id == 1) {
        console.log("test");
      }
    },
    async savePost() {
      this.companies.push(this.model);
      /*
      if (this.model.id) {
        //await api.updatePost(this.model.id, this.model)
      } else {
      //  await api.createPost(this.model)
      }
      this.model = {} // reset form
      await this.refreshPosts()*/
    },
    async deletePost(company) {
      if (confirm("Are you sure you want to unregister this company?")) {
        // if we are editing a post we deleted, remove it from the form
        if (this.model.companies.id === company.id) {
          this.events.remove(company);
          // this.model = {}
        }
        //  await api.deletePost(id)
        //   await this.refreshPosts()
      }
    },
  },
};
</script>
