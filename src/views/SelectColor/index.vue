<template>
  <div class="main-wrapper">
    <div class="container">
      <ColorList class="select-wrap"/>
    </div>


    <div class="operation-wrap">
      <ShowColor class="show-color-cont" style="overflow: hidden"/>

      <div class="show-color-cont" style="margin: 10% 0 0 0;overflow: hidden">
        <slide-color-select></slide-color-select>
      </div>

      <div class="show-color-cont" style="margin: 10% 0 0 0;overflow: hidden">
        <show-image></show-image>
      </div>
    </div>


  </div>
</template>

<script lang="ts">
export default {
  name: "ColorPalette"
}
</script>

<script lang="ts" setup>
import ShowColor from "@/views/SelectColor/component/ShowColor.vue";
import ColorList from "@/views/SelectColor/component/ColorList.vue";
import SlideColorSelect from "@/views/SelectColor/component/slideColorSelect.vue";
import {onMounted} from "vue";
import ShowImage from "@/views/SelectColor/component/ShowImage.vue";

onMounted(() => {

})

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
    width: 20%;
    margin: 2%;
    background: linear-gradient(to right, #8f41e9, #578aef);
    padding: .1rem;
    border-radius: 1rem;
    overflow: auto;

    &:last-child {
      margin: 0 0 0 2%;
    }

    &:first-child {
      margin: 0 2% 0 0;
    }

    &::-webkit-scrollbar {
      display: none
    }

    .select-wrap {
      border-radius: 1rem;
      background-color: $c-bg-color3;
    }
  }


  .operation-wrap {
    width: 20%;
    height: 100%;
    border-radius: 1rem;
    @extend .flex-col;

    .show-color-cont {
      background-color: $c-bg-color3;
      width: 100%;
      height: 20%;
      margin: 0 auto;
      border-radius: inherit
    }
  }
}
</style>
