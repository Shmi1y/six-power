import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
// import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate);

// 使用中文提示
Validator.localize('zh_CN', {
  // messages: zh_CN.messages,
  messages: {
    required: (field) => "请输入" + field
  },
  attributes: {
    phone: '手机号码',
    code: '短信验证码',
    // name: '手机/邮箱/用户名',
    pwd: '密码',
    // captcha: '图形验证码'
  }
});
Validator.extend('phone', {
  // 这里的参数field传入的也就是phone--'手机号码'
  getMessage: field => `请输入正确的` + field,
  validate: value => {
    // const reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
    return /^[1]\d{10}$/.test(value)
  }
})
Validator.extend('code', {
  // 这里的参数field传入的也就是phone--'手机号码'
  getMessage: field => `请输入正确的` + field,
  validate: value => {
    // const reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
    return /^\d{6}$/.test(value)
  }
})
// Validator.extend('name', {
//   // 这里的参数field传入的也就是phone--'手机号码'
//   getMessage: field => `请输入正确的` + field,
//   validate: value => {
//     // const reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
//     return /^[a-zA-Z0-9_-]{4,16}$/.test(value)
//   }
// })
Validator.extend('pwd', {
  // 这里的参数field传入的也就是phone--'手机号码'
  getMessage: field => `请输入正确的` + field,
  validate: value => {
    // const reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
    return /^[a-zA-Z0-9_-]{4,16}$/.test(value)
  }
})
// Validator.extend('captcha', {
//   // 这里的参数field传入的也就是phone--'手机号码'
//   getMessage: field => `请输入正确的` + field,
//   validate: value => {
//     // const reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
//     return /^[a-zA-Z0-9]{4}$/.test(value)
//   }
// })



