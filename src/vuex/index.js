import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

Vue.use(Vuex);

let store = new Vuex.Store({
    strict: true, //严格模式
    state,
    mutations,
    getters,
    actions,
})

export default store;