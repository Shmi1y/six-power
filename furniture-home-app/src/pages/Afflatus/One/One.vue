<template>
  <div>
    <ul class="page_one">
      <li class="one_item"  @click='isShowDetail' v-for="(good,index) in spaceDisplay" :key="index">
        <h2 class="title">{{good.title}}</h2>
        <p class="content">
          {{good.content}}
        </p>
        <img :src="good.image" alt />
      </li>
      <!-- <li class="one_item">
        <h2 class="title">井井有条的温馨绿洲</h2>
        <p class="content">
          行走在他人的城市，美丽，是我一个人的孤独。独自面对这份尊贵，思念的茧，慢慢长出温暖
          Walking in the city of others, beauty is my own loneliness. Facing the nobleness myself,warmth grows slowly in the chrysalis of missing.
        </p>
        <img src="../imgs/01.jpg" alt />
      </li>
      <li class="one_item">
        <h2 class="title">井井有条的温馨绿洲</h2>
        <p class="content">
          行走在他人的城市，美丽，是我一个人的孤独。独自面对这份尊贵，思念的茧，慢慢长出温暖
          Walking in the city of others, beauty is my own loneliness. Facing the nobleness myself,warmth grows slowly in the chrysalis of missing.
        </p>
        <img src="../imgs/01.jpg" alt />
      </li>
      <li class="one_item">
        <h2 class="title">井井有条的温馨绿洲</h2>
        <p class="content">
          行走在他人的城市，美丽，是我一个人的孤独。独自面对这份尊贵，思念的茧，慢慢长出温暖
          Walking in the city of others, beauty is my own loneliness. Facing the nobleness myself,warmth grows slowly in the chrysalis of missing.
        </p>
        <img src="../imgs/01.jpg" alt />
      </li> -->
    </ul>
    <!-- <router-view :detail="data"></router-view> -->
  </div>
</template>
<script>
// import {reqAfflatus} from '../../../api'
export default {
  name: "One",
  data(){
    return{
      index:''
    }
  },
  props:{
    spaceDisplay:Array
  },
  methods:{
    // isShowDetail(id){
    //   this.$router.push(`/afflatus_content${id}`)
    // }
    isShowDetail(){
      this.$router.push('/afflatus_content')
    }
  },
  // async mounted(){
  //   const result = await reqAfflatus()
  //   console.log(result)
  //   console.log(result.data.spaceDisplay)
  //   this.datas = result.data.spaceDisplay
  // }
  mounted(){
    console.log(this)
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../../common/stylus/mixins.styl"
.page_one
  width 100%
  margin 0 auto 
  height 100%
  margin-bottom 45px
  .one_item
    width 90%
    margin 0 auto
    height 100%
    // margin 10px
    bottom-border-1px(#eeeeee)
    padding 10px
    border-radius 3px
    .title
      padding 10px 0
      font-size 22px
      font-weight 800
    .content
      font-size 14px
      font-weight 600
      line-height 25px
      padding-bottom 10px
    img 
      width 100%
</style>