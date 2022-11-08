<template>
  <div class="main-wrap">

    <div style="height: 5%"></div>

    <div class="item-wrap">
        <div v-for="(item,index) in list" :key="index" class="item">
          <div class="back-item" :style="{backgroundColor: getHexOrRgbString(item.r,item.g,item.b,'rgb')}"
               @click="getSelectColor(item)"></div>
        </div>
    </div>

    <div style="height: 5%"></div>

  </div>
</template>

<script lang="ts">
export default {
  name: "ColorList"
}
</script>

<script setup lang="ts">
// 定义颜色类型接口
import {ref} from "vue";
import {getRandomNumberLR} from "@/utils/NumberUtils/randomNumbe";
import {getHexOrRgbString} from "@/utils/ColorUtils/transformColor";

import {storeToRefs} from "pinia";
import {useColorStore} from "@/store/color";
const colorStore = useColorStore()
const {colorR, colorG, colorB} = storeToRefs(colorStore)

interface listType {
  r: number,
  g: number,
  b: number
}

//定义点击事件
const emits = defineEmits(['getSelectedColor'])

// 定义颜色数组
const list = ref([] as listType[])
// 设置颜色多少
const listSize = 300
// 设置rgb最大最小值
const min = 0
const max = 255;
init()

// 初始化
function init() {
  setColorList(listSize)
}

/**
 * 设置随机颜色
 * @param size 颜色大小
 */
function setColorList(size: number) {
  for (let i = 0; i < size; i++) {
    list.value.push({
      r: getRandomNumberLR(min, max),
      g: getRandomNumberLR(min, max),
      b: getRandomNumberLR(min, max)
    })
  }
}

/**
 * 获取当前点击的元素
 * @param item 当前点击的元素
 */
function getSelectColor(item: { r: number; g: number; b: number; }): void {
  // 更改store状态
  colorStore.changeState(item.r,item.g,item.b)
}

</script>

<style scoped lang="scss">
.main-wrap {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  .item-wrap {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none
    }

    .back-item {
      border-radius: 30%;
      width: 4rem;
      height: 4rem;
      margin: .6rem;
      box-shadow:
          -.5rem -.5rem .5rem #171718,
          .5rem .5rem .5rem #2d3037;

      &:active{
        @extend .back-item;
        width: 3.8rem;
        height: 3.8rem;
        box-shadow:
            inset 0 0 .2rem #000000,
            inset -0.1rem -0.1rem .2rem #ffffff;
      }
    }
  }
}
</style>
