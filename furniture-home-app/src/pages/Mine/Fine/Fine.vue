<template>
    <section>
        <div class="yi-header">
          <img src="../images/shouhuo1.png" @click="goto('/mine')" alt="">
          <!-- 箭头 -->
            <h2>待收货</h2>
        </div>

        <div class="er-daishou">
          <div class="er-image">
            <img src="../images/xiaokeai.jpg" alt="">
          </div>
          <div class="yi-shafa">
            <h2>HAY沙发椅子</h2>
            <p class="lei1">颜色分类哇</p>
            <p class="lei2">双人椅子</p>
            <p class="lei3">发放时间</p>
          </div>
          <div class="er-jiage">
            <span class="kuan1">￥19999</span>
            <span class="guige">×1</span>
          </div>
        </div>

        <div class="er-daishou">
          <div class="er-image">
            <img src="../images/xiaokeai.jpg" alt="">
          </div>
          <div class="yi-shafa">
            <h2>HAY沙发椅子</h2>
            <p class="lei1">颜色分类哇</p>
            <p class="lei2">双人椅子</p>
            <p class="lei3">发放时间</p>
          </div>
          <div class="er-jiage">
            <span class="kuan1">￥19999</span>
            <span class="guige">×1</span>
          </div>
        </div>

        <div class="san-zongji">
          <h2>总计</h2>
          <p>￥30689</p>
        </div>
        <div class="si-queren">
          <p>确认收货</p>
        </div>
    </section>

    
</template>
<script>
export default {
    name:'Fine',
    // props: ['isShow']
    methods: {
      goto(path){
        this.$router.push(path)
      }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.yi-header
  img 
    width 20px
    height 20px
    padding 30px 20px 10px 10px
  h2
    font-size 20px
    padding-left 10px
    font-weight 700

.er-daishou
  display flex
  /* align-items center */
 
  padding 20px 10px 0px 
  img
    width 80px
    height 80px
    margin-right 10px
.yi-shafa
  padding-top 3px 
  width 100%

  h2
    font-weight 700
    margin-bottom 6px
  p
    padding 3px 
    font-size 10px

.er-jiage
  width 100%
  text-align right 
  padding-top 3px
  
  .kuan1
    width 100%
    float right
    display inline block
    font-weight 700
  .guige
    float right
    font-weight 700
.san-zongji
  display flex
  justify-content flex-end
  padding-top 20px
  h2
    font-size 15px
    margin-right 10px
    padding 10px 1px
  p
    margin 5px
    font-weight 700
    font-size 25px
.si-queren
  padding-top 30px
  border 1px solid white
  border-radius 50%
  width 80%
  margin-left 40px
  
  p
    background-color #000000
    font-size 10px
    color white
    text-align center
    display inline block
    height 30px
    padding-top 15px
  
</style>