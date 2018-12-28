import { shallowMount } from '@vue/test-utils';
import SearchMovie from '../SearchMovie';
import Vue from 'vue';


describe('Item.vue', () => { // #A
  test('sanity test', () => {
    // const Ctor = Vue.extend(SearchMovie);
    // const vm = new Ctor().$mount();
    // expect(vm.$el.textContent).toContain('Search');
    const wrapper = shallowMount(SearchMovie);
    debugger;
    expect(wrapper.vm.$el.textContent).toContain('Search');
  });
});
