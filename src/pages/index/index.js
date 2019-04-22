import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import NProgress from 'nprogress'

import { get, post } from '../../common/utils/request'

import './resource/css/base.css'
/*import './resource/sass/base.scss'*/
import 'iview/dist/styles/iview.css'
import 'nprogress/nprogress.css'

require('../../common/utils/apis/construct.js')

Vue.config.debug = true; //开启错误提示
Vue.config.devtools = true; //开启devtools扩展

Vue.prototype = Object.assign(Vue.prototype, {
    get: get,
    post: post
})

router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
})

router.afterEach((to, from, next) => {
    NProgress.done();
})

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
