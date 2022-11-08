<template>
  <div class="main-wrap-slide-color-select">

    <div class="slide-wrap">

      <div class="slide-item">
        <div class="text">R</div>
        <input class="slide" :min="min" :max="max" :value="data.RGBColor.r" name="R" type="range" step="1">
        <input class="input-container" :value="data.RGBColor.r">
      </div>

      <div class="slide-item">
        <div class="text">G</div>
        <input class="slide" :min="min" :max="max" :value="data.RGBColor.g" name="G" type="range" step="1">
        <input class="input-container" :value="data.RGBColor.g">
      </div>

      <div class="slide-item">
        <div class="text">B</div>
        <input class="slide" :min="min" :max="max" :value="data.RGBColor.b" name="B" type="range" step="1">
        <input class="input-container" :value="data.RGBColor.b">
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

const min = ref(0)
const max = ref(255)

const data = reactive({
  RGBColor:{
    r:0,
    g:0,
    b:0
  }
})

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

  .slide-item{
    display: flex;
    justify-content: space-around;

    .text {
      width: 10%;
      display: flex;
      justify-content: center;
    }

    .slide{
      width: 70%;
    }

    .input-container{
      width: 10%;
    }
  }
}
</style>
