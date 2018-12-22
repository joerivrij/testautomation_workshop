<template>
  <div>
    <v-header></v-header>
    <section class="cta__container jumbotron text-center">
      <p>{{currentMovie.title}}</p>
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
