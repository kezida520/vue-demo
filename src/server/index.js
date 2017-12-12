import axios from './axios';

/**
 * get公共调用方法
 * @param {any} url
 * @param {any} params
 * @param {any} success
 * @param {any} failure
 */
function apiGet(url, params, success, failure) {
    if(params) params._ = Date.parse(new Date());  //设置请求不缓存
    axios.get(url, { params: params})
    .then(res => {
        if(success) success(res.data);
    }).catch(error => {
        if(failure) failure(error);
    });
}
/**
 * post公共调用方法
 * @param {any} url
 * @param {any} params
 * @param {any} success
 * @param {any} failure
 */
function apiPost(url, param = {}, success, failure) {
    axios.post(url, param)
    .then(res => {
        if(success) success(res.data);
    }).catch(error => {
        if(failure) failure(error);
    });
}

export default function(arg, params, success, failure){
    if(arg.type === "get"){
        apiGet(arg.url, params, success, failure)
    }else{
        apiPost(arg.url, params, success, failure)
    }
};