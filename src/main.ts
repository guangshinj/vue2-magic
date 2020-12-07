import Vue from 'vue'

import App from './App.vue'
import { router } from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

const vue = new Vue({
  router,
  store,
  render: h => h(App)
})
console.info('vue实例：', vue)
vue.$mount('#app')
