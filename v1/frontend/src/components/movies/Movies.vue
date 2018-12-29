<template>
  <div class="movies">
    <v-header>All Movies</v-header>
    <section class="cta__container">
      <hr v-if="loggedIn">
      <search-movie class="search-movie" v-model="searchValue" v-if="loggedIn"></search-movie>
    </section>
    <main class="movies">
      <ul v-if="!searchValue">
        <li v-for="(movie, index) in getMovies" :key="index">
          <div class="movie__image-container">
            <div class="movie__image-box">
              <router-link
                tag="a"
                :to="{ name: 'movie', params: { imdbId: movie.imdb }}"
                v-if="loggedIn">
                <img v-if="movie.image"
                     :src="(movie.image.indexOf('http') === 0
                   ? movie.image
                   : `../../assets/movie_posters/${movie.image}`)"
                     alt="" class="movie__image">
                <img v-if="!movie.image"
                     src="../../assets/movie_posters/starwars1.jpg"
                     alt="" class="movie__image">
              </router-link>
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
  @import '../../assets/scss/_variables.scss';

  ul {
    min-width: 100%;
    padding: 0;
    margin-top: 0;
  }

  li {
    display: flex;
    margin: 50px -26px;
    padding: 26px;
    background: $white;
    list-style-type: none;
  }

  .movie__image-container {
    flex: 1 0 auto;
    width: 250px;
    max-width: 250px;

    .movie__image-box {
      position: relative;
      overflow: hidden;
      height: 0;
      padding-top: 297px / 210px * 100%;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .movie__details {
    position: relative;
    width: 100%;
    padding-left: 26px;

    h3 {
      margin-top: 0;
    }

    button {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 35px;
      height: 35px;
      padding: 0;
      color: $white;
      background: url('../../assets/icons/baseline-expand_more-24px.svg') no-repeat center;
      border: solid 1px #000;
      outline: none;
      border-radius: 50%;
      text-indent: -100000px;
    }
  }
</style>

