<template>
  <div class="main-wrap-slide-color-select">

    <div class="slide-wrap">

      <div class="slide-item">
        <div class="text">R</div>
        <el-slider class="slide" :min="min" :max="max" v-model="colorR" show-input @change="getRGBColor($event,'R')"/>
      </div>

      <div class="slide-item">
        <div class="text">G</div>
        <el-slider class="slide" :min="min" :max="max" v-model="colorG" show-input @change="getRGBColor($event,'G')"/>
      </div>

      <div class="slide-item">
        <div class="text">B</div>
        <el-slider class="slide" :min="min" :max="max" v-model="colorB" show-input @change="getRGBColor($event,'B')"/>
      </div>

      <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          class="slide-item"
      >
        <div class="text">十六进制</div>
        <el-form-item prop="hexString" class="slide">
          <el-input maxlength="6" clearable v-model="ruleForm.hexString"
                    @input="getRGBFromInput"/>
        </el-form-item>
      </el-form>
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
import {storeToRefs} from "pinia";
import {getRGBFromHexString} from "@/utils/ColorUtils/transformColor";

// 定义store
const colorStore = useColorStore()
const {colorR, colorG, colorB} = storeToRefs(colorStore)

const min = ref(0)
const max = ref(255)

/**
 * 十六进制字符串校验规则
 * @param rule
 * @param value
 * @param callback
 */
const getHexStringPass = (rule: any, value: any, callback: any) => {
  const pattern = /[^0-9a-f]+/gi

  if (value.length !== 3 && value.length !== 6) {
    callback(new Error('请输入3个或6个字符'))
  }
  if (pattern.test(value)) {
    callback(new Error('请输入正确的字符或者非中文'))
  }
}

// 定义表单
const ruleForm = reactive({
  hexString: '',
})

// 定义表单规则规则
const rules = reactive({
  hexString: [{
    validator: getHexStringPass,
    trigger: ['change']
  }]
})

/**
 * 从输入框获取rgb颜色
 * @param event 事件
 */
const getRGBFromInput = (event: any) => {
  const pattern = /[^0-9a-f]+/gi

  if (event.length !== 3 && event.length !== 6) {
    return
  }
  if (pattern.test(event)) {
    return
  }

  // 定义接口
  interface rgbColor {
    R: number,
    G: number,
    B: number
  }

  // 十六进制转rgb
  let rgbObj = getRGBFromHexString(event) as rgbColor
  colorR.value = rgbObj.R
  colorG.value = rgbObj.G
  colorB.value = rgbObj.B
}

/**
 * 页面改变时触发事件
 * 给store赋值
 * @param event 事件
 * @param pos 位置
 */
function getRGBColor(event: number, pos: string): void {
  switch (pos) {
    case 'R':
      colorR.value = event
      break;
    case 'G':
      colorG.value = event
      break;
    case 'B':
      colorB.value = event
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
    align-items: center;

    .text {
      width: 10%;
      display: flex;
      justify-content: center;
      font-size: 1.4rem;
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
