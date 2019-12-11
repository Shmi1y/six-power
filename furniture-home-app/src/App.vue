<template>
  <div>
    <!-- 路由视图 -->
    <router-view />
    <!-- 底部组件 -->
    <Footer v-show="$route.meta.isShowFooter"/>
  </div>
</template>
<script>
// 引入Footer
import Footer from './components/Footer/Footer.vue'
export default {
  name: 'App',
  //  mounted () {
  //   // 自动登录的操作
  //   this.$store.dispatch('autoLogin')
  // },
  // 注册组件
  components: {
    Footer
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
#app
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position: relative;
</style>
