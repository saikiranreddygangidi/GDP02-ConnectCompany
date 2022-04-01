<template>
  <div class="container-fluid mt-4">
    <h1 class="h1" style="background:white">Company User Dashboard <div class="btn-center">
      <b-button variant="primary" @click="logout()">
        Logout
        <font-awesome-icon icon="sign-in-alt" class="m-t-4" />
      </b-button>
    </div></h1>
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <br />
    <b-row>
      <b-card
        class="d-flex justify-content-center col-sm-3 "
        style="margin-left : 40%"
        :title="model.id ? 'Edit Event ID#' + model.id : 'Add New Event'"
      >
        <form @submit.prevent="savePost">
          <b-form-group label="Event Name">
            <b-form-input type="text" v-model="model.eventName"></b-form-input>
          </b-form-group>
          <b-form-group label="Event Type">
            <b-form-input type="text" v-model="model.eventType"></b-form-input>
          </b-form-group>
          <b-form-group label="Event Date">
            <b-form-datepicker
              type="date"
              v-model="model.eventDate"
            ></b-form-datepicker>
          </b-form-group>
          <b-form-group label="Event Location">
            <b-form-input
              type="text"
              v-model="model.eventLocation"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Event Description">
            <b-form-textarea
              rows="4"
              v-model="model.eventDescription"
            ></b-form-textarea>
          </b-form-group>
          <div>
            <b-btn type="submit" variant="success">Save Event</b-btn>
          </div>
        </form>
      </b-card>
    </b-row>
    <br />
    <br />
    <b-row>
      <b-col>
        <table class="table table-striped table-light">
          <thead>
            <tr>
              <th>Event Id</th>
              <th>Event</th>
              <th>Type of event</th>
              <th>Date</th>
              <th>Location</th>
              <th>Description</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="event in events" :key="event.id">
              <td>{{ event.id }}</td>
              <td>{{ event.eventName }}</td>
              <td>{{ event.eventType }}</td>
              <td>{{ event.eventLocation }}</td>
              <td>{{ event.eventDate }}</td>
              <td>{{ event.eventDescription }}</td>

              <td class="text-right">
                <a href="#" @click.prevent="populatePostToEdit(event)">Edit</a>
                -
                <a href="#" @click.prevent="deletePost(event)">Delete</a>
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
  name:"CompanyUserDashboard",
  data() {
    return {
      loading: false,
      events: [],
      model: {},
    };
  },
  async created() {
    this.refreshPosts();
  },
  methods: {
    async refreshPosts() {
      await this.$axios.get("/getAllEvents").then((response) => {
        this.events = response.data;
      });
    },
     logout() {
      this.$store.dispatch("destroyToken").then(() => {
        this.$router.push({ name: "login" });
      });
    },
    async populatePostToEdit(event) {
      this.model = Object.assign({}, event);
    },
    async savePost() {
      this.events.push(this.model);
      /*
      if (this.model.id) {
        //await api.updatePost(this.model.id, this.model)
      } else {
      //  await api.createPost(this.model)
      }
      this.model = {} // reset form
      await this.refreshPosts()*/
    },
    async deletePost(event) {
      if (confirm("Are you sure you want to delete this post?")) {
        // if we are editing a post we deleted, remove it from the form
        if (this.model.event.id === event.id) {
          this.events.remove(event);
          // this.model = {}
        }
        //  await api.deletePost(id)
        //   await this.refreshPosts()
      }
    },
  },
};
</script>
