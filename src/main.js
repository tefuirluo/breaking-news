import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/global.less'
// 让 ElementUI 注册的代码参与打包, 才能在页面上运行并注册组件
import '@/ElementUI/index'
import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import dayjs from 'dayjs'
// * 基于 dayjs 封装一个全局函数来格式化事件 => 任意的组件可以直接使用 $formatDate
Vue.prototype.$formatDate = (dateObj) => {
  // * 借助 dayjs 内置的方法把日期对象格式化成指定的格式, 并把格式化好的字符串返回到调用处
  return dayjs(dateObj).format('YYYY-MM-DD HH-mm-ss')
}

// 此方法内会用 Vue.component 注册 quillEditor 名字全局组件
Vue.use(VueQuillEditor /* { default global options } */)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
