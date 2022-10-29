<template>
  <div class="main-wrap">
    <div class="color-container">
      <div class="color-show"
           :style="{backgroundColor: getHexOrRgbString(props.rgbList[0],props.rgbList[1],props.rgbList[2],'rgb')}"></div>
    </div>

    <div class="input-container">
      <div class="label-cont">
        <div class="label">RGB:</div>
        <input readonly class="input-text" :value="`(${props.rgbList[0]},${props.rgbList[1]},${props.rgbList[2]})`">
      </div>
      <div class="label-cont">
        <div class="label">十六进制:</div>
        <input readonly class="input-text" :value="`${getHexOrRgbString(props.rgbList[0],props.rgbList[1],props.rgbList[2],'hex')}`">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ShowColor"
}
</script>

<script setup lang="ts">
import {getHexOrRgbString} from "@/utils/ColorUtils/transformColor";
let props = defineProps({
  // rgba数组分别代表r，g，b
  rgbList: {
    type: Array,
    default: [255, 255, 255]
  }
})

</script>

<style scoped lang="scss">
.main-wrap {
  display: flex;
  justify-content: space-around;

  .color-container {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .color-show {
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      border-radius: 1rem;
      background-color: aqua;
    }
  }

  .input-container {
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .label-cont {
      display: flex;
      font-size: 1rem;
      margin: 10% 0;
      width: 100%;

      .label {
        width: 40%;
      }

      .input-text {
        width: 60%;
        border-radius: .5rem;
        border: none;
        letter-spacing: .1rem; //文字间距
        padding: 0 .3rem;
      }
    }
  }
}
</style>
