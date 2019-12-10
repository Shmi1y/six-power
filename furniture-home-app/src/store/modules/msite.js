// 将state mutations actions getters 模块化
// 引入types
import { RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS } from '../types'
// 引入接口
import { reqAddress, reqFoodcategorys, reqShopList } from '../../api'
const state = {
  //经度
  longitude: '116.36868',
  // 纬度
  latitude: '40.100395',
  // 地址信息
  address: {},
  // 分类信息
  categorys: [],
  // 商铺信息
  shops: []
}
const mutations = {
  // 修改地址信息
  [RECEIVE_ADDRESS] (state, address) {
    state.address = address
  },
  // 修改分类信息
  [RECEIVE_CATEGORYS] (state, categorys) {
    state.categorys = categorys
  },
  // 修改商铺信息
  [RECEIVE_SHOPS] (state, shops) {
    state.shops = shops
  },
}
const actions = {
  // 获取地址信息
  async getAddress ({ state, commit }) {
    const { longitude, latitude } = state
    const result = await reqAddress(longitude, latitude)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, address)
    }
  },
  // 获取分类信息
  async getCategorys ({ commit }) {
    const result = await reqFoodcategorys()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, categorys)
    }
  },
  // 获取商铺信息
  async getShops ({ state, commit }) {
    const { longitude, latitude } = state
    const result = await reqShopList(longitude, latitude)
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
  },
}
const getters = {}
// 暴露出去
export default {
  state,
  mutations,
  actions,
  getters
}