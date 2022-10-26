<template>
  <div :class="props.isActivated ? 'main-container-act' : 'main-container'">
    {{props.buttonText || ''}}
  </div>
</template>

<script setup lang="ts">
let props = defineProps({
  //按钮文字
  buttonText: {
    type: String,
    default: ''
  },

  // 按钮是否激活
  isActivated:{
    type:Boolean,
    default:false,
  }
})
</script>

<style scoped lang="scss">
$c-f-color: #5e5e5e;
$c-f-color1: #ffffff;
$c-bg-color: #1a1a1a;

.main-container {
  color: $c-f-color;
  margin: .2rem 1.5rem;
  border-radius: .4rem;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .2rem .5rem;
  min-width: 2rem;
  font-size: .5em;
  cursor: pointer;
}

.main-container:hover {
  @extend .main-container;
  background-color: $c-bg-color;
  color: $c-f-color1;
}

.main-container-act {
  @extend .main-container;
  background-color: $c-bg-color;
  color: $c-f-color1;
}
</style>
