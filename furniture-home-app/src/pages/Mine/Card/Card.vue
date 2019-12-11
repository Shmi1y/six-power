<template>
  <section>
    <div class="yi-header">
      <!-- 箭头  点击事件 返回-->
      <img src="../images/fanhui.png" @click="goto('/mine')" alt="">
        <h2>待收货</h2>
    </div>

    <div class="card-yifu">
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      />
    </div>
    <div class="card-yifu">
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
      />
    </div>

    <div class="san-zongji">
      <h2>总计</h2>
      <p>￥30689</p>
    </div>

    <div class="hengxiang-wuliu"> 
      <van-steps :active="active">
        <van-step>买家下单</van-step>
        <van-step>商家接单</van-step>
        <van-step>买家提货</van-step>
        <van-step>交易完成</van-step>
      </van-steps>
    </div>
    <!-- <div>
      <van-steps
        :active="active"
        active-icon="success"
        active-color="#38f"
      >
      <van-step>买家下单</van-step>
        <van-step>商家接单</van-step>
        <van-step>买家提货</van-step>
        <van-step>交易完成</van-step>
      </van-steps>
    </div> -->

    <div class="wuliu-xinxi">
      <van-steps direction="vertical" :active="0">
      <van-step>
        <h3>【南京】贩卖美好</h3>
        <p>2019-12-12 12:40</p>
      </van-step>
      <van-step>
        <h3>【重庆】人间值得</h3>
        <p>2019-12-11 10:00</p>
      </van-step>
      <van-step>
        <h3>【深圳】你细细品</h3>
        <p>2019-12-11 09:30</p>
      </van-step>
      <van-step>
        <h3>它向你走近了</h3>
        <p>2019-12-11 02:30</p>
      </van-step>
    </van-steps>
    </div>

  </section>
</template>
<script>
export default {
  data() {
    return {
      active: 1
    };
  },
  //点击箭头返回
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
    padding 20px 20px 10px 10px
  h2
    font-size 20px
    padding-left 10px
    font-weight 700
.card-yifu
  margin-top 20px
  box-shadow 0px 12px 8px -15px #d3d3d6
.san-zongji
  display flex
  justify-content flex-end
  padding-top 10px
  h2
    font-size 15px
    margin-right 10px
    padding 10px 1px
  p
    margin 5px
    font-size 25px
.hengxiang-wuliu
  margin-top 20px
.wuliu-xinxi
  margin 35px 50px
</style>
