import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { getUserInfoAPI } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 保存 token 字符串
    token: '',
    // 保存用户信息 { id, username, nickname, email, user_pic }
    userInfo: {}
  },
  getters: {
    username: state => state.userInfo.username, //  用户名
    nickname: state => state.userInfo.nickname, //  用户昵称
    user_pic: state => state.userInfo.user_pic // 用户头像
  },
  mutations: {
    // 保存 token
    updateToken (state, val) {
      state.token = val
    },
    // 保存用户信息
    updateUserInfo (state, val) {
      state.userInfo = val
    }
  },
  actions: {
    // 请求 => 用户信息
    async getUserInfoActions (store) {
      const res = await getUserInfoAPI()
      store.commit('updateUserInfo', res.data.data)
    }
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
