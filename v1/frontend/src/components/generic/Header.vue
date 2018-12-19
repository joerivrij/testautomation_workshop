<template>
  <header class="header">
    <div class="header__logo">
      <img @click="navigateToHome" src="../../assets/imtdb.svg" alt="" class="logo">
    </div>
    <div class="header__title">
      <h2>Movies</h2>
    </div>
    <ul class="header-menu">
      <li class="header-menu__item">
        <router-link tag="a" :to="'signup'">Sign Up</router-link>
      </li>
      <li class="header-menu__item">
        <router-link tag="a" :to="'login'">Login</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
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
