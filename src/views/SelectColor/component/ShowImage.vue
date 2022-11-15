<template>
  <div class="show-color-cont-main-wrap">
    <el-upload
        :file-list="fileList"
        :on-change="handleChange"
        :show-file-list="false"
    >
      <el-button type="primary">select photo</el-button>
    </el-upload>
<!--    <el-button @click="getPhoto">1</el-button>-->
    <canvas id="photo-canvas"
            style="max-width: 100%;height: 80%;border: 1px solid #ffff00;box-sizing: border-box"></canvas>
  </div>
</template>

<script lang="ts">
export default {
  name: "ShowImage"
}
</script>

<script lang="ts" setup>
import {getRGBList} from "@/utils/ColorUtils/ctxUtils";

import {UploadProps, UploadUserFile} from "element-plus";
import {ref} from "vue";

let fileList = ref([] as UploadUserFile[])

/**
 * 选择图片触发事件
 * @param uploadFile
 */
const handleChange: UploadProps['onChange'] = (uploadFile) => {
  // 获取canvas容器dom
  const canvasDom = document.getElementById('photo-canvas') as HTMLCanvasElement
  const canvasDomHeight= canvasDom.height
  const canvasDomWidth= canvasDom.width
  // 获取CanvasRenderingContext2D对象
  const ctx = canvasDom.getContext('2d') as CanvasRenderingContext2D

  // 清空fileList，添加选择的图片
  fileList.value = []
  fileList.value.push(uploadFile)

  // 生成img对象
  let img = new Image()
  img.src = URL.createObjectURL(uploadFile.raw as Blob)
  img.onload = function () {
    // 绘画canvas
    ctx.drawImage(img,0,0,canvasDomWidth,canvasDomHeight)
  }

  // 获取canvas颜色组
  let list = ctx.getImageData(0, 0, canvasDomWidth, canvasDomHeight).data
  // 获取到处理好的rgb颜色数组
  let rgbList = getRGBList(list)
  console.warn(rgbList)
}

</script>

<style scoped lang="scss">
.show-color-cont-main-wrap {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
