import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
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

export default router
