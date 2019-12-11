// 引入axios
import axios from 'axios'
// 引入qs,将对象类型数据转换成urlEncoding类型数据
import qs from 'qs'
// 引入store
import store from '../store'
// 引入router
import router from '../router'
// 引入mint-ui组件中的Toast
import { Toast } from 'mint-ui'
// 添加请求拦截器
axios.interceptors.request.use(config => {
  // eslint-disable-next-line no-console
  console.log(config)
  // 从config中解构出请求方式和数据
  const { method, data } = config
  // 只有请求方式是POST请求才会去转换数据类型为urlEncoding并且数据是对象类型
  if (method.toUpperCase() === 'POST' && data instanceof Object) {
    // 把转换后的数据重新赋值给到data
    config.data = qs.stringify(data)
    // eslint-disable-next-line no-console
    console.log(config.data)
  }
  //判断当前接口是否需要携带token
  if (config.headers.needToken) {
    // 如果需要，从state中取出token
    console.log(store.state)
    const token  = store.state.user.token
    console.log(token)
    // 然后判断是否有token
    if (token) {
      // 如果有token，将token添加到请求头的authorization
      config.headers.authorization = token
    } else {
      // 如果没有token,创建一个错误实例传入错误提示信息
      const error = new Error('没有token，请重新登录')
      // 给错误实例添加错误状态码
      error.status = 401
      // 抛出错误异常 
      throw error
    }
  }
  return config
})
// 添加响应拦截器
axios.interceptors.response.use(response => {
  // eslint-disable-next-line no-console
  console.log(response.data)
  return response.data
}, error => {
  // 请求错误
  if (!error.response) {
    // 请求的错误是没有token
    if (error.status === 401) {
      // console.log(router.currentRoute.path)
      // 判断当前路径是不是login，如果不是则跳转到login
      if (router.currentRoute.path !== '/login') {
        // 提醒错误信息
        Toast(error.message)
        // 跳转到login
        router.replace('/login')
      }
    }
  } 
    // 响应的时候token过期了，或者没有资源就会报错
    // const  status  = error.response.status
    // if (status === 401) {
    //   // token过期了，提示过期信息，然后重置用户信息
    //   // console.log(111111)
    //   // console.log('响应的时候出了问题')
    //   Toast(error.response.data.message)
    //   // 重置用户信息
    //   store.dispatch('resetUser')
      // 需要重新登录，跳转至登录界面
      // router.replace('/login')
  //    else if (status === 404) {
  //     Toast('没有资源')
  //   } else {
  //     Toast('请求错误', error.message)
  //   }
  // }
  // alert(error.message)
  // 返回一个promise对象用来中断错误消息
  return new Promise(() => { })
})
// 暴露axios
export default axios
