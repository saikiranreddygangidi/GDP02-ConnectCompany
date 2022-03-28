<template>
  <div class="{'blur-content': showModal}">
    <div class="home-card-container">
      <div outlined class="home-card">
        <div class="content-container">
          <div
            class="col col1 border text-dark bg-light d-flex align-items-center justify-content-center"
          >
            <h1>Hello usery,</h1>
            <h2>We tried implementing login with Github using Auth0. But it did not work for us  </h2>
            <p>
            <ul>
             <li> Our application need to authorize different user based upon the roles such as user, companyuser and adminuser.</li>
              <li>We classify the there dashboard based upon the role which is not possible when considering with github authorization we can't do that .</li>
              <li>Instead we do username-password authorization where generated jwt token(bearer token) </li>
              <li>we also concentrated on the user details security by encrypting with algorithm SHA-256 where we used on crypto js package for that.</li>
              <li>while we are successful in implementing the functionality using Vue.js and Adonis.js libraries </li>
              </ul>
              Instead everyone learn it and worked on sample project <a href="https://test-auth0-case.herokuapp.com/">Here is link for sample project </a>
            </p>
            <div style="display:flex;">
              <router-link to="/register">
                <button class="button">Register</button> </router-link
              ><router-link to="/login">
                <button class="button">Login</button>
              </router-link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
