<template>
  <ul class="details">
    <li class="xxx" v-for="(good,index) in data" :key="index">
      <img class="heardImg" src="../imgs/03.jpg" alt />
      <div class="innerContainer">
        <div class="headerContent">
          <h2 class="heardTitle">{{good.title}}</h2>
          <p>室内设计师: {{good.designer}}</p>
          <p>摄影师: {{good.Photographer}}</p>
          <p class="textContent">{{good.desc}}</p>
        </div>
        <div class="bodyContent">
          <h2 class="bodyTitle">家居的意义</h2>
          <div class="tom">
            <img class="bodyImg" src="../imgs/03.jpg" alt />
            <div class="describe">
              <span>
                <i class="iconfont icon-kafeibei"></i>
              </span>
              <p class="goods">OFUCY大杯</p>
              <p>
                $
                <span class="price">298</span>
              </p>
              <div class="shopping" @click="buy">立即购买</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <span class="icon-item" @click="toTop">
          <i class="iconfont icon-fanhui7"></i>
        </span>
        <span class="icon-item social-share" 
          data-sites="weibo,wechat" 
          data-url="地址" 
          :data-title="good.title">
          <i class="iconfont icon-web-icon-"></i>
        </span>
        <span class="icon-item">
          <i class="iconfont icon-gouwuche"></i>
        </span>
        <span class="icon-item1" @click="link">
          <i class="iconfont icon-fanhui"></i>
        </span>
      </div>
    </li>
  </ul>
</template>
<script>
import { reqAfflatus } from "../../../api";
export default {
  name: "AfflatusContent",
  data() {
    return {
      ItemId: "",
      data: {}
    };
  },
  async mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
    const result = await reqAfflatus();
    //console.log(result.data.spaceDisplay)
    this.data = result.data.spaceDisplay[0].detail;
    this.ItemId = this.$route.params.id;
    console.log(this.ItemId);
  },
  // mounted(){
  //   this.ItemId = this.$route.params.id
  //   console.log(this.ItemId)
  // },
  methods: {
    link() {
      this.$router.back();
    },
    buy() {
      this.$router.push("/shopcart");
    },
    share() {},
    handleScroll() {
      let scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop;
      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
    },
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../../common/stylus/mixins.styl'
.xxx
  margin-bottom 45px
  position relative
  .heardImg
    width 100%
    height 100%
  .innerContainer
    margin 0 auto
    width 95%
    height 100%
    .headerContent
      margin-top 10px
      padding 5px
      border 1px solid #eeeeee
      box-shadow 0 5px 5px #ccc
      .heardTitle
        padding 10px 0
        font-size 22px
        font-weight 800
      p
        font-size 14px
        padding-bottom 5px
      .textContent
        font-size 14px
        font-weight 600
        line-height 25px
        padding-bottom 10px
        margin-top 10px
    .bodyContent
      clearFix()
      position relative
      .bodyTitle
        margin 15px 0
        font-size 20px
        font-weight 800
      .tom
        position relative
        .bodyImg
          font-size 0
          width 55%
        .describe
          width 45%
          position absolute
          right -4px
          bottom 15px
          background-color #000000
          z-index 2
          color #ffffff
          padding 15px 15px 15px 20px
          .goods
            margin-top 10px
          p
            margin-bottom 10px
            .price
              font-weight 500
              margin 3px 0 0 5px
              font-size 18px
          .shopping
            border-radius 2px
            font-size 18px
            width 40%
            position absolute
            right 50px
            bottom -14px
            z-index 5
            background-color #02a774
            padding 7px
  .bottom
    width 100%
    height 40px
    background-color #ffffff
    position fixed !important
    right 0
    bottom 0
    left 0
    z-index 9999
    top-border-1px(#eeeeee)
    .icon-item
      float right
      margin 10px 10px
      .iconfont
        font-size 18px
    .icon-item1
      float left
      margin 10px 0
      .iconfont
        font-size 18px
        padding 4px
    .icon-item2
      float right
      margin 9px
      .iconfont
        font-size 22px
</style>