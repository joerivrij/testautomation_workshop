<template>
  <div class="movies">
    <v-header></v-header>
    <section class="cta__container jumbotron text-center">
      <hr>
    </section>
    <main class="movies">
      <ul>
        <li v-for="movie in movies" :key="movie">
          <h3>{{movie.title}}</h3>
          <p>{{movie.description}}</p>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Movies',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      movies: [],
    };
  },
  methods: {
    getAllMovies() {
      axios.get('http://localhost:8080/v1/proxy/movies/').then((res) => {
        console.info('alle films');
        this.movies = res.data;
        console.info(this.movies);
      });
    },
  },
  mounted() {
    console.info('mounted');
    this.getAllMovies();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
