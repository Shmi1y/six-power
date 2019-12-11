<template>
  <!-- 详情组件 -->
  <div class="detalis-content">
    <!--swiper-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/shafa02.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="./images/shafa01.jpg" alt />
        </div>
        <div class="swiper-slide">
          <div class="swiper-slide">
            <img src="./images/shafa03.jpg" alt />
          </div>
          <img src="./images/shafa03.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="./images/shafa04.jpg" alt />
        </div>
      </div>
    </div>
    <!--信息详情-->
    <ul class="ul-1">
      <li class="li-1">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon-test1" />
        </svg>
      </li>
      <li class="li-2">HAY沙发椅</li>
      <li class="li-3">北欧现代简约沙发椅</li>
      <li class="li-4">
        ￥
        <span>8530-14300</span>
      </li>
      <li class="li-5">运费700.00元</li>
      <li class="li-6">6人已买</li>
    </ul>
    <ul class="ul-2">
      <li class="li-7">
        <span>优惠 满10000减300, 满600减100</span>
        <div>></div>
      </li>
      <li class="li-8">
        <span>已选 Coda-100羊毛布面</span>
        <div>...</div>
      </li>
      <li class="li-9">服务 世界设计 7天退换 免费安装</li>
      <li class="li-10">
        <span>组合 组合最高可减2000元!</span>
        <div>></div>
      </li>
    </ul>
    <div class="footer">
      <img src="./images/shafa01.jpg" alt="沙发" />
      <img src="./images/shafa04.jpg" alt="沙发" />
      <img src="./images/shafa03.jpg" alt="沙发" />
      <img src="./images/shafa02.jpg" alt="沙发" />
    </div>
    <div class="Img">
      <img @click="$router.back()" src="./images/fanhui.png" alt="">
    </div>
    <BuyFooter />
  </div>
</template>
<script>
//引入矢量图js
import './iconfont.js'
//引入swiper
import Swiper from "swiper";
import BuyFooter from "../../components/BuyFooter/BuyFooter.vue";
import "swiper/css/swiper.css";
export default {
  components: {
    BuyFooter
  },
  mounted() {
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
    });
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.icon
  width 1em
  height 1em
  vertical-align -0.15em
  fill currentColor
  font-size 35px
  margin-right 20px
.detalis-content
  .swiper-container
    width 100%
    height 100%
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        width 100%
        height 240px
        img
          width 100%
          height 240px
  .ul-1
    padding-left 15px
    padding-right 15px
    padding-top 20px
    padding-bottom 20px
    .li-1
      float right
    .li-2
      font-size 20px
      font-weight 700
      margin-bottom 6px
    .li-3
      margin-bottom 16px
    .li-4
      margin-bottom 20px
      span
        font-size 25px
    .li-5
      font-size 14px
    .li-6
      font-size 14px
      float right
  .ul-2
    padding-left 15px
    padding-right 15px
    .li-7
      border-top 1px solid #999999
      padding-top 15px
      padding-bottom 15px
      div
        float right
    .li-8
      border-top 1px solid #999999
      padding-top 15px
      padding-bottom 15px
      div
        float right
    .li-9
      border-top 1px solid #999999
      padding-top 15px
      padding-bottom 15px
    .li-10
      border-top 1px solid #999999
      padding-top 15px
      padding-bottom 15px
      div
        float right
  .footer
    img
      width 100%
      height 240px
  .Img 
    position fixed
    left 10px
    top 10px
    z-index 100
    img 
      width 20px
      height 20px

</style>                                            
