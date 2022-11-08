<template>
  <div class="main-wrapper">
    <ColorList @getSelectedColor="setSelectedColor" class="select-wrap"/>

    <div class="operation-wrap">
      <ShowColor class="show-color-cont"  style="overflow: hidden"
                 :rgb-list="[`${hexColor.color.r}`,`${hexColor.color.g}`,`${hexColor.color.b}`]"/>

      <div class="show-color-cont" style="margin: 10% 0 0 0;overflow: hidden">
        <slide-color-select></slide-color-select>
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
import {reactive} from "vue";
import ShowColor from "@/views/SelectColor/component/ShowColor.vue";
import ColorList from "@/views/SelectColor/component/ColorList.vue";
import {XPoet} from "@/common/api";
import SlideColorSelect from "@/views/SelectColor/component/slideColorSelect.vue";

XPoet().then((data)=>{
  console.log(data)
})

// 定义rgb颜色
const hexColor = reactive({
  color: {
    r: 0,
    g: 0,
    b: 0
  }
})

function setSelectedColor(params:any){
  console.log(params)
  const {r,g,b} = params.data
  hexColor.color = {r,g,b}
}

</script>

<style scoped lang="scss">
$c-f-color: #5e5e5e;
$c-f-color1: #ffffff;
$c-bg-color: #1a1a1a;
$c-bg-color1: #000000;
$c-bg-color2: #ffffff;
$c-bg-color3: #272a30;
$c-bg-color4: #646cff;

.flex-col {
  display: flex;
  flex-direction: column;
}

.main-wrapper {
  height: 100%;
  width: 100%;
  display: flex;

  .select-wrap {
    background-color: $c-bg-color3;
    height: 100%;
    width: 20%;
    margin: 2%;
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
