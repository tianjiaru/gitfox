import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import api from './api/article' // 导入api接口

Vue.prototype.$axios = axios 
Vue.prototype.$api = api; // 将api挂载到vue的原型上


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
