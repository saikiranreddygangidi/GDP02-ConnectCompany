<template>
  <div class="container-fluid mt-4">
    <h1 class="h1" style="background:white">
      Admin Dashboard
      <div class="btn-center">
        <b-button variant="primary" @click="logout()">
          Logout
          <font-awesome-icon icon="sign-in-alt" class="m-t-4" />
        </b-button>
      </div>
    </h1>
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <b-row>
      <b-card
        class="d-flex justify-content-center col-sm-3 "
        style="margin-left : 40%"
        :title="model.id ? 'Edit Company ID#' + model.id : 'Add New Company'"
      >
        <form @submit.prevent="savePost">
          <b-form-group label="Company Name">
            <b-form-input
              type="text"
              v-model="model.companyName"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Company Location">
            <b-form-input
              rows="4"
              v-model="model.companyLocation"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Company UserName">
            <b-form-input
              rows="4"
              v-model="model.companyUserName"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Company email">
            <b-form-input rows="4" v-model="model.email"></b-form-input>
          </b-form-group>
          <div>
            <b-btn type="submit" variant="success">Save Company</b-btn>
          </div>
        </form>
      </b-card>
    </b-row>
    <br />
    <b-row>
      <b-col>
        <table class=" table table-striped table-light">
          <thead>
            <tr>
              <th>Company Id</th>
              <th>Company</th>
              <th>Location</th>
              <th>Company User Name</th>
              <th>Company email</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="company in companies" :key="company.id">
              <td>{{ company.id }}</td>
              <td>{{ company.companyName }}</td>
              <td>{{ company.companyLocation }}</td>
              <td>{{ company.companyUserName }}</td>
              <td>{{ company.email }}</td>
              <td class="text-right">
                <a href="#" @click.prevent="populatePostToEdit(company)"
                  >Edit</a
                >
                -
                <a href="#" @click.prevent="deletePost(company)">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
  </div>
</template>
<script>
//import api from '@/api'
export default {
  name: "AdminDashboard",
  data() {
    return {
      loading: false,
      companies: [],
      model: {},
    };
  },
  async created() {
    this.refreshPosts();
    console.log("hngsdngdfgb", this.$store.getters.loggedIn);
  },
  async mounted() {},
  methods: {
    async refreshPosts() {
      await this.$axios.get("/getAllCompanies").then((response) => {
        this.companies = response.data;
      });
    },
    async populatePostToEdit(company) {
      this.model = Object.assign({}, company);
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
      if (confirm("Are you sure you want to delete this post?")) {
        // if we are editing a post we deleted, remove it from the form
        if (this.model.companies.id === company.id) {
          this.events.remove(company);
          // this.model = {}
        }
        //  await api.deletePost(id)
        //   await this.refreshPosts()
      }
    },
    logout() {
      this.$store.dispatch("destroyToken").then(() => {
        this.$router.push({ name: "login" });
      });
    },
  },
};
</script>
