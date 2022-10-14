// 封装的是具体的接口请求方法
// ! 注意: 每个方法只负责请求一个 url 地址
// 引入 自定义 axios 函数
import request from '@/utils/request'

// 导出接口方法, 为了在逻辑页面引入后调用
// 函数形参的对象解构赋值
/*
  registerAPI(this.form)
  等价于
  registerAPI({
    username: username,
    password: password,
    repassword: repassword
  })
  形参 obj 的值
  obj = { username: '', password: '', repassword: ''}
  解构赋值语法:
  { username: username变量名, password: password变量名, repassword: repassword变量名 } = { username: '', password: '', repassword: '' }
  函数形参的 obj 更改为对象解构接收穿的数据对象
  { username: username, password: password, repassword: repassword }
  ES6 对象简写形式
  { username, password, repassword }
*/

export const registerAPI = ({ username, password, repassword }) => {
  // 原地包含了一个 Promise 对象, 内部包含原生的 ajax 请求
  // return 这个 Promise 对象到逻辑页面, 去那边对 Promise 对象提取结果
  return request({
    url: '/api/reg',
    method: 'POST',
    // axios 传参 params data 区别
    // params 的对象参数名和值, axios 源码会把参数和值, 拼接在 url? 后面给后台 ( query 查询字符串)
    // data 的对象参数名和值, axios 源码会把参数和值, 拼接在请求体里 ( body 参数)
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
 * @returns {*} Promise 对象
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
