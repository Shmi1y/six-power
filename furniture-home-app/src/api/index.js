// 引入ajax
import ajax from './ajax.js'
// 设置基本路劲地址
const baseUrl = '/api'
// 根据经纬度获取位置详情
export const reqAddress = (longitude, latitude) => ajax.get(baseUrl + `/position/${latitude},${longitude}`)
// 获取食品分类列表
export const reqFoodcategorys = () => ajax.get(baseUrl + `index_category`)
// 根据经纬度获取商铺列表
export const reqShopList = (longitude, latitude) => ajax.get(baseUrl + `/shops?latitude=${latitude}&longitude=${longitude}`)
// 发送短信验证码
export const reqSMsCode = (phone) => ajax.get(baseUrl + `/sendcode?phone=${phone}`)
// 手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax({
  method: 'POST',
  url: baseUrl + '/login_sms',
  data: {
    phone,
    code
  }
})
// 用户名注册
export const reqRegister = (username, password) => ajax.post(baseUrl + `/register?username=${username}&password=${password}`)
// export const reqRegister = (username, password) => ajax({
//   method: 'POST',
//   url: baseUrl + '/register',
//   data: {
//     username,
//     password
//   }
// })
// 用户名密码登陆
export const reqPwdLogin = (name, pwd, captcha) => ajax({
  method: 'POST',
  url: baseUrl + '/login_pwd',
  data: {
    name,
    pwd,
    captcha
  }
})
// 自动登录
export const reqAutoLogin = () => ajax({
  method: 'GET',
  url: baseUrl + '/auto_login',
  // 用来标识是否需要携带token，自动登录需要携带
  headers: {
    needToken: true
  }
})
// 菜品信息
export const reqGoods = () => ajax('/goods')
// 评价信息
export const reqRatings = () => ajax('/ratings')
// 商家信息
export const reqInfo = () => ajax('/info')