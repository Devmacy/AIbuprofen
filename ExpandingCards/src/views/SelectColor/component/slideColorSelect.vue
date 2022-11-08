<template>
  <div class="main-wrap-slide-color-select">

    <div class="slide-wrap">

      <div class="slide-item">
        <div class="text">R</div>
        <el-slider class="slide" :max="max" v-model="data.RGBColor.r" show-input @change="getRGBColor($event,'R')"/>
      </div>

      <div class="slide-item">
        <div class="text">G</div>
        <el-slider class="slide" :max="max" v-model="data.RGBColor.g" show-input @change="getRGBColor($event,'G')"/>
      </div>

      <div class="slide-item">
        <div class="text">B</div>
        <el-slider class="slide" :max="max" v-model="data.RGBColor.b" show-input @change="getRGBColor($event,'B')"/>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "slideColorSelect"
}
</script>

<script setup lang="ts">
import {reactive, ref} from "vue";
import {useColorStore} from '@/store/color'

const colorStore = useColorStore()

const min = ref(0)
const max = ref(255)

const data = reactive({
  RGBColor: {
    r: 0,
    g: 0,
    b: 0
  }
})

/**
 * 页面改变时触发事件
 * 给store赋值
 * @param event 事件
 * @param pos 位置
 */
function getRGBColor(event: number, pos: string): void {
  switch (pos) {
    case 'R':
      colorStore.color.R = event
      break;
    case 'G':
      colorStore.color.G = event
      break;
    case 'B':
      colorStore.color.B = event
      break;
  }
}

</script>

<style scoped lang="scss">
.main-wrap-slide-color-select {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.slide-wrap {
  display: flex;
  flex-direction: column;
  width: 100%;

  .slide-item {
    display: flex;
    justify-content: space-around;

    .text {
      width: 10%;
      display: flex;
      justify-content: center;
    }

    .slide {
      width: 80%;
      margin: 1% 0 1% 0;
    }

    .slide:first-child {
      margin: 0 0 1% 0;
    }

    .slide:last-child {
      margin: 1% 0 0 0;
    }
  }
}
</style>
