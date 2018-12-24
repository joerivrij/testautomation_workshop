<template>
  <div class="login">
    <v-header>Sign Up</v-header>
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

      // todo *
      axios.post(this.submitUrl, formData, config)
        .then(res => console.info(res))
        .catch(error => console.error(error));
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
