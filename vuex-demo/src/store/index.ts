import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theValue: ""
  },
  mutations: {
    updateValue(state, payload) {
      state.theValue = payload;
    }
  },
  actions: {},
  modules: {}
});
