<template>
  <header class="header">
    <div class="header__logo">
      <img @click="navigateToHome" src="../../assets/imtdb.svg" alt="" class="logo">
    </div>
    <div class="header__title">
      <h2>Movies</h2>
    </div>
    <ul class="header-menu">
      <li
        class="header-menu__item"
        v-if="!loggedIn">
        <router-link tag="a" :to="'signup'">Sign Up</router-link>
      </li>
      <li
        class="header-menu__item"
        v-if="!loggedIn">
        <router-link tag="a" :to="'login'">Login</router-link>
      </li>
      <li
        class="header-menu__item"
        v-if="loggedIn">
        <router-link tag="a" :to="'profile'">Profile</router-link>
      </li>
      <li
        class="header-menu__item"
        v-if="loggedIn">
        <router-link tag="a" :to="'logout'">Logout</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'loggedIn',
    ]),
  },
  methods: {
    navigateToHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
  .logo {
    cursor: pointer;
  }
</style>
