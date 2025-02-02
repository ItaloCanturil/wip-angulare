import Vue from 'vue'
import Vuex from 'vuex'

import posts from './modules/PostsModule'
import users from './modules/UserModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    posts,
    users
  }
})
