<template>
  <div class="shop-outer">
    <img class="Img-1" src="./images/fanhui.png" alt />
    <div class="shop-header">
      <span class="span-1">沙发</span>
      <!--筛选按钮，点击弹出界面-->
      <span @click="isShow=!isShow" class="span-2">筛选</span>
    </div>
    <div class="shop-content">
      <div
        class="shop-list"
        @click="$router.push('/detalis')"
        v-for="(shop,index) in shops"
        :key="index"
      >
        <img class="Img-2" src="./images/shafa01.jpg" alt />
        <div class="shop-con1">+</div>
        <div class="shop-con2">{{shop.name}}</div>
        <div class="shop-con3">
          <span>￥</span>
          {{shop.price}}
        </div>
        <ul>
          <li
            class="li-1"
            v-for="(col,index) in shop.colors"
            :key="index"
            :style="{background:col.col_name}"
          ></li>
        </ul>
      </div>
    </div>
    <!--弹出界面-->
    <div class="shop-nav" v-show="isShow">
      <div class="shop-right">
        <ul class="ul-one">
          <li class="li-1">类型</li>
          <li class="li-2">全部</li>
          <li class="li-3">单人沙发</li>
          <li class="li-4">双人沙发</li>
          <li class="li-5">三人沙发</li>
          <li class="li-6">沙发墩</li>
        </ul>
        <div>
          <div>颜色</div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <div>材质</div>
          <span>全部</span>
          <span>皮质</span>
          <span>布艺</span>
          <span>绒质</span>
          <span>棉</span>
        </div>
        <div>
          <span>价格</span>
          <span>￥900-￥4000</span>
        </div>
        <div>
          <span>重置</span>
          <span>确定</span>
        </div>
      </div>
      <!--点击关闭弹出界面-->
      <div @click="isShow=!isShow" class="shop-left"></div>
    </div>
  </div>
</template>
<script>
//引入shop接口
import { reqCategory } from "../../api";
//引入option组件
export default {
  data() {
    return {
      shops: [],
      isShow: true
    };
  },
  async mounted() {
    const result = await reqCategory();
    console.log(result.data.hometool[0].shops);
    if (result.code === 0) {
      this.shops = result.data.hometool[0].shops;
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.shop-outer
  padding-top 10px
  position relative
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
      .shop-con1
        width 20px
        height 20px
        color #fff
        background-color #000
        text-align center
        line-height 18px
        border-radius 50%
        font-size 20px
        margin-left 130px
        margin-top 15px
      .shop-con2
        padding-left 15px
        padding-bottom 15px
      .shop-con3
        padding-left 15px
        span
          font-size 12px
      ul
        padding-left 15px
        padding-top 15px
        display flex
        .li-1
          width 15px
          height 15px
          margin-right 15px
  .shop-nav
    width 100%
    height 100%
    position absolute
    right 0
    top 0
    z-index 100
    transform translateX(0)
    .shop-right
      width 75%
      height 100%
      background-color #fff
      float right
      .ul-one
        padding-left 20px
        padding-top 30px
        border-bottom 1px solid rgba(0, 0, 0, 0.07)
        .li-1 
          font-size 20px
          font-weight 700
        .li-2
          padding-top 20px
          font-weight 700
        .li-3
          padding-top 20px
        .li-4
          padding-top 20px
        .li-5
          padding-top 20px
        .li-6
          padding-top 20px
          padding-bottom 20px

    .shop-left
      width 25%
      height 100%
      background-color rgba(0, 0, 0, 0.07)
</style>