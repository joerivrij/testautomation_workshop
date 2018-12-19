import Vue from 'vue';
import Router from 'vue-router';
import Movies from '@/components/movies/Movies';
import Home from '@/components/movies/Home';
import Login from '@/components/users/Login';
import SignUp from '@/components/users/SignUp';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/movies/',
      name: 'All Movies',
      component: Movies,
    },
    {
      path: '/login/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/signup/',
      name: 'SignUp',
      component: SignUp,
    },
  ],
});
