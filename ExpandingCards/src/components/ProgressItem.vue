<template>
    <div class="main-wrap">
      {{props.msg}}
    </div>
</template>

<script setup lang="ts">

let props = defineProps({
  msg:{
    type:String,
    default:''
  }
})
</script>

<style scoped lang="scss">
$mainColor: #11b4fa;

.main-wrap{
  border-radius: 50%;
  height: 100%;
  width: 100%;
  border: 5px solid $mainColor;
  color: $mainColor;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
