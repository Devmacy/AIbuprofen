<template>
  <el-upload
      :file-list="fileList"
      :on-change="handleChange"
      :show-file-list="false"
  >
    <el-button type="primary">select photo</el-button>
  </el-upload>
  <img alt="" :src="imgUrl" style="width: 10rem;height: 10rem;">
</template>

<script lang="ts">
export default {
  name: "ShowImage"
}
</script>

<script lang="ts" setup>
import {ref} from "vue";
import {UploadProps, UploadUserFile} from "element-plus";

let imgUrl = ref<any>('')
let fileList = ref([] as UploadUserFile[])

const handleChange: UploadProps['onChange'] = (uploadFile) => {
  debugger
  fileList.value = []
  fileList.value.push(uploadFile)

  const a = new FileReader()
  a.readAsDataURL(uploadFile.raw as File)
  a.onload = (e:any) => {
    imgUrl.value = e.target.result
  }
}

</script>

<style scoped lang="scss">
.show-color-cont-main-wrap {
  height: 100%;
  width: 100%;
}
</style>
