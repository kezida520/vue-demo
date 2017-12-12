import axios from 'axios'; //CDN需注释
import {SERVER_URL} from './api';

axios.defaults.baseURL = SERVER_URL; // 设置默认服务地址

// http请求拦截器 var loadinginstace;
axios.interceptors.request.use(config => {
    // let token = "ad165bd4f62a1f3a1dd65fee6f4a3d1f23ad1fa31f";
    // 判断是否存在token，如果存在的话，则每个http header都加上toke
    // if(token) config.headers.Authorization = token;
    return config;
}, error => {
    return Promise.reject(error);
});

// http响应拦截器
axios.interceptors.response.use(res => { 
    return res;
}, error => {
        
});

export default axios;