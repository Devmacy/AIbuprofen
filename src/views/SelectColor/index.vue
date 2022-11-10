<template>
  <div class="main-wrapper">
    <div class="container">
      <ColorList class="select-wrap"/>
    </div>


    <div class="operation-wrap">
      <ShowColor class="show-color-cont" style="overflow: hidden"/>

      <div class="show-color-cont" style="margin: 10% 0 0 0;overflow: hidden">
        <slide-color-select></slide-color-select>
      </div>

      <div>
        <canvas ref="canvas" id="canvas" width="200" height="200">
          当前浏览器不支持canvas元素，请升级或更换浏览器！
        </canvas>
      </div>
    </div>


  </div>
</template>

<script lang="ts">
export default {
  name: "ColorPalette"
}
</script>

<script lang="ts" setup>
import ShowColor from "@/views/SelectColor/component/ShowColor.vue";
import ColorList from "@/views/SelectColor/component/ColorList.vue";
import SlideColorSelect from "@/views/SelectColor/component/slideColorSelect.vue";
import {onMounted} from "vue";

onMounted(() => {
  let canvas = document.getElementById('canvas') as HTMLCanvasElement || null;
  // 获取绘图上下文
  let ctx = canvas.getContext('2d');
  // 绘制一条从起点（x: 50, y:50）到 另一个点（x: 200, y:200）的直线
  console.warn(ctx)
  ctx.moveTo(50, 50);
  ctx.lineTo(200, 200);
  ctx.stroke();
})

</script>

<style scoped lang="scss">
$c-f-color: #5e5e5e;
$c-f-color1: #ffffff;
$c-bg-color: #1a1a1a;
$c-bg-color1: #000000;
$c-bg-color2: #ffffff;
$c-bg-color3: #272a30;
$c-bg-color4: #646cff;
$c-bg-glass-color: rgba(255, 255, 255, 0.1);

.flex-col {
  display: flex;
  flex-direction: column;
}

.main-wrapper {
  height: 100%;
  width: 100%;
  display: flex;

  .container {
    box-sizing: border-box;
    height: 100%;
    width: 20%;
    margin: 2%;
    background: linear-gradient(to right, #8f41e9, #578aef);
    padding: .1rem;
    border-radius: 1rem;
    overflow: auto;

    &:last-child {
      margin: 0 0 0 2%;
    }

    &:first-child {
      margin: 0 2% 0 0;
    }

    &::-webkit-scrollbar {
      display: none
    }

    .select-wrap {
      border-radius: 1rem;
      background-color: $c-bg-color3;
    }
  }


  .operation-wrap {
    width: 20%;
    height: 100%;
    border-radius: 1rem;
    @extend .flex-col;

    .show-color-cont {
      background-color: $c-bg-color3;
      width: 100%;
      height: 20%;
      margin: 0 auto;
      border-radius: inherit
    }
  }
}
</style>
