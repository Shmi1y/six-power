<template>
  <div class="registerContainer">
    <div class="register_title">
      <span>欢迎来KIWOO!</span>
    </div>
    <div class="register_content">
      <input class="phone" type="text" placeholder="12311111111" />
      <div class="code_info">
        <input class="code" type="text" placeholder="请输入验证码" />
        <button class="get_code">获取验证码</button>
      </div>
      <input
        class="password"
        type="password"
        placeholder="请设置密码(含大小写、数字)"
      />
      <div class="link">
        <button class="btn">注册</button>
        <a href="javascript:;">已有账号登录</a>
      </div>
    </div>
    <div class="register_footer">
      <p>注册表示同意《xxx用户协议》</p>
    </div>
  </div>
</template>
<script>
export default {}
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
    margin 40px auto
    .register_title
      margin 40px 0
      span
        font-size 24px
    .register_content
      input
        width 100%
        height 30px
        padding-left 10px
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
          display block
          font-size 14px
          height 20px
          line-height 20px
          color #000
          margin 10px 0
    .register_footer
      text-align center
      position fixed
      bottom 100px
      left 50%
      transform translateX(-50%)
      p
        font-size 12px
</style>
