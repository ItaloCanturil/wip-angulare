import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Repository from '@/plugins/Repository'
import VueTheMask from 'vue-the-mask'

import '@/assets/styles/app.css'

Vue.config.productionTip = false

Vue.use(Repository)
Vue.use(VueTheMask)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
