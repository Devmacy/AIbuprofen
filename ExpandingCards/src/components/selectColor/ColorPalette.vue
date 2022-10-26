<template>
  <div class="main-wrapper">
    <div class="select-wrap">
      <div class="item-wrap" v-for="(item,index) in list" :key="index">
        <div class="item" :style="{backgroundColor:item.hexString}"/>
        <div class="text">{{item.hexString}}</div>
      </div>
    </div>

    <div class="container">
      <div class="input-container">
        <div class="item">
          R<input class="input-content" v-model="hexColor.r">
        </div>
        <div class="item">
          G<input class="input-content" v-model="hexColor.g">
        </div>
        <div class="item">
          B<input class="input-content" v-model="hexColor.b">
        </div>
      </div>

      <div class="color-container"
           :style="{backgroundColor: getHexOrRgbString(hexColor.r,hexColor.g,hexColor.b,'rgb')}"/>
      <div>{{ getHexOrRgbString(hexColor.r, hexColor.g, hexColor.b, 'hex') }}</div>
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

interface listType {
  hexString: string
}

const list = ref([] as listType[])
//设置颜色间隔差异
const step = 30

const hexColor = reactive({
  r: 0,
  g: 0,
  b: 0
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
          hexString: '#' + i.toString(16) + j.toString(16) + k.toString(16)
        })
      }
    }
  }
}

/**
 * 返回一个十六进制或rgb类型的字符串从数字中
 * @param r 红
 * @param g 绿
 * @param b 蓝
 * @param type 类型
 */
function getHexOrRgbString(r: number, g: number, b: number, type: string): string {
  if (type === 'rgb') {
    return `rgb(${r},${g},${b})`
  } else if (type === 'hex') {
    let R = Number(r).toString(16)
    let G = Number(g).toString(16)
    let B = Number(b).toString(16)
    return `#${R}${G}${B}`
  }else{
    return ''
  }
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

    .item-wrap{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .item {
        width: 2em;
        height: 2rem;
        margin: .6rem;
      }

      .text{
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

  .container {
    height: 20%;
    width: 20%;
    background-color: $c-bg-color3;
    border-radius: 1rem;
    color: $c-f-color1;
    display: flex;
    align-items: center;
    padding: 0 1rem;

    .input-container {
      display: flex;
      flex-direction: column;

      .item {
        margin: 1rem 0;

        .input-content {
          margin: 0 2rem;
          width: 5rem;
          background: $c-bg-color;
          color: $c-f-color1;
        }
      }
    }

    .color-container {
      margin-left: 1rem;
      width: 2rem;
      height: 2rem;
    }
  }

}
</style>
