import Vue from 'vue'
import App from './App.vue'

// 导入vuex
import store from './store'

// 导入vueRouter
import router from './router'

// 引入Element Ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 存储Cookies
import Cookies from 'js-cookie'

// a modern alternative to CSS resets you know
import 'normalize.css/normalize.css'

// global css 全域样式
import '@/styles/index.scss'

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
  // locale: enLang // 如果使用中文，无需设置，请删除
})
Vue.config.productionTip = false

new Vue({
  router,
  // vuex存入了全局数据名称
  store,
  render: h => h(App)
}).$mount('#app')
