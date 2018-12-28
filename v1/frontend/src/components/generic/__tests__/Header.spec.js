import Header from '../Header';
import Vue from 'vue';

// const Ctor = Vue.extend(Header);
// const vm = new Ctor().$mount();

describe('Item.vue', () => { // #A
  test('sanity test', () => {
    // console.log(Header);
    expect(true).toBe(true);
    // expect(vm.$el.textContent).toContain('Search');
  });
});
