import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authorization: false,
  },
  mutations: {
    signin: (state) => {
      state.authorization = true;
    },
  },
  actions: {
    signin: function({commit}) {
      commit("signin");
    }
  },
});
