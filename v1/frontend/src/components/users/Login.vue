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
import { mapActions } from 'vuex';

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
    ...mapActions([
      'loginWithCredentials',
    ]),
    login() {
      const formData = {
        username: this.userName,
        password: this.password,
      };
      if (this.loginWithCredentials(formData)) {
        this.$router.push('movies');
      }
    },
  },
};
</script>
