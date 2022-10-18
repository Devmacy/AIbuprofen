<script setup lang="ts">
import ExpandCards from "./components/ExpandCards.vue";
import ProgressItem from "./components/ProgressItem.vue";
import ProgressWrap from "./components/ProgressWrap.vue";
</script>

<template>
  <div class="main-wrap">
<!--    <ExpandCards></ExpandCards>-->
    <ProgressWrap class="progress-wrap"></ProgressWrap>

<!--    <img :src="()=>import('./assets/R.jpg')" alt="132"/>-->
  </div>
</template>

<style scoped lang="scss">
$bgColor:#ffffff;

.main-wrap{
  /*background:linear-gradient(45deg,#747bff, #63f253,#747bff, #f674ff);*/
  background-color: $bgColor;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;

  .progress-wrap{
    width: 50%;
    height: 30%;
  }
}


</style>
