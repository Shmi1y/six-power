<template>
  <section class="aui-flexView"  v-if="isShow">
		<div class="aui-flex">
			<div class="aui-user-img">
				<img src="./images/icon-touxiang.png" alt="">
			</div>
			<div class="aui-flex-box">
				<h2>初级用户 </h2>
				<p>18519232894</p>
			</div>
			<div class="aui-arrow-go">
				普通会员
			</div>
		</div>
    
		<!-- <div class="aui-flex aui-flex-one">
			<div class="aui-flex-box" style="background:#ffe4e4">
				<h3>还款金</h3>
				<span>时刻关注还款</span>
			</div>
			<div class="aui-flex-box" style="background:#fff4d3">
				<h3>酷友圈</h3>
				<span>分享你的信息</span>
			</div>
			<div class="aui-flex-box" style="background:#c7f8e0">
				<h3>银行卡包</h3>
				<span>结算管理</span>
			</div>
		</div>
		<div class="aui-flex aui-flex-one">
			<div class="aui-flex-box" style="background:#c7f8e0">
				<h3>商户入驻</h3>
				<span>商户申请</span>
			</div>
			<div class="aui-flex-box" style="background:#fff4d3">
				<h3>密码管理</h3>
				<span>牢记密码</span>
			</div>
			<div class="aui-flex-box" style="background:#ffe4e4">
				<h3>操作手册</h3>
				<span>教你如何使用</span>
			</div>
		</div> -->

    <div class="er-header">
      <div class="er-shoucang">
        <h3>12</h3>
        <span>收藏</span>
      </div>
      <div class="er-shoucang">
        <h3>10</h3>
        <span>卡卷</span>
      </div>
      <div class="er-shoucang">
        <h3>3</h3>
        <span>钱包</span>
      </div>
      <div class="er-shoucang">
        <h3>150</h3>
        <span>积分</span>
      </div>
    </div>
    <div class="san-dingdan">
      <router-link to="/fine">
        <div class="fukuan">
          <img src="./images/san01.png" alt="">
          <p>待付款</p>
        </div>
      </router-link>

      <div class="fukuan">
        <img src="./images/san02.png" alt="">
        <p>待收货</p>
      </div>
      <div class="fukuan">
        <img src="./images/san03.png" alt="">
        <p>待评价</p>
      </div>
      <div class="fukuan">
        <img src="./images/san04.png" alt="">
        <p>退款/售后</p>
      </div>
      <div class="fukuan">
        <img src="./images/san05.png" alt="">
        <p>全部订单</p>
      </div>
    </div>
		<div class="aui-user-list">
			<a href="javascript:;" class="aui-flex ">
				<div class="aui-cou-img">
					<img class="cls1" src="./images/3.png" alt="">
          <p>个人资料</p>
          <img class="cls2" src="./images/next.png" alt="">
				</div>
			</a>
			<a href="javascript:;" class="aui-flex ">
				<div class="aui-cou-img">
					<img class="cls1" src="./images/6.png" alt="">
          <p>收获地址</p>
          <img class="cls2" src="./images/next.png" alt="">
				</div>
			</a>
			<a href="javascript:;" class="aui-flex ">
				<div class="aui-cou-img">
					<img class="cls1" src="./images/5.png" alt="">
          <p>客服中心</p>
          <img class="cls2" src="./images/next.png" alt="">
				</div>
			</a>
			<a href="javascript:;" class="aui-flex ">
				<div class="aui-cou-img">
					<img class="cls1" src="./images/4.png" alt="">
          <p>设置中心</p>
          <img class="cls2" src="./images/next.png" alt="">
				</div>
				<div class="aui-arrow">
					<span></span>
				</div>
			</a>
		</div>
    <router-view></router-view>
	</section>
</template>
<script>
export default {
  name:'Mine',
  data () {
    return {
      isShow:true
    }
  },
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.aui-flex
  display flex
  .aui-user-img
    height 100%
    margin-right 1px
    padding-top 35px
    padding-left 20px
    img
      width 50px
      height 50px
  .aui-flex-box
    width 100%
    height 100%
    padding-top 42px
    padding-left 10px
    h2
      padding-bottom 5px
      font-size 20px
      font-weight 10px
      text-align left 
    p
      font-size 10px
      float left
  .aui-arrow-go
    width 35%
    height 25%
    background-color green 
    border-radius 30px
    border 1px solid white
    margin-top 40px
    text-align center
    line-height 25px
    font-size 10px
    color white
  /* .aui-flex-box
    margin 10px
    text-align center
    padding-bottom 20px
  
    h3
      font-size 15px
    span 
      margin 5px
      font-size 10px */
.er-header
  display flex
  justify-content space-around
  padding-top 20px
  .er-shoucang
    width 50px
    height 30px
    margin 5px
    
    padding-top 5px
   
    text-align center
    h3
      font-size 20px
    span
      font-size 10px

.san-dingdan
  display flex
  justify-content space-around
  padding-top 30px
  .fukuan
    width 60px
    height 40px
    margin 10px
    text-align center
    img
      width 30px
      height 30px
    p
      font-size 6px

.aui-user-list
  width 100%
  height 50%
  padding-top 30px
  position relative
  .aui-flex
    width 100%
    .aui-cou-img
      clearFix()
      margin 30px
      width 100%
      .cls1 
        width 20px
        height 20px
        float left
        text-align center
        vertical-align middle
      p
        margin-left 10px
        font-size 13px
        float left
        margin-top 3px
        vertical-align middle
      .cls2
        width 20px
        height 20px
        vertical-align middle
        text-align right 
        float right
    
</style>
