// 基于 axios 封装网络请求的函数
import axios from 'axios'
import store from '@/store'

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
// 导出 axios 自定义封装函数
export default myAxios
