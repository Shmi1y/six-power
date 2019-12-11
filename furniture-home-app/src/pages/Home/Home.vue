<template>
  <div class="container">
    <!-- 头部搜索 -->
    <div class="first_header">
      <p>晚上好</p>
      <i class="iconfont icon-sousuo"></i>
      <input type="search" placeholder="来自沙发艺术的舒适感" class="search_text" />
    </div>
    <!-- 头部轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="###" class="swiper_1">
            <img src="../../common/images/swiper/lb-cj.jpg" />
          </a>
        </div>
        <div class="swiper-slide">
          <a href="###" class="swiper_1">
            <img src="../../common/images/swiper/lb-cz.jpg" />
          </a>
        </div>
        <div class="swiper-slide">
          <a href="###" class="swiper_1">
            <img src="../../common/images/swiper/lb-kt.jpg" />
          </a>
        </div>
      </div>

      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
    </div>

    <!-- 分类信息 -->
    <div class="category_container">
      <ul class="category">
        <li class="category_item" >
          <span class="category_icon">
            <i class="iconfont icon-yideng"></i>
          </span>
          <span class="category_name">椅子</span>
        </li>
        <li class="category_item" >
          <span class="category_icon">
            <i class="iconfont icon-icontable"></i>
          </span>
          <span class="category_name">桌子</span>
        </li>
        <li class="category_item" >
          <span class="category_icon">
            <i class="iconfont icon-chuang"></i>
          </span>
          <span class="category_name">床</span>
        </li>
        <li class="category_item" >
          <span class="category_icon">
            <i class="iconfont icon-shafa"></i>
          </span>
          <span class="category_name">沙发</span>
        </li>
        <li class="category_item" >
          <span class="category_icon">
            <i class="iconfont icon-guijia"></i>
          </span>
          <span class="category_name">柜架</span>
        </li>
        <li class="category_item" @click="$router.push('/category')">
          <span class="category_icon">
            <i class="iconfont icon-category"></i>
          </span>
          <span class="category_name">分类</span>
        </li>
      </ul>
    </div>
  

    <!-- 最新单品swiper -->
    <div class="new_single"><span>最新单品</span></div>
    <div class="new-container">
      <!--
        别乱改类名，那是官方规定
      -->
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="###" class="swiper_1">
            <img src="../../common/images/dp/zs.jpg" />
            <img src="../../common/images/dp/zs.jpg" />
            <img src="../../common/images/dp/zs.jpg" />
          </a>
          </div>
        <div class="swiper-slide">
          <a href="###" class="swiper_1">
            <img src="../../common/images/dp/gz.jpg" />
            <img src="../../common/images/dp/gz.jpg" />
            <img src="../../common/images/dp/gz.jpg" />
          </a>
        </div>
        <div class="swiper-slide">
          <a href="###" class="swiper_1">
            <img src="../../common/images/dp/cz-1.jpg" />
            <img src="../../common/images/dp/cz-1.jpg" />
            <img src="../../common/images/dp/cz-1.jpg" />
          </a>
        </div>
        <div class="swiper-slide">
          <a href="###" class="swiper_1">
            <img src="../../common/images/dp/cj-2.jpg" />
            <img src="../../common/images/dp/cj-2.jpg" />
            <img src="../../common/images/dp/cj-2.jpg" />
          </a>
        </div>
      </div>

      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
    </div>

    <!-- 热门推荐 -->
    <div class="hot">
      <div class="hot_item">
        hot-1
        <a href="###" class="hot_three">
          <img src="###" alt />
        </a>
      </div>
      <div class="hot_item">
        hot-2
        <a href="###" class="hot_three">
          <img src="###" alt />
        </a>
      </div>
      <div class="hot_item">
        hot-3
        <a href="###" class="hot_three">
          <img src="###" alt />
        </a>
      </div>
    </div>
    <!--   限时折扣 -->
    <div lass="limit_sale">
      <div class="limit_left">
        左
        <a href="###" class="limit_sale_left">
          <img src="###" alt />
        </a>
      </div>
      <div class="limit_right_up">
        右上
        <a href="###" class="limit_sale_up">
          <img src="###" alt />
        </a>
      </div>
      <div class="limit_right_dw">
        右下
        <a href="###" class="limit_sale_dw">
          <img src="###" alt />
        </a>
      </div>
    </div>
    <!-- 下划线 -->
    <div class="dw_line">dw_line</div>
  </div>
</template>
<script>
// 引入Swiper
import Swiper from "swiper";
// 引入Swiper的样式文件
import "swiper/css/swiper.css";
// 引入vuex
export default {
  name: "carrousel",
  data() {
    return {
      current: 0
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  },
  mounted() {
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
       // spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: 'bullets'
        }
      }),
      new Swiper(".new-container", {
       // spaceBetween:10,
        centeredSlides: true,
        loop: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: 'fraction'
        }
      });
    });
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scopde>
@import '../../common/stylus/mixins.styl'
// 外边框
.container
  overflow hidden
  width 100%
  // 搜索
  .first_header
    width 90%
    margin 0 auto
    position relative
    p
      font-size 26px
      margin 10px 0
    .iconfont
      position absolute
      left 6px
      bottom 23px
    .search_text
      background rgba(235, 235, 235, .5)
      width 100%
      height 30px
      padding-left 25px
      line-height 30px
      margin-bottom 15px
  // 轮播图
  .swiper-container
    padding-bottom 20px
    position relative
    width 100%
    height 100%
    .swiper-wrapper
      width 100%
      height 100%
      clearFix()
      .swiper-slide
        float left
        a
          float left
          img
            margin:0 0px
            width 100%
            height 200px
    .swiper-pagination
      position absolute
      bottom 0px
      >span.swiper-pagination-bullet-active
        background #1e1e1e
         
  // 分类信息
  .category_container
    width 90%
    margin 10px auto
    .category
      width 100%
      display flex
      flex-wrap wrap
      justify-content space-around
      .category_item
        width 30%
        height 60px
        border 2px soild #e1e1e1
        margin 14px 0
        text-align center
        line-height 60px
        box-shadow 0 0 10px #eee
        .category_icon
          margin 0 2px
          .iconfont
            font-size 20px
            vertical-align middle
        .category_name
          font-size 16px
          color #1e1e1e
          margin 10px 2px
          vertical-align middle


  // 最新单品
  .new_single
    margin: 27px 0px 10px 22px;
    span 
      font-weight 700
  .new-container
    position relative
    width 375px
    height 150px
    .swiper-wrapper
      width 375px
      height 150px
      clearFix()
      .swiper-slide
        float left
        width 100%
        height 150px
        a
          float left
          padding: 0 0 0 17px
          img
            margin 0 5px
            width 29%
            height 140px
    .swiper-pagination
      position  absolute
      top: -22px
      left: 150px
      font-size: 13px

      

</style>
