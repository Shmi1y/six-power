// 引入ajax
import ajax from './ajax.js'
// 设置基本路劲地址
const baseUrl = '/api'

// 用户名注册
export const reqRegister = (username, password) => ajax.post(baseUrl + `/register?username=${username}&password=${password}`)
// 发送短信验证码
export const reqCode = (phone) => ajax.get(baseUrl + `/sendcode?phone=${phone}`)
// 登录
// 发送短信验证码
export const reqLogin = (username, password) => ajax.get(baseUrl + `/login?username=${username}&password=${password}`)

// 自动登录
export const reqAutoLogin = () => ajax({
  method: 'GET',
  url: baseUrl + '/auto_login',
  // 用来标识是否需要携带token，自动登录需要携带
  headers: {
    needToken: true
  }
})
