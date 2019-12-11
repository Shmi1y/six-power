<template>
    <section>

            <!-- 通过v-model控制弹出层是否展示 -->
        <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->

            <!-- <van-popup v-model="show">内容</van-popup> -->


        <!--弹出位置 通过position属性设置弹出位置，默认居中弹出，可以设置为top、bottom、left、right -->
            <!-- <van-popup v-model="show" position="top" :style="{ height: '20%' }" -->
        <!-- /> -->


        <!-- <van-action-sheet v-model="show" :actions="actions" @select="onSelect" /> -->
        <div class="yi-header">
          <!-- 箭头  点击事件 返回-->
          <img src="../images/fanhui.png" @click="goto('/mine')" alt="">
        </div>
        
        <div class="set-header">
            <div class="set-zhi">
                <p>安全中心</p>
                <img class="cls2" src="../images/next.png" alt="">
            </div>

            <div class="set-zhi">
                <p>隐私管理</p>
                <img class="cls2" src="../images/next.png" alt="">
            </div>
            <div class="set-zhi">
                <p>辅助功能</p>
                <img class="cls2" src="../images/next.png" alt="">
            </div>
            <div class="set-zhi" @click="loginout">
                <p>退出登录</p>
                <img class="cls2" src="../images/next.png" alt="">
            </div>

        </div>

        <div>

        </div>



        <!-- <div>
            <van-popup
                v-model="show"
                closeable
                position="bottom"
                :style="{ height: '20%' }"
            />

        </div> -->
    </section>
</template>
<script>
export default {
    methods: {
      goto(path){
        this.$router.push(path)
      },
      loginout(){
        this.$dialog.confirm({
            message: '确认退出吗?'
            })
            .then(() => {
    // on confirm
                this.$router.push('/login')
            })
            .catch(() => {
    // on cancel
            })
        }
    }
    
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
/* .aui-flex
    width 100%
    box-shadow 0px 12px 8px -15px #d3d3d6 */
.yi-header
  img 
    width 20px
    height 20px
    padding 30px 20px 10px 10px

.set-header
    padding-top 10px
    padding-left 20px
    box-shadow 0px 12px 8px -15px #d3d3d6

    .set-zhi
        width 100%
        height 50px
        display flex 
        margin 10px
        position relative
        box-shadow 0px 12px 8px -15px #d3d3d6
        p
            padding-left 5px
            line-height 40px
            font-size 13px
            
        .cls2
            width 18px
            vertical-align middle
            position absolute
            top 0px
            right 34px 
            padding-top 10px
                
            
                
     
</style>
