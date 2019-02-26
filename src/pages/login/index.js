import Vue from 'vue'
import App from './App.vue'

import './resource/css/base.css'
/*import './resource/sass/base.scss'*/
import 'iview/dist/styles/iview.css'

//import './assets/sass/reset.sass'//报错暂时不用sass

Vue.config.debug = true;//开启错误提示

new Vue({
    el: '#app',
    render: h => h(App)
})
