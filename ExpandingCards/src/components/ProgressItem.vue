<template>
    <div :class="props.isCurrentStage ? 'main-wrap-use' :'main-wrap-no-use'">
      {{props.msg}} {{props.isCurrentStage}}
    </div>
</template>

<script setup lang="ts">

let props = defineProps({
  msg:{
    type:String,
    default:''
  },

  isCurrentStage:{
    type:Boolean,
    default:false
  }
})
</script>

<style scoped lang="scss">
$mainColor: #11b4fa;
$c-no-use-color: #b4b4b2;

.main-wrap{
  border-radius: 50%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-wrap-use{
  @extend .main-wrap;
  border: 5px solid $mainColor;
  color: $mainColor;
}

.main-wrap-no-use{
  @extend .main-wrap;
  border: 5px solid $c-no-use-color;
  color: $c-no-use-color;
}
</style>
