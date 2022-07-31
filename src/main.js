import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Repository from '@/plugins/Repository'

Vue.config.productionTip = false

Vue.use(Repository)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
