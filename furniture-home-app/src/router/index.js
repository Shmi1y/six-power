// 引入Vue
import Vue from 'vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入routes
import routes from './routes.js'
// 声明使用VueRouter
Vue.use(VueRouter)
// 创建并暴露VueRouter实例对象
export default new VueRouter({
  mode: 'history',
  routes
})
