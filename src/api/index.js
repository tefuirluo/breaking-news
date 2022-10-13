// 封装的是具体的接口请求方法
// ! 注意: 每个方法只负责请求一个 url 地址
// 引入 自定义 axios 函数
import request from '@/utils/request'

// 导出接口方法, 为了在逻辑页面引入后调用
export const registerAPI = () => {
  // 原地包含了一个 Promise 对象, 内部包含原生的 ajax 请求
  // return 这个 Promise 对象到逻辑页面, 去那边对 Promise 对象提取结果
  return request({
    url: '/api/reg',
    method: 'POST',
    data: {
      username: 'tefuirluo',
      password: 'qwe123',
      repassword: 'qwe123'
    }
  })
}
