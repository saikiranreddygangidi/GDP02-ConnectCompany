<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand href="#">ConnectCompany</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->

        <b-navbar-nav v-if="isloggied()" class="nav-but">
          <b-nav-text
            ><router-link to="/login" class="border"
              ><button>Logout</button></router-link
            ></b-nav-text
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
