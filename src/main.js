import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import moment from 'moment'
import crypto from 'crypto'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.prototype.$moment = moment
Vue.prototype.$crypto = crypto
Vue.use(ElementUI);

new Vue({
    render: h => h(App)
}).$mount('#app')