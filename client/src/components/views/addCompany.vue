<template>
  <div class="container-fluid mt-4">
    <h2 class="text-left mt-3">
      Admin Dashboard

      <div class="float-right">
        <router-link to="/logout">
          <b-button pill variant="danger" class="float-right" style="margin-left:50px">
            Logout
          </b-button>
        </router-link>
        
          <router-link to="/adminDashboard">
            <b-button pill variant="info" class="float-right" style="margin-left:20px">
              dashboard
              <font-awesome-icon icon="fa-solid fa-user-secret" class="ml-1" />
            </b-button>
          </router-link>
        
      </div>
    </h2>
    <b-alert :show="loading" variant="info">Loading...</b-alert>
    <b-row>
      <b-card
        class="d-flex justify-content-center col-sm-3 "
        style="margin-left : 40%"
        
      >
        <form @submit.prevent="savePost">
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
        </form>
      </b-card>
    </b-row>
    <br />
  </div>
</template>