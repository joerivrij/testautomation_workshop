<template>
  <div class="login">
    <v-header></v-header>
    <section class="login__container jumbotron text-center">
      <label for="username">Username</label>
      <input type="text" id="username" class="login__username">
      <label for="username">Password</label>
      <input type="password" id="password" class="login__password">
      <button class="login__submit" @click="login">Submit</button>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      loginUrl: 'http://localhost:8080/v1/proxy/tokens'
    };
  },
  methods: {
    login() {
      const formData = {
        // todo, remove after back-end fix
        id: 3,
        userName: this.userName,
        password: this.password,
      };
      console.info(formData);
      // todo, fix CORS issue with OPTIONS call and allow-origin *
      axios.post(this.loginUrl, formData)
        .then(res => console.info(res))
        .catch(error => console.error(error));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
