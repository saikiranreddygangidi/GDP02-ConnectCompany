<template>
  <b-container fluid class="container">
    <b-row>
      <div class="col-sm-12">
        <h2 class="mt-5 mb-5 text-light">Welcome to ConnectCompany</h2>
      </div>
      <b-col></b-col>
      <b-col sm="6" lg="4">
        <div class="register">
          <h4>Register</h4>
          <hr class="mb-0" />
          <b-form class="p-4" @submit.prevent="register">
            <b-form-group
              class="text-left"
              id="email-group-1"
              label="email:"
              label-for="email"
            >
              <b-form-input
                id="email"
                class="input-field"
                v-model="input.email"
                type="text"
                placeholder="Enter email id"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              class="text-left"
              id="username-group-1"
              label="Username:"
              label-for="username"
            >
              <b-form-input
                id="username"
                class="input-field"
                v-model="input.username"
                type="text"
                placeholder="Enter username"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              class="text-left"
              id="username-group-1"
              label="Password:"
              label-for="password"
            >
              <b-form-input
                id="password"
                v-model="input.code"
                type="password"
                required
                placeholder="Enter password"
                autocomplete="on"
              ></b-form-input>
            </b-form-group>

            <p class="text-danger">{{ this.wizard.register }}</p>

            <b-button variant="primary" type="submit">
              Register
              <font-awesome-icon icon="sign-in-alt" class="m-t-4" />
            </b-button>
          </b-form>
        </div>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>