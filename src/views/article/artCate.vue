<template>
  <div>
    <!--预览文章分类-->
    <el-card class="box-card">
      <div slot="header" class="clearfix header-box">
        <span>文章分类</span>
        <el-button type="primary" size="mini" @click="addCateShowDialogBtnFn">添加分类</el-button>
      </div>
      <!--分类表格数据-->
      <el-table :data="cateList" style="width: 100%" border stripe>
        <!--type="index" 是 table-column 内置属性-->
        <el-table-column type="index" label="序号" width="100"></el-table-column>
        <el-table-column prop="cate_name" label="分类名称"></el-table-column>
        <el-table-column prop="cate_alias" label="分类别名"></el-table-column>
        <el-table-column label="操作">
          <el-button type="primary" size="mini">修改</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </el-table-column>
      </el-table>
    </el-card>
    <!--添加文章分类 => 对话框-->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="canceFn">取 消</el-button>
        <el-button type="primary" @click="confirmFn">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getArtCateListAPI } from '@/api'
export default {
  name: 'ArtCate',
  created () {
    // 获取文章分类
    this.getArtCateFn()
  },
  data () {
    return {
      cateList: [], // 文章分类列表
      dialogVisible: false
    }
  },
  methods: {
    // 获取文章分类列表
    async getArtCateFn () {
      const res = await getArtCateListAPI()
      console.log(res)
      this.cateList = res.data.data
    },
    // 添加分类按钮 => 点击事件 => 对话框出现
    addCateShowDialogBtnFn () {
      this.dialogVisible = true
    },
    canceFn () {
      this.dialogVisible = false
    },
    confirmFn () {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="less" scoped>
.header-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
