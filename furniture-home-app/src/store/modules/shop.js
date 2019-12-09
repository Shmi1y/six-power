// 将state mutations actions getters 模块化
// 引入types
import { RECEIVE_GOODS, RECEIVE_RATINGS, RECEIVE_INFO, ADD_FOOD_COUNT, REDUCE_FOOD_COUNT, CLEAR_CART } from '../types'
// 引入接口
import { reqGoods, reqRatings, reqInfo } from '../../api'
// 引入Vue
import Vue from 'vue'
const state = {
  // 点餐
  goods: [],
  // 评价
  ratings: [],
  // 商家
  info: {},
  // 购物车里面的食物信息
  cartFoods: []
}
const mutations = {
  // 修改点餐
  [RECEIVE_GOODS] (state, { goods }) {
    state.goods = goods
  },
  // 修改评价
  [RECEIVE_RATINGS] (state, { ratings }) {
    state.ratings = ratings
  },
  // 修改商家
  [RECEIVE_INFO] (state, { info }) {
    state.info = info
  },
  // 增加食物
  [ADD_FOOD_COUNT] (state, { food }) {
    // 判断是否有food.count
    if (!food.count) {
      // 没有就给food对象添加一个count属性，并赋值
      // 此处有bug，food是一个响应式对象，下面这种直接添加的count属性并不是响应式属性，不能直接响应界面，有问题
      // food.count = 1
      // Vue.set( target, propertyName/index, value )需要这样向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新
      Vue.set(food, 'count', 1)
      // 当有了count的时候就可以把food对象信息放到cartFoods数组中
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },
  // 减少食物
  [REDUCE_FOOD_COUNT] (state, { food }) {
    if (food.count > 0) {
      food.count--
      // 当food.count为0时，需要删除当前的食物对象
      if (food.count === 0) {
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART] (state) {
    // 将所有的food的count变成0
    state.cartFoods.forEach(food => food.count = 0)
    // 将购物车食物信息数组重置为空
    state.cartFoods = []
  }
}
const actions = {
  // 获取点餐信息
  async getGoods ({ commit }, callback) {
    const result = await reqGoods()
    if (result.code === 0) {
      const goods = result.data
      console.log(goods)
      commit(RECEIVE_GOODS, { goods })
      typeof callback === "function" && callback()
    }
  },
  // 获取评价信息
  async getRatings ({ commit }) {
    const result = await reqRatings()
    if (result.code === 0) {
      const ratings = result.data
      console.log(ratings)
      commit(RECEIVE_RATINGS, { ratings })
    }
  },
  // 获取商家信息
  async getInfo ({ commit }) {
    const result = await reqInfo()
    if (result.code === 0) {
      const info = result.data
      console.log(info)
      commit(RECEIVE_INFO, { info })
    }
  },
  // 操作食物数的加和减
  detailCount ({ commit }, { isAdd, food }) {
    // 判断是加还是减食物的数量
    if (isAdd) {
      // 加的操作
      commit(ADD_FOOD_COUNT, { food })
    } else {
      // 减的操作
      commit(REDUCE_FOOD_COUNT, { food })
    }
  },
  // 清空购物车
  clearCart ({ commit }) {
    commit(CLEAR_CART)
  }
}
const getters = {
  // 计算食物的总数量
  totalFoodCount (state) {
    return state.cartFoods.reduce((prev, curr) => prev + curr.count, 0)
  },
  // 计算食物的总价格
  totalPrice (state) {
    return state.cartFoods.reduce((prev, curr) => prev + curr.count * curr.price, 0)
  },
  // 总的评价数
  totalRatingCount (state) {
    return state.ratings.length
  },
  // 总的推荐评价数
  totalRcommendRatingCount (state) {
    return state.ratings.filter(rating => rating.rateType === 0).length
  }
}
// 暴露出去
export default {
  state,
  mutations,
  actions,
  getters
}