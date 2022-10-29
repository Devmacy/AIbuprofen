<template>
  <div class="main-wrap">

    <div class="item-wrap">
      <div v-for="(item,index) in list" :key="index" class="item">
        <div class="back-item" :style="{backgroundColor: getHexOrRgbString(item.r,item.g,item.b,'rgb')}"></div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "RandomColorList"
}
</script>

<script setup lang="ts">
// 定义颜色类型接口
import {ref} from "vue";
import {getRandomNumberLR} from "@/utils/NumberUtils/randomNumbe";
import {getHexOrRgbString} from "@/utils/ColorUtils/transformColor";

interface listType {
  r: number,
  g: number,
  b: number
}

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

function setColorList(size: number) {
  for (let i = 0; i < size; i++) {
    list.value.push({
      r: getRandomNumberLR(min, max),
      g: getRandomNumberLR(min, max),
      b: getRandomNumberLR(min, max)
    })
  }
}

</script>

<style scoped lang="scss">
.main-wrap {
  height: 100%;
  width: 100%;

  .item-wrap {
    display: flex;
    flex-wrap: wrap;

    .back-item {
      border-radius: 50%;
      width: 2em;
      height: 2rem;
      margin: .6rem;
    }
  }
}
</style>
