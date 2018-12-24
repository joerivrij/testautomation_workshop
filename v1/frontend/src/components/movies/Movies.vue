<template>
  <div class="movies">
    <v-header>All Movies</v-header>
    <section class="cta__container jumbotron text-center">
      <hr v-if="loggedIn">
      <search-movie class="search-movie" v-model="searchValue" v-if="loggedIn"></search-movie>
    </section>
    <main class="movies">

      <ul v-if="!searchValue">
        <li v-for="(movie, index) in getMovies" :key="index">
          <div class="movie__image-container">
            <div class="movie__image-box">
              <img src="../../assets/movie_posters/starwars1.jpg" alt="" class="movie__image">
            </div>
          </div>
          <div class="movie__details">
            <h3>{{movie.title}}</h3>
            <p>{{movie.description}}</p>
            <router-link
              tag="button"
              :to="{ name: 'movie', params: { imdbId: movie.imdb }}"
              v-if="loggedIn">more...
            </router-link>
          </div>
        </li>
      </ul>

      <ul v-if="searchValue && getSearchedMovies.length > 0">
        <li v-for="(searchedMovie, index) in getSearchedMovies" :key="index">
          <div class="movie__image-container">
            <div class="movie__image-box">
              <img src="../../assets/movie_posters/starwars1.jpg" alt="" class="movie__image">
            </div>
          </div>
          <div class="movie__details">
            <h3>{{searchedMovie.title}}</h3>
            <p>{{searchedMovie.description}}</p>
            <router-link
              tag="button"
              :to="{ name: 'movie', params: { imdbId: searchedMovie.imdb }}"
              v-if="loggedIn">more...
            </router-link>
          </div>
        </li>
      </ul>
      <div v-if="searchValue && getSearchedMovies.length === 0">No search results!</div>
    </main>
  </div>
</template>

<script>
/* eslint-disable func-names */
/* eslint-disable object-shorthand */
import { mapGetters, mapActions } from 'vuex';
import SearchMovie from '../generic/SearchMovie';

export default {
  name: 'Movies',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      movies: [],
      searchValue: '',
      searchResults: [],
    };
  },
  watch: {
    searchValue: function (newValue) {
      this.checkSearch(newValue);
    },
  },
  methods: {
    ...mapActions([
      'searchMovie',
    ]),
    checkSearch(value) {
      this.searchResults = [];
      if (value.length > 1) {
        this.searchMovie(value);
      }
    },
  },
  components: {
    'search-movie': SearchMovie,
  },
  computed: {
    ...mapGetters([
      'loggedIn',
      'getMovies',
      'getSearchedMovies',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  ul {
    padding: 0;
    min-width: 100%;
    margin-top: 0;
  }

  li {
    list-style-type: none;
    background: #fff;
    margin: 50px -26px;
    padding: 26px;
    display: flex;
  }

  a {
    color: blue;
  }

  .movie__image-container {
    width: 250px;
    max-width: 250px;
    flex: 1 0 auto;
    .movie__image-box {
      height: 0;
      overflow: hidden;
      padding-top: 297px / 210px * 100%;
      position: relative;
      img {
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  .movie__details {
    padding-left: 26px;
    position: relative;
    width: 100%;
    h3 {
      margin-top: 0;
    }
    button {
      position: absolute;
      bottom: 0;
      right: 0;
      background: url('../../assets/icons/baseline-expand_more-24px.svg') no-repeat center;
      border: solid 1px #000;
      border-radius: 50%;
      color: #000;
      width: 35px;
      height: 35px;
      padding: 0;
      text-indent: -100000px;
      outline: none;
    }
  }
</style>

