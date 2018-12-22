<template>
  <div class="home">
    <v-header></v-header>
    <section class="cta__container jumbotron text-center">
      <hr>
      <router-link tag="button" :to="'movies'">All Movies</router-link>
    </section>
    <main class="sneek-preview">
      <div class="sneek-preview__container">
        <h3>Coming soon:</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Vm4tx1O9GAc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
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
