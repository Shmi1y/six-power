<template>
  <div>
    <ul class="page_one">
      <li
        class="one_item_two"
        @click="isShowDetail"
        v-for="(good,index) in everydayGoodies"
        :key="index"
      >
        <h2 class="title">{{good.name}}
          <span class="object">{{good.category}}</span>
        </h2>
        <div>
          <p class="content">{{good.content}}</p>
          <img src="../imgs/04.jpg" alt />
        </div>
      </li>
      <!-- <li class="one_item_two">
        <h2 class="title">伊克特</h2>
        <p class="content">
          清雅的生活方式，演绎对生命的深层感悟。
          The clean and elegant life style deduces the deep thought of life.
        </p>
        <img src="../imgs/04.jpg" alt />
      </li>
      <li class="one_item_two">
        <h2 class="title">伊克特</h2>
        <p class="content">
          清雅的生活方式，演绎对生命的深层感悟。
          The clean and elegant life style deduces the deep thought of life.
        </p>
        <img src="../imgs/04.jpg" alt />
      </li>
      <li class="one_item_two">
        <h2 class="title">伊克特</h2>
        <p class="content">
          清雅的生活方式，演绎对生命的深层感悟。
          The clean and elegant life style deduces the deep thought of life.
        </p>
        <img src="../imgs/04.jpg" alt />
      </li>
      <li class="one_item_two">
        <h2 class="title">伊克特</h2>
        <p class="content">
          清雅的生活方式，演绎对生命的深层感悟。
          The clean and elegant life style deduces the deep thought of life.
        </p>
        <img src="../imgs/04.jpg" alt />
      </li>-->
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Three",
  data() {
    return {
      datas: []
    };
  },
  props: {
    everydayGoodies: Array
  },
  methods: {
    isShowDetail() {
      this.$router.push("/afflatus_content");
    }
  }
  // mounted(){
  //   const result = await
  // }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../../common/stylus/mixins.styl'
.page_one
  clearFix()
  width 100%
  height 100%
  margin-bottom 45px
  .one_item_two
    float left
    width 39%
    margin 9px
    border 1px solid #eeeeee
    box-shadow 0 5px 5px #ccc
    bottom-border-1px(#eeeeee)
    padding 10px
    border-radius 3px
    .title
      padding 10px 0
      font-size 22px
      font-weight 800
    .object
      font-size 15px
      font-weight 700
      font right 
    .content
      padding-bottom 10px
      font-size 14px
      font-weight 600
      line-height 25px
    img
      width 100%
      
</style>