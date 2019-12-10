<template>
  <div class="header">
    <div class="header-top">
      <h1>消息</h1>
      <span>3条未读消息</span>
    </div>
    <div class="content">
      <div class="content-service">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon-test" />
        </svg>
        <div class="content-footer">
          <h3>几物客服</h3>
          <span>您好,这款沙发需要订做</span>
        </div>
        <div class="content-number">1</div>
      </div>
      <div class="content-discounts">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon-test1" />
        </svg>
        <div class="content-footer">
          <h3>优惠促销</h3>
          <span>双11活动即将开启,快来选购吧!</span>
        </div>
        <div class="content-number">2</div>
      </div>
      <div class="content-news">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon-test2" />
        </svg>
        <div>
          <h3>通知消息</h3>
          <span>优惠券到期提醒</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./iconfont.js">
//引入矢量图标
export default {};
</script>
<style lang="stylus" rel="stylesheet/stylus">
html
  overflow-y hidden
  overflow-x hidden
  .icon
    width 1em
    height 1em
    vertical-align -0.15em
    fill currentColor
    overflow hidden
    font-size 35px
    margin-right 20px
  .header
    width 100%
    height 100%
    padding-left 20px
    margin-top 20px
    .header-top
      width 100%
      height 40px
      margin-bottom 20px
      h1
        font-size 25px
        padding-bottom 10px
      span
        font-size 12px
    .content
      width 100%
      height 100%
      .content-service
        width 100%
        height 40px
        border 1px solid rgba(0, 0, 0, 0.07)
        margin-bottom 30px
        padding-left 15px
        padding-top 20px
        padding-bottom 15px
        display flex
        .content-footer
          margin-right 150px
          h3
            font-size 14px
            color #000
            font-weight 700
          span
            font-size 12px
        .content-number
          font-size 12px
          width 20px
          height 20px
          color #ffffff
          border-radius 50%
          background-color #ff0000 
          line-height 20px  
          text-align center
      .content-discounts
        width 100%
        height 40px
        border 1px solid rgba(0, 0, 0, 0.07)
        margin-bottom 30px
        padding-left 15px
        padding-top 20px
        padding-bottom 15px
        display flex
        .content-footer
          margin-right 108px
          h3
            font-size 14px
            color #000
            font-weight 700
          span
            font-size 12px
        .content-number
          font-size 12px
          width 20px
          height 20px
          color #ffffff
          border-radius 50%
          background-color #ff0000 
          line-height 20px  
          text-align center
      .content-news
        width 100%
        height 40px
        border 1px solid rgba(0, 0, 0, 0.07)
        margin-bottom 30px
        padding-left 15px
        padding-top 20px
        padding-bottom 15px
        display flex
        h3
          font-size 14px
          color #000
          font-weight 700
        span
          font-size 12px
</style>
