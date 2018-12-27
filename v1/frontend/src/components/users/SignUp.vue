<template>
  <div class="login">
    <v-header>Sign Up</v-header>
    <form>
      <section class="login__container">
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
import { mapActions } from 'vuex';

export default {
  name: 'SignUp',
  data() {
    return {
      submitUrl: 'http://localhost:8080/v1/proxy/users/',
      username: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    ...mapActions([
      'signUp',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/scss/_variables.scss';
</style>
