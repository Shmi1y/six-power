<template>
  <div>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/afflatus/one" >空间展示</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/afflatus/two">日常好物</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/afflatus/three">生活乐趣</router-link>
      </div>
    </div>
    <router-view :spaceDisplay="data.spaceDisplay" :everydayGoodies="data.everydayGoodies" :lifeFun="data.lifeFun"></router-view>
  </div>
</template>
<script>
import {reqAfflatus} from '../../api'
export default {
  name: "Afflatus",
  data(){
    return{
      data:{}
    }
  },
  async mounted(){
    const result = await reqAfflatus()
    console.log(result)
    this.data = result.data
  }
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
