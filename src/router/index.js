
import Vue from 'vue';  //CDN需注释
import Router from "vue-router"; //CDN需注释

import routes from './routes';

Vue.use(Router); //CDN需注释

// export default new VueRouter({routes}); //CDN不需要注释
export default new Router({routes}); //CDN需注释
