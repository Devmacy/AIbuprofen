<template>
  <div class="main-wrap">
    <div class="container">

    </div>
  </div>
</template>

<script>
export default {
  name: "VaporWaves"
}
</script>

<script setup>

</script>

<style scoped lang="scss">
$c-f-color: #5e5e5e;
$c-f-color1: #ffffff;
$c-bg-color: #1a1a1a;
$c-bg-color1: #000000;
$c-bg-color2: #ffffff;
$c-bg-color3: #272a30;
$c-bg-color4: #646cff;

$color1: #ff2929;
$color2: #e53b9b;
$color3: #ffdd00;
$color4: #fc4294;

.main-wrap {
  height: 100%;
  width: 100%;
  background-color: $c-bg-color3;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  // 生成渐变背景
  .container {
    height: 98%;
    width: 98%;
    background: radial-gradient(circle at 50% 100%, $color1, $color2);
    border-radius: 1rem;
    position: relative;

    // 使用伪元素
    &::before {
      position: absolute;
      content: '';
      bottom: 20%;
      left: 10%;
      right: 10%;
      top: 10%;
      background: radial-gradient(circle at 50% 100%, $color4, $color3 55%, transparent 55.1%, transparent);
      //  使用mask,遮罩
      -webkit-mask-image: linear-gradient(to top,
          #000 0, #000 10%,
          transparent 10%, transparent 13%,
          #000 13%, #000 20%,
          transparent 20%, transparent 22%,
          #000 22%, #000 35%,
          transparent 35%, transparent 36%,
          #000 36%, #000 100%);
    }
  }
}
</style>
