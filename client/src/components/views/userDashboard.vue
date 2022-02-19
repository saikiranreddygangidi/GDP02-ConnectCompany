<template>
  <div class="container-fluid mt-4">
    <h1 class="h1" style="background: white">User Dashboard</h1>
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <b-row>
      <b-col>
        <table class="table table-striped table-light">
          <thead>
            <tr>
              <th>Company Id</th>
              <th>Registered companies</th>
              <th>No of events</th>
              <!-- <th>Location</th> -->
              <!-- <th>No of  events</th> -->
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="company in companies" :key="company.id">
              <td>{{ company.id }}</td>
              <td>{{ company.companyName }}</td>
              <td>{{ company.noofevents }}</td>
              <!-- <td>{{ company.companyLocation }}</td>
              <td>{{ company.noofevents }}</td> -->
              <td class="text-right">
                <!-- <a href="#" @click.prevent="showPopup = !showPopup">Kow more</a> - -->
                <!-- <a href="#" @click.prevent="deletePost(company)">Unregister</a> -->
                <b-button @click="modalShow = !modalShow" class="me-3"
                  >Know more</b-button
                >

                <b-modal
                  v-model="modalShow"
                  :title="company.companyName"
                  ok-only
                  ok-primary
                  ok-what
                  >There are two events happening in this company.{{
                    company.companyName
                  }}
                  -{{ company.companyName }}</b-modal
                >
                <button class="btn btn-danger" @click="deletePost(company)">
                  Unregister
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
      <b-col lg="3">
        <b-card :title="'Register a Company'">
          <form @submit.prevent="savePost">
            <b-form-group label="Company Name">
              <b-form-input
                type="text"
                class="m-2"
                v-model="model.companyName"
                placeholder="Enter a company name"
              ></b-form-input>
            </b-form-group>
            <div>
              <b-btn type="submit" variant="success">Register</b-btn>
            </div>
          </form>
        </b-card>
      </b-col>
    </b-row>
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
