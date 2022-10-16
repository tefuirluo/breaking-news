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
          <!--scope => row 属性 => 行对象-->
          <template v-slot="scope">
            <el-button type="primary" size="mini" @click="updateCateBtnFn(scope.row)">修改</el-button>
            <el-button type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!--添加文章分类 => 对话框-->
    <el-dialog
      title="添加文章分类"
      :visible.sync="dialogVisible"
      width="30%"
      @close="dialogCloseFn"
    >
      <!-- 添加的表单 -->
      <el-form :model="addForm" :rules="addRules" ref="addRef" label-width="85px">
        <el-form-item label="分类名称" prop="cate_name">
          <el-input v-model="addForm.cate_name" minlength="1" maxlength="10"></el-input>
        </el-form-item>
        <el-form-item label="分类别名" prop="cate_alias">
          <el-input v-model="addForm.cate_alias" minlength="1" maxlength="15"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelFn">取 消</el-button>
        <el-button type="primary" @click="confirmFn">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getArtCateListAPI, saveArtCateAPI } from '@/api'
export default {
  name: 'ArtCate',
  created () {
    // 获取文章分类
    this.getArtCateFn()
  },
  data () {
    return {
      cateList: [], // 文章分类列表
      dialogVisible: false,
      addForm: { // 添加表单的数据对象
        cate_name: '',
        cate_alias: ''
      },
      addRules: { // 添加表单的验证规则对象
        cate_name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' },
          { pattern: /^\S{1,10}$/, message: '分类名必须是1-10位的非空字符', trigger: 'blur' }
        ],
        cate_alias: [
          { required: true, message: '请输入分类别名', trigger: 'blur' },
          { pattern: /^[a-zA-Z0-9]{1,15}$/, message: '分类别名必须是1-15位的字母数字', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 获取文章分类列表
    async getArtCateFn () {
      const res = await getArtCateListAPI()
      // console.log(res)
      this.cateList = res.data.data
    },
    // 添加分类按钮 => 点击事件 => 对话框出现
    addCateShowDialogBtnFn () {
      this.dialogVisible = true
    },
    // 取消按钮 => 点击事件
    cancelFn () {
      this.dialogVisible = false
    },
    // 确定按钮 => 点击事件
    confirmFn () {
      this.dialogVisible = false
      this.$refs.addRef.validate(async valid => {
        if (valid) {
          // 通过校验
          const { data: res } = await saveArtCateAPI(this.addForm)
          if (res.code !== 0) return this.$message.error(res.message)
          this.$message.success(res.message)
          this.getArtCateFn()
        } else {
          return false
        }
      })
    },
    dialogCloseFn () {
      this.$refs.addRef.resetFields()
    },
    // 修改分类 => 按钮的点击回显
    updateCateBtnFn (obj) {
      // obj 的值 { id, cate_name, cate_alias}
      // console.log(obj)
      this.dialogVisible = true
      // 数据回显
      this.addForm.cate_name = obj.cate_name
      this.addForm.cate_alias = obj.cate_alias
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
