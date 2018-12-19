<template>
  <div class="movies">
    <v-header></v-header>
    <section class="cta__container jumbotron text-center">
      <hr>
      <router-link tag="button" :to="movies"></router-link>
    </section>
    <main class="movies">
    </main>
  </div>
</template>

<script>
export default {
  name: 'Movies',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
