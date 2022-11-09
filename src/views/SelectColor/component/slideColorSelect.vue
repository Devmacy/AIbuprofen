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
          :model="ruleForm"
          :rules="rules"
          class="slide-item"
      >
        <div class="text">十六进制</div>
        <el-input maxlength="6" prop="hexString" class="slide" clearable v-model="ruleForm.hexString">
          <template #prepend>#</template>
        </el-input>
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

// 定义表单
const ruleForm = reactive({
  hexString: '',
})

/**
 * 十六进制字符串校验规则
 * @param rule
 * @param value
 * @param callback
 */
const getHexStringPass = (rule: any, value: any, callback: any) => {
  debugger
  if (value === '') {
    callback(new Error('Please input the password'))
  }
}

// 定义表单规则规则
const rules = reactive({
  hexString: [{
    validator: getHexStringPass,
    trigger: 'blur'
  }]
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

getRGBFromHexString('#ff22ff')

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
