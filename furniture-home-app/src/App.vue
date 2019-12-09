<template>
  <div>
    <!-- 路由视图 -->
    <router-view />
    <!-- 底部组件 -->
    <Footer />
  </div>
</template>
<script>
// 引入Footer
import Footer from './components/Footer/Footer.vue'
export default {
  name:'App',
  // 注册组件
  components:{
    Footer
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>
