<template>
  <div class="loginContainer">
    <div class="login_header">
      <p>Hi,xzp</p>
      <span>欢迎回来!</span>
    </div>
    <div class="login_content">
      <div class="login_content_title">
        <div class="left">
          <a href="javascript:;">快捷登录</a>
          <div class="active_line"></div>
        </div>
        <div class="right">
          <a href="javascript:;">账号登录</a>
          <div class="active_line"></div>
        </div>
      </div>
      <form>
        <input class="phone" type="text" placeholder="请输入手机号" />
        <div class="code_info">
          <input class="code" type="text" placeholder="请输入验证码" />
          <button class="get_code">获取验证码</button>
        </div>
        <div class="link">
          <button class="btn">登录</button>
          <a  class="left_link" href="javascript:;">切换账号</a>
          <a class="right_link" href="javascript:;">新用户注册</a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {}
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
    margin 20px auto
    .login_header
      margin 30px 0
      p
        font-size 14px
        margin 10px 0
      span
        font-size 24px
    .login_content
      width 100%
      .login_content_title
        width 100%
        height 30px
        line-height 30px
        margin-bottom 20px
        display flex
        .left
          position relative
          margin-right 16px
          a
            font-size 16px
          .active_line
            position absolute
            bottom 0
            left 50%
            margin-left -10px
            width 20px
            height 2px
            background  #000
      input
        width 100%
        height 30px
        box-sizing border-box
        border-bottom 1px solid #ddd
        border-radius 4px
        outline 0
        font 400 14px Arial
        margin-bottom 20px
        &.code
          width 70%
      .code_info
        clearFix()
        .get_code
          border-radius 4px
          line-height 30px
          border 0
          font-size 14px
          background  rgba(0,0,0,.2)
          float right
      .link
        clearFix()
        text-align center
        .btn
          display block
          width 100%
          height 42px
          border-radius 4px
          background #4cd96f
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
