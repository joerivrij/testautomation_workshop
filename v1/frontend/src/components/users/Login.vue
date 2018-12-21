<template>
  <div class="login">
    <v-header></v-header>
    <section class="login__container jumbotron text-center">
      <label for="username">Username</label>
      <input
        type="text"
        id="username"
        class="login__username"
        v-model="userName">
      <label for="username">Password</label>
      <input
        type="password"
        id="password"
        class="login__password"
        v-model="password">
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
      loginUrl: 'http://localhost:8080/v1/proxy/tokens/',
      userName: '',
      password: '',
    };
  },
  methods: {
    login() {
      const formData = {
        // todo, remove after back-end fix
        id: 1,
        username: this.userName,
        password: this.password,
      };
      const config = {
        responseType: 'json',
        withCredentials: true,
      };

      console.info(formData);
      // todo, fix CORS issue with OPTIONS call and allow-origin *
      axios.post(this.loginUrl, formData, config)
        .then(res => console.info(res))
        .catch(error => console.error(error));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
