<template>
  <div>
    <el-button>按钮</el-button>
  </div>
</template>

<script>
import { registerAPI } from '@/api'
export default {
  async created () {
    const res = await registerAPI()
    console.log(res)
  }
}

</script>

<style scoped>

</style>
