<template>
    <section>
        <div class="fanhui" @click="goto('/mine')">
            <img src="../images/stepback.png" alt="">
        </div>

        <div class="Contact-tianjia">
        <!-- 联系人卡片 -->
            <van-contact-card
                :type="cardType"
                :name="currentContact.name"
                :tel="currentContact.tel"
                @click="showList = true"
            />

            <!-- 联系人列表 -->
            <van-popup v-model="showList" position="bottom">
                <van-contact-list
                    v-model="chosenContactId"
                    :list="list"
                    @add="onAdd"
                    @edit="onEdit"
                    @select="onSelect"
                />
            </van-popup>

            <!-- 联系人编辑 -->
            <van-popup v-model="showEdit" position="bottom">
                <van-contact-edit
                    :contact-info="editingContact"
                    :is-edit="isEdit"
                    @save="onSave"
                    @delete="onDelete"
                />
            </van-popup>

            <!-- 不可编辑 -->
            <van-contact-card
              type="edit"
              name="张三"
              tel="13000000000"
              :editable="false"
            />
        </div>

    </section>
</template>
<script>
export default {
  data() {
    return {
      chosenContactId: null,
      editingContact: {},
      showList: true,
      showEdit: false,
      isEdit: true,
      FALSE:false,
      list: [{
        name: '张三',
        tel: '13000000000',
        id: 0
      }]
    };
  },

  computed: {
    cardType() {
      return this.chosenContactId !== null ? 'edit' : 'add';
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter(item => item.id === id)[0] : {};
    }
  },

    methods: {
        goto(path){
            this.$router.push(path)
        },
    // 添加联系人
    onAdd() {
      this.editingContact = { id: this.list.length };
      this.isEdit = false;
      this.showEdit = true;
    },

    // 编辑联系人
    onEdit(item) {
      this.isEdit = true;      
      this.showEdit = true;
      this.editingContact = item;
    },

    // 选中联系人
    onSelect() {
      this.showList = false;
    },

    // 保存联系人
    onSave(info) {
      this.showEdit = false;
      this.showList = false;
      
      if (this.isEdit) {
        this.list = this.list.map(item => item.id === info.id ? info : item);
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    // 删除联系人
    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter(item => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
    }
  }
};

</script>
<style lang="stylus" rel="stylesheet/stylus">
.fanhui
    
    img 
        padding-top 5px
        margin 5px

        width 50px
        height 50px
/* .buke
    margin 10px
    padding-top 20px */

</style>
