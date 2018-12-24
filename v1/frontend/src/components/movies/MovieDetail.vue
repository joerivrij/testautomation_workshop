<template>
  <div>
    <v-header></v-header>
    <section class="cta__container jumbotron text-center">
      <router-link tag="button" :to="{name: 'movies'}">Show all movies</router-link>
      <h3>{{currentMovie.title}}</h3>
    </section>
    <main class="movies">
      <img :src="currentMovie.image"/>
      <dl>
        <dt>Title</dt>
        <dd>{{currentMovie.title}}</dd>
        <dt>Genre</dt>
        <dd>{{currentMovie.type}}</dd>
        <dt>Year</dt>
        <dd>{{currentMovie.year}}</dd>
      </dl>
      <div>{{currentMovie.description}}</div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      imdbId: this.$route.params.imdbId,
    };
  },
  methods: {
    ...mapActions([
      'getMovie',
    ]),
  },
  computed: {
    ...mapGetters([
      'currentMovie',
    ]),
  },
  name: 'movie-detail',
  mounted() {
    this.getMovie(this.imdbId);
  },
};
</script>

<style lang="scss" scoped>
  section {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    box-sizing: border-box;
  }
  dl {
    display: flex;
    flex-wrap: wrap;
    font-size: 20px;
    background: #fff;
    margin: 0 -26px;
    padding: 30px 15px;
    width: calc(100% + 52px);
    min-width: 100%;
    box-sizing: border-box;
  }
  dt {
    width: calc(50% - 15px);
    text-align: right;
    padding-right: 15px;
    font-weight: bold;
    box-sizing: border-box;
  }
  dd {
    margin-left: auto;
    width: 50%;
    box-sizing: border-box;
  }
</style>
