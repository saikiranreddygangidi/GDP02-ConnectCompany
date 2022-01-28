<template>
  <div class="{'blur-content': showModal}">
    <div class="home-card-container">
      <div outlined class="home-card">
        <div class="content-container">
          <div
            class="col col1 border text-dark bg-light d-flex align-items-center justify-content-center"
          >
            <h1>Welcome to Connect Company.</h1>
            <p>
              This is the place where users can directly connect to the
              Companies without any third parties. Companies can directly post
              the new job openings on the Connect Company site. Users can
              directly register for the new events by clicking on the Event. By
              Using the Connect Company there are multiple side advantages for
              both the Users and Companie
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
