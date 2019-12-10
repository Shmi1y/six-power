<template>
  <div>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/afflatus/one">空间展示</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/afflatus/two">日常好物</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/afflatus/three">生活乐趣</router-link>
      </div>
    </div>
    <router-view ></router-view>
  </div>
</template>
<script>
export default {
  name: "Afflatus",
  // data(){
  //   return{
  //     isShow:''
  //   }
  // },
  // mounted(){
  //   this.$on('isShowChild',isShow => {
  //     this.isShow = isShow
  //   })
  // },
  // methods:{
  //   isShowChild( ){
  //     this.isShow=!this.isShow
  //   }
  // }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.tab
  clearFix()
  background #ffffff
  .tab-item
    vertical-align bottom
    margin 15px
    float left
    font-size 16px
    a
      display block
      margin-top 10px
      &.router-link-active
        color #000000
        font-size 22px
        font-weight 700
</style>
