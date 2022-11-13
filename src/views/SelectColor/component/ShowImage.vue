<template>
  <div class="show-color-cont-main-wrap">
    <!--    <el-upload-->
    <!--        :file-list="fileList"-->
    <!--        :on-change="handleChange"-->
    <!--        :show-file-list="false"-->
    <!--    >-->
    <!--      <el-button type="primary">select photo</el-button>-->
    <!--    </el-upload>-->
    <!--    <img alt="" :src="imgUrl" style="max-width: 100%;height: 80%;">-->
    <el-button @click="getPhoto">1</el-button>
    <canvas id="photo-canvas" style="max-width: 100%;height: 80%;border: 1px solid #ffff00;box-sizing: border-box"></canvas>
  </div>
</template>

<script lang="ts">
export default {
  name: "ShowImage"
}
</script>

<script lang="ts" setup>
import {getRGBList} from "@/utils/ColorUtils/ctxUtils";

const getPhoto = () => {
  let canvasDom  = document.getElementById('photo-canvas') as HTMLCanvasElement
  let ctx = canvasDom.getContext('2d') as CanvasRenderingContext2D
  ctx.fillStyle = "#ff0000"
  ctx.fillRect (0, 0,  1200, 1200);
  console.warn(getRGBList(ctx.getImageData(0,0,10,10).data))
}
// import {UploadProps, UploadUserFile} from "element-plus";
//
// let imgUrl = ref<any>('')
// let fileList = ref([] as UploadUserFile[])
//
// const handleChange: UploadProps['onChange'] = (uploadFile) => {
//   debugger
//   fileList.value = []
//   fileList.value.push(uploadFile)
//
//   const a = new FileReader()
//   a.readAsDataURL(uploadFile.raw as File)
//   a.onload = (e:any) => {
//     imgUrl.value = e.target.result
//   }
// }



</script>

<style scoped lang="scss">
.show-color-cont-main-wrap {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
