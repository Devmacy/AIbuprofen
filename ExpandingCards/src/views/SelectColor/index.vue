<template>
  <div class="main-wrapper">
    <div class="select-wrap">
      <div class="item-wrap" v-for="(item,index) in list" :key="index">
        <div class="item" :style="{backgroundColor:item.hexString}"
             @click="setColor(item.hexString,item.r,item.g,item.b)"/>
      </div>
    </div>

    <div class="operation-wrap">
      <ShowColor class="show-color-cont" :rgb-list="[`${hexColor.color.r}`,`${hexColor.color.g}`,`${hexColor.color.b}`]"></ShowColor>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "ColorPalette"
}
</script>

<script lang="ts" setup>

// 定义十六进制颜色列表类型
import {reactive, ref} from "vue";
import ShowColor from "@/views/SelectColor/component/ShowColor.vue";

interface listType {
  hexString: string,
  r: number,
  g: number,
  b: number
}

const list = ref([] as listType[])
//设置颜色间隔差异
const step = 30

const hexColor = reactive({
  color: {
    r: 0,
    g: 0,
    b: 0
  }
})

setColorList()

/**
 * 设置颜色数组
 */
function setColorList() {
  for (let i = 50; i < 255; i = i + step) {
    for (let j = 50; j < 255; j = j + step) {
      for (let k = 50; k < 255; k = k + step) {
        list.value.push({
          hexString: '#' + i.toString(16) + j.toString(16) + k.toString(16),
          r: i,
          g: j,
          b: k
        })
      }
    }
  }
}

function setColor(hexString: string, r: number, g: number, b: number) {
  hexColor.color = {r, g, b}
}

</script>

<style scoped lang="scss">
$c-f-color: #5e5e5e;
$c-f-color1: #ffffff;
$c-bg-color: #1a1a1a;
$c-bg-color1: #000000;
$c-bg-color2: #ffffff;
$c-bg-color3: #272a30;
$c-bg-color4: #646cff;

.flex-col {
  display: flex;
  flex-direction: column;
}

.main-wrapper {
  height: 100%;
  width: 100%;
  display: flex;

  .select-wrap {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    background-color: $c-bg-color3;
    height: 100%;
    width: 20%;
    margin: 2%;
    border-radius: 1rem;
    overflow: auto;

    .item-wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .item {
        border-radius: 50%;
        width: 2em;
        height: 2rem;
        margin: .6rem;
      }

      .text {
        font-size: .7rem
      }
    }

    &:last-child {
      margin: 0 0 0 2%;
    }

    &:first-child {
      margin: 0 2% 0 0;
    }

    &::-webkit-scrollbar {
      display: none
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
