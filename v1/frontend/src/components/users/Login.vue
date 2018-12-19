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
export default {
  name: 'Login',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
    login() {
      console.info('Ik log nu in!');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
