<template>
 <div id="cart">
  <header>
  <h3>购物车</h3>
  <div class="control">管理</div>
  </header>

  <div class="shopCartList">
  <div class="image"> 
  <div class="pic"></div>
  <div class="image-right"> 
    <span>HAY沙发</span>
    <p class="description">这就是一个沙发而已</p>
    <p class="price">￥8530</p>
    </div>
  </div>  

  <div class="image-right-far">
  <input type="radio">
  <div>
    <span class="reduce">-</span>
    <input type="text" class="num-inp">
    <span class="add">+</span>
  </div>
  
  </div>

  </div>
  
  <div class="Settlement">
   <span class="money">$222</span>
   <input type="radio">
   <span class="chooseAll">全选</span>
   <button class="settle-accounts">结算</button>
  </div>

  </div>
</template>
<script>
export default {
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
#cart
  width 100%
  height 100%
  header 
    margin 0 10px
    display flex
    justify-content space-between
    h3
      font-size 70px
    .control
      font-size 35px
      font-weight bold
      margin-top 70px
  .shopCartList
    .border-1px
    background-color #ccc
    width 100%
    height 230px
    display flex
    justify-content space-between
    padding 20 10 0 
    .image
      display flex
      justify-content space-between
      .pic
        width 210px
        height 210px
        background #f00
      .image-right
        span
          font-size 40px
          font-weight bold
        .description
          font-size 40px
          font-weight bold
          lint-height 15px
        .price
          font-size 40px
          font-weight bold
          lint-height 15px
          margin-top 80px
      .image-right-far
        .reduce
          font-size 60px
          top 10px
          position relative
        .add
          font-size 60px
          top 10px
          position relative
        .num-inp
          margin 0 5px
          border 1px solid #000
          text-align center
          padding 0 5px
          width 60px
          height 30px
          font-size 30px    
  .Settlement
    width 100%
    position absolute
    bottom 10px
    .money
      margin-top 75px
      font-size 40px
      font-weight bold
    .chooseAll
      font-size 40px
      font-weight bold
      margin-left 30%
    .settle-accounts
      position relative
      top 60px
      float right
      width 300px
      height 150px
      background-color #000
      font-size 40px
      color #ccc
      font-size 40px
      font-weight bold








</style>
