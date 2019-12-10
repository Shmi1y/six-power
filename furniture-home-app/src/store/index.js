// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入vuex中的四个对象文件
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 引入vuex的模块化模块
import msite from './modules/msite'
import user from './modules/user'
import shop from './modules/shop'
// 声明使用插件Vuex
Vue.use(Vuex)
// 创建实例并暴露
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    msite,
    user,
    shop
  }
})