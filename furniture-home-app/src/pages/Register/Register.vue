<template>
  <div class="registerContainer">
    <div class="register_title">
      <span>欢迎来KIWOO!</span>
    </div>
    <div class="register_content">
      <input class="phone" type="text" placeholder="请输入手机号" v-model="phone" name="phone" v-validate="'required|phone'" />
      <span style="color:red" class="errors">{{ errors.first('phone') }}</span>
      <div class="code_info">
        <input class="code" type="text" placeholder="请输入验证码" v-model="code" name="code" v-validate="'required|code'" />
        <button class="get_code">获取验证码</button>
        <span style="color:red" class="errors">{{ errors.first('code') }}</span>
      </div>
      <input
        class="password"
        type="password"
        placeholder="请设置密码(含大小写、数字)"
        v-model="pwd" name="pwd" v-validate="'required|pwd'"
      />
      <span style="color:red" class="errors">{{ errors.first('pwd') }}</span>
      <div class="link">
        <button class="btn" @click="register">注 册</button>
        <a href="javascript:;">已有账号登录</a>
      </div>
    </div>
    <div class="register_footer">
      <p>注册表示同意《xxx用户协议》</p>
    </div>
  </div>
</template>
<script>
import  {reqRegister} from '../../api/index.js'
export default {
  name:'Register',
  data () {
    return {
      phone:'',
      code:'',
      pwd:''
    }
  },
  methods:{
    register(){
      const username = this.phone
      const password = this.pwd
      // eslint-disable-next-line no-console
      console.log(username,password)
      reqRegister (username,password)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
html,body
  width 100%
  height 100%
  verflow hidden
  .registerContainer
    position relative
    width 85%
    height 100%
    margin 0 auto
    .register_title
      height 120px
      line-height 120px
      span
        font-size 24px
        font-weight 600
    .register_content
      margin-top -10px
      .errors
        font-size 16px
        display block
        margin 4px 0
      input
        width 100%
        height 30px
        line-height 30px
        box-sizing border-box
        border-bottom 1px solid #ddd
        border-radius 4px
        outline 0
        font 400 14px Arial
        margin-top 20px
        &.code
          width 70%
      input::-webkit-input-placeholder {
        color: #ccc;
      }
      input::-moz-input-placeholder {
        color: #ccc;
      }
      input::-ms-input-placeholder {
        color: #ccc;
      }
      .code_info
        clearFix()
        .get_code
          margin-top 18px
          border-radius 4px
          line-height 30px
          border 0
          font-size 14px
          background  rgba(0,0,0,.2)
          float right
      .link
        text-align center
        margin-top 30px
        .btn
          display block
          width 100%
          height 42px
          border-radius 4px
          background rgba(0,0,0,.8)
          color #fff
          text-align center
          font-size 16px
          line-height 42px
          border 0
        a
          display block
          font-size 14px
          height 20px
          line-height 20px
          color #000
          margin 10px 0
    .register_footer
      width 100%
      text-align center
      position fixed
      bottom 40px
      left 50%
      transform translateX(-50%)
      p
        font-size 14px
</style>
