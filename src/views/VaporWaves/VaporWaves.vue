<template>
  <div class="main-wrap">
    <div class="container">

    </div>

    <div class="grip-container">
      <div class="grid"></div>
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
  flex-direction: column;
  align-items: center;

  // 生成渐变背景
  .container {
    height: 50%;
    width: 70%;
    background: radial-gradient(circle at 50% 100%, $color1, $color2);
    position: relative;
    border-radius: 1rem 1rem 0 0;
    -webkit-box-reflect: below -50px linear-gradient(rgba(255, 255, 255, .2), transparent);


    // 使用伪元素
    &::before {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      background: radial-gradient(circle at 50% 100%, $color4, $color3 50%, transparent 50%, transparent);
      //background-image: radial-gradient(farthest-side at 50% 100%, $color4 0%, $color3 50.1%, transparent 50%, transparent);
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

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: repeating-linear-gradient(90deg,
          transparent 0,
          transparent 3px,
          rgba(0, 0, 0, .5) 4px,
          rgba(0, 0, 0, .5) 5px);
    }
  }

  .grip-container{
    //height: 20%;
    //width: 100%;
    background-color: #ffffff;
    //perspective: 300px;
    position: relative;

    .grid {
      position: absolute;
      width: 100%;
      height: 600px;
      background-color: black;
      left: -100vw;
      top: 55vh;
      transform-style: preserve-3d;
      background:
          repeating-linear-gradient(red, red 1px, transparent 1px, transparent 20px),
          repeating-linear-gradient(90deg, red, red 1px, transparent 1px, transparent 20px);
      transform: translate3d(0, 0, 0) rotateX(90deg);
      transform-origin: 50% 0;
    }
  }
}
</style>
