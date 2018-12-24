<template>
  <div class="user-profile">
    <v-header>User Profile</v-header>
    <section class="cta__container jumbotron text-center">
      <router-link tag="button" :to="{name: 'movies'}">Show all movies</router-link>
      <h2>Profile settings of:{{currentUser.name}}</h2>
    </section>
    <main class="movies">
      <dl>
        <dt>Name</dt>
        <dd>{{currentUser.name}}</dd>
        <dt>ID</dt>
        <dd>{{currentUser.id}}</dd>
        <dt>Is Logged in</dt>
        <dd>{{currentUser.isLoggedIn}}</dd>
        <dt>Session Expires</dt>
        <dd>{{currentUser.sessionExpires}}</dd>
      </dl>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'UserProfile',
  computed: {
    ...mapGetters([
      'currentUser',
    ]),
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
    box-sizing: border-box;
  }
  dt {
    width: calc(50% - 15px);
    text-align: right;
    padding-right: 15px;
    font-weight: bold;
  }
  dd {
    margin-left: auto;
    width: 50%;
  }
</style>
