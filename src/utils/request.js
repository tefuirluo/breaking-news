// 基于 axios 封装网络请求的函数
import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { Message } from 'element-ui'

// axios.create() 创建一个带配置项的自定义 axios 函数
// 作用: myAxios 请求的时候, 地址 baseURL+url, 然后去请求后台
const myAxios = axios.create({
  baseURL: 'https://big-event-vue-api-t.itheima.net'
})

// 定义请求拦截器
// * api 每次发起请求调用 request 都会先走这个请求拦截器
myAxios.interceptors.request.use(function (config) {
  // console.log(config)
  // * 在发起时, 统一携带请求头 Authorization 和 token
  // * 判断: 登录页面和注册页面, vuex 中无 token, 两个接口也不需要token => 其他页面需要
  if (store.state.token) {
    config.headers.Authorization = store.state.token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 定义响应拦截器
myAxios.interceptors.response.use(function (response) {
  // 响应状态码是 2** 时触发成功的回调 => response 是 成功的结果
  return response
}, function (error) {
  // 响应状态码不是 2** 时触发成功的回调 => error 是 失败的结果
  // console.dir(error)
  if (error.response.status === 401) {
    // 本次响应 => token 过期
    // 清除 vuex 中的一切, 切换到登录页面 => 被动退出
    store.commit('updateToken', '')
    store.commit('updateUserInfo', {})
    router.push('/login')
    Message.error('用户身份已过期')
  }
  return Promise.reject(error)
})

// 导出 axios 自定义封装函数
export default myAxios
