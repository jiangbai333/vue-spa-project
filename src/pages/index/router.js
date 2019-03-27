import Vue from 'vue';
import iView from 'iview';
import Router from 'vue-router';
import index from './view/index.vue'
import about from './view/about.vue'

Vue.use(Router)
Vue.use(iView)

export default new Router({
    routes:[
        {
            path:'/',
            component:index
        },
        {
            path:'/about',
            component:about
        }
    ]
})
