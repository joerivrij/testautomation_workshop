<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('tryAutoLogin');
  },
};
</script>

<style>
  @import './scss/styles.scss';
</style>
