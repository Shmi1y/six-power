<template>
  <section>
    <div class="yi-header">
        <!-- 箭头  点击事件 返回-->
      <img src="../images/fanhui.png" @click="goto('/mine')" alt="">
    </div>
    <div>
      <!-- 优惠券单元格 -->
      <van-coupon-cell
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        @click="showList = true"
      />

      
      <!-- 优惠券列表 -->
      <van-popup v-model="showList" position="bottom">
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
          />
      </van-popup>
    </div>

  </section>
</template>

<script>
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
};
export default {
  data() {
    return {
      // showList:false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList:[{}]
    }
  },

  methods: {
    goto(path){
        this.$router.push(path)
      },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(code);
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
</style>
