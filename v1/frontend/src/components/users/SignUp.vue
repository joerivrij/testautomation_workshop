<template>
  <div class="login">
    <v-header></v-header>
    <section class="login__container jumbotron text-center">
      <label for="username">Username</label>
      <input type="text"
             id="username"
             class="login__username"
             v-model="userName">
      <label for="password">Password</label>
      <input type="password"
             id="password"
             class="login__password"
              v-model="password">
      <label for="repeat-password">Repeat Password</label>
      <input type="password"
             id="repeat-password"
             class="login__password"
              v-model="confirmPassword">
      <button class="login__submit" @click="signUp">Sign Up</button>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignUp',
  data() {
    return {
      submitUrl: 'http://localhost:8080/v1/proxy/users/',
      msg: 'Welcome to Your Vue.js App',
      username: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    signUp() {
      const formData = {
        userName: this.userName,
        password: this.password,
      };
      const config = {
        responseType: 'json',
        withCredentials: true,
      };

      console.info(formData);
      // todo, fix CORS issue with OPTIONS call and allow-origin *
      axios.post(this.submitUrl, formData, config)
        .then(res => console.info(res))
        .catch(error => console.error(error));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
