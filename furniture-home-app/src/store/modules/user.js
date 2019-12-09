// 将state mutations actions getters 模块化
// 引入types
import { RECEIVE_USER, RECEIVE_TOKEN, RESET_USER, RESET_TOKEN } from '../types'
// 引入接口
import { reqAutoLogin } from '../../api'
const state = {
  // 用户信息
  user: {},
  // token信息
  token: localStorage.getItem('token_key'),

}
const mutations = {
  // 修改用户信息
  [RECEIVE_USER] (state, user) {
    state.user = user
  },
  // 修改token信息
  [RECEIVE_TOKEN] (state, token) {
    state.token = token
  },
  // 重置用户信息
  [RESET_USER] (state) {
    state.user = {}
  },
  // 重置token信息
  [RESET_TOKEN] (state) {
    state.token = ''
  }
}
const actions = {
  // 保存用户信息
  saveUser ({ commit }, user) {
    // 从user中取出token
    const token = user.token
    console.log(token)
    // 把token保存到state中
    commit(RECEIVE_TOKEN, token)
    // 把token保存到localStroage中
    localStorage.setItem('token_key', token)
    // 删除user中的token
    delete user.token
    // 保存用户信息到state中
    console.log(user)
    commit(RECEIVE_USER, user)
  },
  // 重置用户信息
  resetUser ({ commit }) {
    // 重置user
    commit(RESET_USER)
    // 重置token
    commit(RESET_TOKEN)
    //删除localStroage
    localStorage.removeItem('token_key')
  },
  // 自动登录操作
  async autoLogin ({ commit, state }) {
    // 判断state中是否有token
    if (state.token) {
      // 如果有,发送自动登录的请求
      const result = await reqAutoLogin()
      // 拿到用户信息
      const user = result.data
      // 更新用户信息
      commit(RECEIVE_USER, user)

    }
  }
}
const getters = {}
// 暴露出去
export default {
  state,
  mutations,
  actions,
  getters
}