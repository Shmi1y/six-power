// 引入Vue
import Vue from 'vue'
// 引入App.vue
import App from './App.vue'
// 引入路由
import router from './router'
// 引入vue的表单验证插件veeValidate
import './vee-validate'
// 去掉提示
Vue.config.productionTip = false
// 创建并暴露Vue实例对象
/* eslint-disable no-new */
export default new Vue({
  // 容器
  el: '#app',
  // 组件
  components: {
    App
  },
  // 模板
  template: '<App/>',
  // 路由
  router
})
