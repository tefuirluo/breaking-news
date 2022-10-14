import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout')
    // 默认打开直接看到布局页面
  },
  {
    path: '/reg',
    component: () => import('@/views/register')
    // webpack 提供 import 函数来路由懒加载导入组件
    // 路由懒加载: 页面路径切换到 /reg, 才去加载对应代码
    // 好处: 让首页加载的文件体积更小, 打开速度更快
  },
  {
    path: '/login',
    component: () => import('@/views/login')
  }
]

const router = new VueRouter({
  routes
})

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
  const token = store.state.token
  if (token) {
    store.dispatch('getUserInfoActions')
  }
  next()
})

export default router

// 退出登录, 重新登录, 只走相关代码 => 异步 DOM 切换, 不会导致所有代码重新执行
// 效果不对 => 更换账号需要重新请求用户数据
// 解决:
// 1. 可以在登录页面, 登录成功后, 再发请求拿到用户数据
// 2. 可以在全局前置路由守卫中, 写 => 路由跳转的时候, 判断
