import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    proxyUrl: 'http://localhost:8080',
    loginUrl: 'http://localhost:8080/v1/proxy/tokens/',
    signUpUrl: 'http://localhost:8080/v1/proxy/users/',
    moviesUrl: '/v1/proxy/movies/',
    loggedIn: false,
    currentMovie: {},
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token;
    },
    setCurrentMovie: (state, movie) => {
      state.currentMovie = movie;
    },
  },
  actions: {
    logOut: ({ state }) => {
      state.token = '';
      return true;
    },
    loginWithCredentials: ({ commit, state }, credentials) => {
      const config = {
        responseType: 'json',
        withCredentials: true,
      };
      const cred = {
        username: credentials.username,
        password: credentials.password,
        id: 1,
      };
      axios.post(state.loginUrl, cred, config)
        .then((res) => {
          const token = res.data.access_token;
          commit('setToken', token);
          return true;
        })
        .catch((error) => {
          console.error(error);
          return false;
        });
    },
    getMovie: ({ commit, state }, imdbId) => {
      const axiosInstance = axios.create({
        baseURL: state.proxyUrl,
        timeout: 5000,
        headers: {
          Authorization: `Bearer ${state.token}`,
          'Content-Type': 'application/json',
        },
      });

      axiosInstance.get(`${state.moviesUrl + imdbId}`)
        .then((res) => {
          commit('setCurrentMovie', res.data);
          return true;
        })
        .catch((error) => {
          console.error(error);
          return false;
        });
    },
  },
  getters: {
    token: state => state.token,
    loggedIn: state => !!state.token,
    currentMovie: state => state.currentMovie,
  },
});
