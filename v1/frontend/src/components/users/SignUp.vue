<template>
  <div class="login">
    <v-header></v-header>
    <section class="login__container jumbotron text-center">
      <label for="username">Username</label>
      <input type="text" id="username" class="login__username">
      <label for="password">Password</label>
      <input type="password" id="password" class="login__password">
      <label for="repeat-password">Password</label>
      <input type="password" id="repeat-password" class="login__password">
      <button class="login__submit" @click="signUp">Sign Up</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    signUp() {
      console.info('Ik geef me op!');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
