<template>
  <div class="login">
    <v-header>Sign Up</v-header>
    <form>
      <section class="login__container jumbotron text-center">
        <hr>
        <label for="username">Username</label>
        <input type="text"
               id="username"
               class="login__username"
               v-model="userName">
        <label for="password">Password</label>
        <input type="password"
               id="password"
               autocomplete="off"
               class="login__password"
               v-model="password">
        <label for="repeat-password">Repeat Password</label>
        <input type="password"
               id="repeat-password"
               autocomplete="off"
               class="login__password"
               v-model="confirmPassword">
        <button class="login__submit" @click.prevent="signUp">Sign Up</button>
      </section>
    </form>
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

      // todo *
      axios.post(this.submitUrl, formData, config)
        .then(res => console.info(res))
        .catch(error => console.error(error));
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/_variables.scss';
</style>
