<template>
  <div class="movies">
    <v-header></v-header>
    <section class="cta__container jumbotron text-center">
      <hr v-if="loggedIn">
      <search-movie v-if="loggedIn"></search-movie>
    </section>
    <main class="movies">
      <ul>
        <li v-for="(movie, index) in movies" :key="index">
          <h3>{{movie.title}}</h3>
          <p>{{movie.description}}</p>
          <router-link
            tag="a"
            :to="`/${movie.imdb}/movie`"
            v-if="loggedIn">more...</router-link>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import SearchMovie from '../generic/SearchMovie';

export default {
  name: 'Movies',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      movies: [],
    };
  },
  components: {
    'search-movie': SearchMovie,
  },
  computed: {
    ...mapGetters([
      'loggedIn',
    ]),
  },
  methods: {
    getAllMovies() {
      axios.get('http://localhost:8080/v1/proxy/movies/').then((res) => {
        this.movies = res.data;
      });
    },
  },
  mounted() {
    this.getAllMovies();
  },
};
</script>
