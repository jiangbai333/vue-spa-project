import axios from 'axios'
import NProgress from 'nprogress'
import { Notice } from 'iview';

//axios.defaults.baseURL = 'https://easy-mock.com/mock/5c6f9af5b6ec1368e53308f8/example/restful';
//axios.defaults.baseURL = 'http://192.168.1.126:8081/development/api';
//axios.defaults.baseURL = 'http://192.168.1.126:8080/';
axios.defaults.withCredentials = true;


axios.interceptors.request.use((config) => {
    NProgress.start();
    return config;
}, (error) => {
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    console.log(response)
    NProgress.done();
    return response;
}, (error) => {
    NProgress.done();
    Notice.error({ title: '请求超时', desc: '错误信息错误信息错误信息错误信息错误信息错误信息错误信息错误信息错误信息' })
    return Promise.reject(error);
});

export const post = (url, params) => {
    return axios({
        method: 'post',
        url: url,
        data: param,
        transformRequest: [function (data) {
            /*let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret*/
            return data
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export const get = (url, params) => {
    return axios({
        method: 'get',
        url: url
    })
}
