<template>
  <div>
    <ul class="page_one" >
      <li class="one_item_two" @click='isShowDetail'>
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
      </li>
      <li class="one_item_two">
        <h2 class="title">伊克特</h2>
        <p class="content">
          清雅的生活方式，演绎对生命的深层感悟。
          The clean and elegant life style deduces the deep thought of life.
        </p>
        <img src="../imgs/04.jpg" alt />
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Three",
  methods:{
    isShowDetail(){
      this.$router.push('/afflatus_content')
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../../common/stylus/mixins.styl'
.page_one
  clearFix()
  width 100%
  height 100%
  .one_item_two
    float left
    width 38%
    margin 10px
    // margin 10px
    bottom-border-1px(#eeeeee)
    padding 10px
    border-radius 3px
    .title
      padding 10px 0
      font-size 22px
      font-weight 800
    .content
      font-size 18px
      padding-bottom 10px
    img
      width 100%
</style>