import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    params: {
      location: 'page',
      site: 'vc',
    },
  },
  mutations: {
    setData(state, {
      percent = 0,
    }) {
      state.percent = percent;
    },
    setParams(state, { location, site }) {
      state.params.location = location;
      state.params.site = site;
    },
  },
  actions: {
  },
  modules: {},
});
