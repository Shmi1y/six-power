<template>
  <div class="loginContainer">
    <div class="login_header">
      <p>Hi,xzp</p>
      <span>欢迎回来!</span>
    </div>
    <div class="login_content">
      <div class="login_content_title">
        <div class="left">
          <a href="javascript:;" :class="{on:!loginWay}" @click="loginWay=false">快捷登录</a>
          <div class="active_line" v-show="!loginWay"></div>
        </div>
        <div class="right">
          <a href="javascript:;" :class="{on:loginWay}" @click="loginWay=true">账号登录</a>
          <div class="active_line" v-show="loginWay"></div>
        </div>
      </div>
      <form>
        <div :class="{on:!loginWay}">
          <section class="login_message">
            <input class="phone" type="tel" placeholder="请输入手机号" v-model="phone" name="phone" v-validate="'required|phone'" />
            <span style="color:red" class="errors">{{ errors.first('phone') }}</span>
            <div class="code_info">
              <input class="code" type="text" placeholder="请输入验证码" v-model="code" name="code" v-validate="'required|code'" />
              <button class="get_code">获取验证码</button>
              <span style="color:red" class="errors">{{ errors.first('code') }}</span>
            </div>
            <div class="link">
              <button class="login">登 录</button>
              <a class="left_link" href="javascript:;">切换账号</a>
              <a class="right_link" href="javascript:;">新用户注册</a>
            </div>
          </section>
        </div>
        <div :class="{on:loginWay}">
          <section class="login_message">
            <input class="phone" type="text" placeholder="请输入手机号" v-model="phone" name="phone" v-validate="'required|phone'"/>
             <span style="color:red" class="errors">{{ errors.first('phone') }}</span>
            <div class="code_info">
              <input class="pwd" type="password" placeholder="请输入密码" v-model="pwd" name="pwd" v-validate="'required|pwd'"/>
              <span style="color:red" class="errors">{{ errors.first('pwd') }}</span>
            </div>
            <div class="link">
              <button class="login">登 录</button>
              <a class="left_link" href="javascript:;">切换账号</a>
              <a class="right_link" href="javascript:;">新用户注册</a>
            </div>
          </section>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name:'Login',
  data () {
    return {
      loginWay: false, // 默认手机发送验证码登录
      phone: '',
      pwd:'',
      code:''
    }
  }
  // methods:{
  //   login(){

  //   }
  // }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
html,body
  width 100%
  height 100%
  overflow hidden
  .loginContainer
    position relative
    width 85%
    height 100%
    margin 0 auto
    .login_header
      height 110px
      p
        font-size 16px
        line-height 24px
        padding-top 26px
        font-weight 600
      span 
        display block
        font-size 24px
        line-height 30px
        font-weight 600
    .login_content
      >form
        >div
          display none
          &.on
            display block
      .login_content_title
        width 100%
        height 30px
        line-height 30px
        margin-bottom 20px
        display flex
        .left
          position relative
          margin-right 16px
          position relative
          a
            color #000
            font-size 16px
            &.on
                font-size 18px
                font-weight 700
          .active_line
            position absolute
            bottom 0
            left 50%
            margin-left -10px
            width 20px
            height 2px
            background  #000
        .right
          position relative
          a
            color #000
            font-size 16px
            &.on
                font-size 18px
                font-weight 700
          .active_line
            position absolute
            bottom 0
            left 50%
            margin-left -10px
            width 20px
            height 2px
            background  #000
      .login_message
        width 100%
        .errors
          font-size 16px
          display block
          margin 4px 0
        input
          width 100%
          height 30px
          box-sizing border-box
          border-bottom 1px solid #ddd
          border-radius 4px
          outline 0
          font 400 14px Arial
          line-height 30px
          margin-top 20px
          &.code
            width 70%
          &.pwd
            width 100%
            margin-bottom 4px
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
          clearFix()
          margin-top 30px
          text-align center
          .login
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
            display inline-block
            font-size 14px
            height 20px
            line-height 20px
            color #000
            margin 10px 0
            &.left_link
              float left
            &.right_link
              float right
</style>
