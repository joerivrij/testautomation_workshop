<template>
  <div class="search-movie">
    <input class="search-movie__input" v-model="inputVal" placeholder="Search for a movie"/>
    <button class="search-movie__button">Search</button>
  </div>
</template>

<script>

export default {
  name: 'search-movie',
  props: ['value'],
  data() {
    return { inputVal: this.value };
  },
  watch: {
    inputVal(val) {
      this.$emit('input', val);
    },
  },
};
</script>

<style lang="scss" scoped>
  .search-movie {
    background-color: rgb(180, 180, 180);
    padding: 0 15px;
    border-radius: 8px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    &__input {
      background-color: rgb(180, 180, 180);
      border: none;
      color: #000;
      width: calc(100% - 50px);
      font-size: 20px;
      outline: none;
    }

    &__button {
      background: url('../../assets/icons/baseline-search-24px.svg') no-repeat center;
      border: none;
      color: #000;
      width: 50px;
      text-indent: -100000px;
      outline: none;
    }
  }
</style>
