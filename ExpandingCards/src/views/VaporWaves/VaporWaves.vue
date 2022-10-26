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

.main-wrap{
  height: 100%;
  width: 100%;
  background-color: $c-bg-color3;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .container{
    height: 98%;
    width: 98%;
    background: #646cff;
  }
}
</style>
