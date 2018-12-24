<template>
  <div class="login">
    <v-header>Login</v-header>
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

<style lang="scss" scoped>
  label {
    box-sizing: border-box;
    min-width: 220px;
    padding-right: 15px;
    padding-top: 6px;
    height: 38px;
    border: none;
    margin-bottom: 15px;
    font-size: 20px;
  }

  input {
    box-sizing: border-box;
    height: 38px;
    border: none;
    width: calc(100% - 220px);
    margin-bottom: 15px;
    border-radius: 8px;
    padding: 15px 10px;
    font-size: 20px;
  }
</style>
