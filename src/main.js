
import Vue from 'vue'; //CDN 需注释
import router from './router';
import store from './vuex';
import axios from './server';
import {api} from './server/api';


// Vue.config.productionTip = false
// Vue.config.silent = false
Vue.prototype.$ajax = axios;
Vue.prototype.$api = api;

new Vue({
    el: '#app',
    router,
    store,
})
