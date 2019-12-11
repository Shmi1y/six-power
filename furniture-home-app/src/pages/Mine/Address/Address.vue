<template>
    <section>
        <div class="fanhui" @click="goto('/mine')">
            <img src="../images/stepback.png" alt="">
        </div>
        <div>
            <van-address-edit
                :area-list="areaList"
                show-postal
                show-delete
                show-set-default
                show-search-result
                :search-result="searchResult"
                :area-columns-placeholder="['请选择', '请选择', '请选择']"
                @save="onSave"
                @delete="onDelete"
                @change-detail="onChangeDetail"
            />
        </div>
    </section>
</template>
<script>
export default {
  data() {
    return {
        searchResult: [],
        areaList: {
            province_list: {
                110000: '北京市',
                120000: '天津市'
            },
            city_list: {
                110100: '北京市',
                110200: '县',
                120100: '天津市',
               
            },
            county_list: {
                110101: '东城区',
                110102: '西城区',
                110105: '朝阳区',
                110106: '丰台区',
                120101: '和平区',
                120102: '河东区',
                120103: '河西区',
                120104: '南开区',
                120105: '河北区'
            }
        }
    }
  },

  methods: {
      //点击箭头返回
    goto(path){
        this.$router.push(path)
    },
    onSave() {
        this.$toast({
                    message: "添加成功"
                  })
    },
    onDelete() {
      this.$toast({
                    message: "已删除"
                  })
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.fanhui
    img 
        padding-top 5px
        margin 5px

        width 50px
        height 50px
</style>
