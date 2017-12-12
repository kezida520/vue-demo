
import Vue from 'vue';
import router from './router';
import store from './vuex';
import axios from './server';

// Vue.config.productionTip = false
// Vue.config.silent = false
Vue.prototype.$axios = axios;
Vue.prototype.$api = axios;

new Vue({
    el: '#app',
    router,
    store,
})
