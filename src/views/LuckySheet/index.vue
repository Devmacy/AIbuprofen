<template>
  <div class="main-wrapper">
    <div class="container" id="luckysheet">
      123
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "LuckySheet"
}
</script>

<script lang="ts" setup>

const options = {
  container: 'luckysheet', //luckysheet is the container id
  showinfobar:false,
}
// luckysheet.create(options)
</script>

<style scoped lang="scss">
$c-f-color: #5e5e5e;
$c-f-color1: #ffffff;
$c-bg-color: #1a1a1a;
$c-bg-color1: #000000;
$c-bg-color2: #ffffff;
$c-bg-color3: #272a30;
$c-bg-color4: #646cff;
$c-bg-glass-color: rgba(255, 255, 255, 0.1);

.flex-col {
  display: flex;
  flex-direction: column;
}

.main-wrapper {
  height: 100%;
  width: 100%;
  display: flex;

  .container {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, #8f41e9, #578aef);
    padding: .1rem;
    border-radius: 1rem;
    overflow: auto;
  }
}
</style>
