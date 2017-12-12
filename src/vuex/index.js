import Vue from 'vue'; //CDN需注释
import Vuex from 'vuex'; //CDN需注释

import state from './state';
import mutations from './mutations';
import getters from './getters';
import actions from './actions';

Vue.use(Vuex); //CDN需注释

let store = new Vuex.Store({
    strict: true, //严格模式
    state,
    mutations,
    getters,
    actions,
})

export default store;