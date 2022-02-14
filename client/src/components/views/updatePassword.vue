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