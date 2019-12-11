<template>
  <div class="shop-outer">
    <img class="Img-1" src="./images/fanhui.png" alt />
    <div class="shop-header">
      <span class="span-1">沙发</span>
      <span class="span-2">筛选</span>
    </div>
    <div class="shop-content">
      <div class="shop-list">
        <img class="Img-2" src="./images/shafa01.jpg" alt />
        <div>+</div>
        <div>HAY沙发椅</div>
        <div>
          ￥
          <span>8530-14300</span>
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div  class="shop-list">
        <img src="./images/shafa01.jpg" alt />
        <div>+</div>
        <div>HAY沙发椅</div>
        <div>
          ￥
          <span>8530-14300</span>
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="shop-list">
        <img src="./images/shafa01.jpg" alt />
        <div>+</div>
        <div>HAY沙发椅</div>
        <div>
          ￥
          <span>8530-14300</span>
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.shop-outer
  padding-top 10px
  .Img-1
    padding-left 20px
    padding-right 20px
    width 20px
    height 20px
  .shop-header
    padding-left 20px
    padding-right 20px
    display flex
    justify-content space-between
    padding-top 20px
    padding-bottom 20px
    .span-1
      font-size 26px
      font-weight 700
    .span-2
      font-size 14px
  .shop-content
    display flex
    flex-wrap wrap
    .shop-list
      width 40%
      height 200px
      border 1px solid rgba(0, 0, 0, 0.07)
      margin-left 20px
      margin-right 18px
      margin-bottom 36px
      .Img-2 
        width 100%
        height 70px
</style>