// 封装的是具体的接口请求方法
// ! 注意: 每个方法只负责请求一个 url 地址
// 引入 自定义 axios 函数
import request from '@/utils/request'

/**
 * 注册接口
 * @param username  用户名
 * @param password  密码
 * @param repassword  再次确认密码
 * @returns {Promise 对象}
 */
export const registerAPI = ({ username, password, repassword }) => {
  return request({
    url: '/api/reg',
    method: 'POST',
    data: {
      username,
      password,
      repassword
    }
  })
}

/**
 * 登录接口
 * @param username  用户名
 * @param password  密码
 * @returns {Promise 对象}
 */
export const loginAPI = ({ username, password }) => {
  return request({
    url: '/api/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}

/**
 * 获取用户信息
 * @returns { Promise 对象 }
 */
export const getUserInfoAPI = () => {
  return request({
    url: '/my/userinfo',
    method: 'GET'
  })
}

/**
 * 获取侧边栏数据
 * @returns {Promise 对象}
 */
export const getMenusListAPI = () => {
  return request({
    url: '/my/menus'
  })
}
