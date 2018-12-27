import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    userId: null,
    userName: null,
    proxyUrl: 'http://localhost:8080',
    loginUrl: 'http://localhost:8080/v1/proxy/tokens/',
    signUpUrl: 'http://localhost:8080/v1/proxy/users/',
    moviesUrl: '/v1/proxy/movies/',
    loggedIn: false,
    loginExpires: null,
    currentMovie: {},
    movies: [],
    searchedMovies: [],
  },
  mutations: {
    setToken: (state, auth) => {
      state.token = auth.token;
      state.loggedIn = !!auth.token;
      state.userId = auth.userId;
      state.userName = auth.userName;
      state.loginExpires = auth.loginExpires;
    },
    setCurrentMovie: (state, movie) => {
      state.currentMovie = movie;
    },
    setMovies: (state, movies) => {
      state.movies = movies;
    },
    setSearchedMovies: (state, searchedMovies) => {
      state.searchedMovies = searchedMovies;
    },
  },
  actions: {
    logOut: ({ state }) => {
      state.token = null;
      state.loggedIn = !!state.token;
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
      return axios.post(state.loginUrl, cred, config)
        .then((res) => {
          const token = res.data.access_token;
          const expirationDate = new Date(Date.now() + (res.data.expires_in * 1000));
          commit('setToken', {
            token,
            userId: cred.id,
            userName: cred.username,
            loginExpires: expirationDate,
          });
          localStorage.setItem('token', JSON.stringify(token));
          localStorage.setItem('userId', JSON.stringify(cred.id));
          localStorage.setItem('userName', JSON.stringify(cred.username));
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
      const loginExpires = JSON.parse(localStorage.getItem('expirationDate'));
      const now = new Date();
      if (now >= loginExpires) {
        return false;
      }
      const userId = JSON.parse(localStorage.getItem('userId'));
      const userName = JSON.parse(localStorage.getItem('userName'));
      commit('setToken', { token, userId });
      commit('setToken', {
        token,
        userId,
        userName,
        loginExpires,
      });
      return true;
    },
    getMovies: ({ commit, state }) => {
      const axiosInstance = axios.create({
        baseURL: state.proxyUrl,
        timeout: 5000,
        headers: {
          Authorization: `Bearer ${state.token}`,
          'Content-Type': 'application/json',
        },
      });
      axiosInstance.get(`${state.moviesUrl}`)
        .then((res) => {
          commit('setMovies', res.data);
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
    searchMovie: ({ commit, state }, searchValue) => {
      const axiosInstance = axios.create({
        baseURL: state.proxyUrl,
        timeout: 5000,
        headers: {
          Authorization: `Bearer ${state.token}`,
          'Content-Type': 'application/json',
        },
        params: { query: searchValue },
      });
      axiosInstance.get(`${state.moviesUrl}searches`)
        .then((res) => {
          commit('setSearchedMovies', res.data);
          return true;
        })
        .catch((error) => {
          commit('setSearchedMovies', []);
          if (error.response.status !== 404) {
            console.error(error);
          }
          return false;
        });
    },
  },
  getters: {
    token: state => state.token,
    loggedIn: state => state.loggedIn,
    currentMovie: state => state.currentMovie,
    /* eslint-disable */
    currentUser: (state) => {
      return {
        id: state.userId,
        name: state.userName,
        isLoggedIn: state.loggedIn,
        sessionExpires: state.loginExpires,
      };
    },
    getMovies: (state) => {
      return state.movies;
    },
    getSearchedMovies: (state) => {
      return state.searchedMovies;
    }
    /* eslint-enable */
  },
});
