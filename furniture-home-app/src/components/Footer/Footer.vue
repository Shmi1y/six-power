<template>
  <footer class="footer_guide border-1px">
    <a
      href="javascript:;"
      class="guide_item"
      :class="{ on: $route.path === '/home' }"
      @click="goto('/home')"
    >
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{ on: $route.path === '/afflatus' }"
      @click="goto('/afflatus')"
    >
      <span class="item_icon">
        <i class="iconfont icon-shuju"></i>
      </span>
      <span>灵感</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{ on: $route.path === '/news' }"
      @click="goto('/news')"
    >
      <span class="item_icon">
        <i class="iconfont icon-xiaoxi"></i>
      </span>
      <span>消息</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{ on: $route.path === '/shopcart' }"
      @click="goto('/shopcart')"
    >
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a
      href="javascript:;"
      class="guide_item"
      :class="{ on: $route.path === '/mine' }"
      @click="goto('/mine')"
    >
      <span class="item_icon">
        <i class="iconfont icon-user"></i>
      </span>
      <span>我</span>
    </a>
  </footer>
</template>
<script>
export default {
  name:'Footer',
  methods:{
    goto(path){
      if(this.$route.path !== path){
        this.$router.replace(path)
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.footer_guide // footer
  top-border-1px(#e4e4e4)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 50px
  display flex
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999999
    &.on
      color #02a774
    span
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px
</style>
