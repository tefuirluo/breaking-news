<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>更换头像</span>
    </div>
    <div>
      <!-- 图片，用来展示用户选择的头像 -->
      <img v-if="!avatar" class="the_img" src="@/assets/images/avatar.jpg" alt="" />
      <img v-else :src="avatar" class="the_img" alt="">

      <!-- 按钮区域 -->
      <div class="btn-box">
        <input type="file" accept="image/*" style="display: none" ref="iptRef" @change="onFileChange" />
        <el-button type="primary" icon="el-icon-plus" @click="chooseImg">选择图片</el-button>
        <el-button type="success" icon="el-icon-upload" :disabled="avatar === ''" @click="uploadFn">上传头像</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
import { updateUserAvatarAPI } from '@/api'
export default {
  name: 'UserAvatar',
  data () {
    return {
      avatar: '' // 保存图片链接 | base64 字符串
    }
  },
  methods: {
    // 选择图片 -> 点击事件
    chooseImg () {
      this.$refs.iptRef.click()
    },
    onFileChange (e) {
      const files = e.target.files
      if (files.length === 0) {
        console.log('没有选择')
      } else {
        // 解决方案1: 内存临时地址 => url 转 链接 => 不可以发给后台
        // this.avatar = URL.createObjectURL(files[0])
        // 解决方案2: 转 base64
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.onload = (e) => {
          this.avatar = e.target.result
        }
      }
    },
    // 上传头像
    async uploadFn () {
      const { data: res } = await updateUserAvatarAPI(this.avatar)
      if (res.code !== 0) return this.$message.error(res.message)
      this.$message.success(res.message)
      this.$store.dispatch('getUserInfoActions')
    }
  }
}
</script>

<style lang="less" scoped>
.btn-box {
  margin-top: 10px;
}
.preview {
  object-fit: cover;
}
.the_img{
  width: 350px;
  height: 350px;
}
</style>
