import Vue from 'vue'
import App from './App.vue'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/rest.css'
import './assets/css/iconfont.css'
import vueAxios from 'vue-axios'
import axios from 'axios'
import store from './store'


Vue.config.productionTip = true
Vue.use(vueAxios, axios)
Vue.use(ElementUI)

new Vue({
    router,
    store,
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.bus = this
    }
}).$mount('#app')