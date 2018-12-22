import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    userId: null,
    proxyUrl: 'http://localhost:8080',
    loginUrl: 'http://localhost:8080/v1/proxy/tokens/',
    signUpUrl: 'http://localhost:8080/v1/proxy/users/',
    moviesUrl: '/v1/proxy/movies/',
    loggedIn: false,
    loginExpires: null,
    currentMovie: {},
  },
  mutations: {
    setToken: (state, auth) => {
      state.token = auth.token;
      state.userId = auth.userId;
    },
    setCurrentMovie: (state, movie) => {
      state.currentMovie = movie;
    },
  },
  actions: {
    logOut: ({ state }) => {
      state.token = '';
      localStorage.setItem('token', null);
      localStorage.setItem('userId', null);
      localStorage.setItem('expirationDate', null);
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
          const expirationDate = new Date(Date.now() + (res.data.expires_in * 1000));
          commit('setToken', { token, userId: cred.id });
          localStorage.setItem('token', JSON.stringify(token));
          localStorage.setItem('userId', JSON.stringify(cred.id));
          localStorage.setItem('expirationDate', JSON.stringify(expirationDate));
          return true;
        })
        .catch((error) => {
          console.error(error);
          return false;
        });
    },
    tryAutoLogin({ commit }) {
      const token = JSON.parse(localStorage.getItem('token'));
      if (!token) {
        return false;
      }
      const expirationDate = JSON.parse(localStorage.getItem('expirationDate'));
      const now = new Date();
      if (now >= expirationDate) {
        return false;
      }
      const userId = JSON.parse(localStorage.getItem('userId'));
      commit('setToken', { token, userId });
      console.info('Joepie auto ingelogd!');
      return true;
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
