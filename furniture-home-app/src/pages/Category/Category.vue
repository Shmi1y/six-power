<template>
  <div class="categorysContainer">
    <div class="categorys_header">
      <span class="icon" @click="$router.back()">
        <i class="iconfont icon-houtui"></i>
      </span>
      <p class="header_title">分类</p>
    </div>
    <div class="categorys_content">
      <section class="hometool">
        <p>家具家居</p>
        <ul>
          <li v-for="(tool,index) in hometool" :key="index" @click="$router.push('/shoplists')">
            <span class="tool_icon">
              <i class="iconfont" :class="tool.icon"></i>
            </span>
            <span class="name">{{tool.name}}</span>
          </li>
        </ul>
      </section>
      <section class="areaplot">
        <p>区域划分</p>
         <ul class="areaContainer">
          <li class="area_item" v-for="(area,index) in areaplot" :key="index">
            <span class="area_icon">
              <i class="iconfont" :class="area.icon"></i>
            </span>
            <span class="area_name">{{area.name}}</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script>
import { reqCategory } from '../../api'
export default {
  name:'Category',
  data () {
    return {
      hometool:[],
      areaplot:[]
    }
  },
  async mounted(){
    const result = await reqCategory()
    console.log(result.data.hometool)
    if(result.code === 0){
      this.hometool = result.data.hometool
      this.areaplot = result.data.areaplot
    }
    
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.categorysContainer
  width 90%
  margin 10px auto
  .categorys_header
    width 100%
    .icon
      margin 10px 0
      .iconfont
        font-size 20px
    .header_title  
      font-size 24px
      line-height 30px
      color #1e1e1e
      margin 10px 0
  .categorys_content
    .hometool
      p
        font-size 18px
        color #1e1e1e
        margin 10px 0
      ul
        width 100%
        display flex
        flex-wrap wrap
        justify-content space-around
        li
          width 30%
          height 60px
          border 2px soild #e1e1e1
          margin 14px 0
          text-align center
          line-height 60px
          box-shadow 0 0 10px #eee
          .tool_icon
            margin 0 2px
            .iconfont
              font-size 20px
              vertical-align middle
          .name
            font-size 16px
            color #1e1e1e
            margin 10px 2px
            vertical-align middle
    .areaplot
      p
        font-size 18px
        color #1e1e1e
        margin 10px 0
      .areaContainer
        width 100%
        display flex
        flex-wrap wrap
        justify-content space-around
        .area_item
          width 30%
          height 90px
          box-shadow 0 0 10px #eee
          text-align center
          margin 14px 0
          background #fff
          display flex
          flex-direction column
          align-items center
          .area_icon
            margin 10px 2px
            .iconfont
              font-size 40px
              vertical-align middle
          .area_name
            font-size 16px
            color #1e1e1e
            margin 0px 2px
            vertical-align middle
</style>