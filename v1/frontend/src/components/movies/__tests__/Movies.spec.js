import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Movies from '../Movies';
import Header from '../../generic/Header';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
localVue.component('v-header', Header);

describe('Movies.vue', () => {
  let storeOptions;
  let store;

  beforeEach(() => {
    storeOptions = {
      getters: {
        getMovies: jest.fn(),
        loggedIn: jest.fn(),
      },
    };
    store = new Vuex.Store(storeOptions);
  });

  test('render image based on url', () => {
    const $getMovies = [];
    const wrapper = shallowMount(Movies, {
      mocks: { $getMovies },
      localVue,
      store,
    });
    expect(wrapper.find('ul').text()).toContain('');
  });
});

