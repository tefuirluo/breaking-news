import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 保存 token 字符串
    token: ''
  },
  getters: {
  },
  mutations: {
    // 保存 token
    updateToken (state, val) {
      state.token = val
    }
  },
  actions: {
  },
  modules: {
  }
})
