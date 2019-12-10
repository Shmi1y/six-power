// 引入ajax
import ajax from './ajax.js'
// 设置基本路劲地址
const baseUrl = '/api'
// // 手机号验证码登陆
// export const reqSmsLogin = (phone, code) => ajax({
//   method: 'POST',
//   url: baseUrl + '/login_sms',
//   data: {
//     phone,
//     code
//   }
// })
// 用户名注册
export const reqRegister = (username, password) => ajax.post(baseUrl + `/register?username=${username}&password=${password}`)
// 发送短信验证码
export const reqCode = (phone) => ajax.get(baseUrl + `/sendcode?phone=${phone}`)
// 登录
// 发送短信验证码
export const reqLogin = (username, password) => ajax.get(baseUrl + `/login?username=${username}&password=${password}`)
// export const reqRegister = (username, password) => ajax({
//   method: 'POST',
//   url: baseUrl + '/register',
//   data: {
//     username,
//     password
//   }
// })
// // 用户名密码登陆
// export const reqPwdLogin = (name, pwd, captcha) => ajax({
//   method: 'POST',
//   url: baseUrl + '/login_pwd',
//   data: {
//     name,
//     pwd,
//     captcha
//   }
// })
// 自动登录
export const reqAutoLogin = () => ajax({
  method: 'GET',
  url: baseUrl + '/auto_login',
  // 用来标识是否需要携带token，自动登录需要携带
  headers: {
    needToken: true
  }
})
