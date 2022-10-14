import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
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
  },
  plugins: [
    // 注入持久化插件
    createPersistedState()
  ]
})

// * vuex 默认保存在内存中, 刷洗之后所有的值会回归初始化, 无法做到持久化存储
// 借助 yarn add vuex-persistedstate@3.2.1 这个包可以使 vuex 做到持久化存储
