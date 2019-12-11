<template>
  <div class="BuyFooter-footer">
    <div class="BuyFooter-content">
       <svg class="icon img-1" aria-hidden="true">
      <use xlink:href="#icon-icon-test" />
    </svg>
    <svg class="icon img-2" aria-hidden="true">
      <use xlink:href="#icon-icon-test1" />
    </svg>
    <svg class="icon img-3" aria-hidden="true">
      <use xlink:href="#icon-icon-test2" />
    </svg>
    <div @click="isKey=!isKey" class="buy" :class="{activess:!isKey}" >立即购买</div>
    <div @click="isKey=!isKey" class="join" :class="{activess:isKey}">加入购物车</div>
    </div>
  </div>
</template>
<script>
import './iconfont.js'
export default {
  data () {
    return {
      isKey: true
    }
  },
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.activess
  background-color #000
  color #fff
.BuyFooter-footer
  position fixed
  left 0
  right 0
  bottom 0
  z-index 100
  .BuyFooter-content
    background-color #fff
    display flex
    .img-1
      padding-top 15px
      padding-bottom 15px
      padding-left 15px
    .img-2
      padding-top 15px
      padding-bottom 15px
      padding-left 15px
    .img-3
      padding-left 15px
      padding-top 15px
      padding-bottom 15px
    .buy
      padding-right 22px
      padding-left 15px
      padding-top 20px
    .join
      padding-left 12px
      padding-right 11px
      padding-top 20px

</style>