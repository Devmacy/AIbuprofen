<script setup lang="ts">
import NavigatorList from "./components/NavigatorList.vue";
</script>

<template>
  <div class="main-wrap">

    <div class="top-container">
      <div class="content-container">
        <router-view />
      </div>
    </div>

    <div class="footer-container">
      <NavigatorList class="navigator-wrap"></NavigatorList>
    </div>
  </div>

</template>

<style scoped lang="scss">
$bgColor: #1b1f24;
$bgColor-1:#272a30;
$c-shadow:0 0 1rem #000000;

.main-wrap {
  background-color: $bgColor;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .top-container {
    height: 92%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .content-container{
      height: 95%;
      width: 98%;
      border-radius: .5rem;
      background-color: $bgColor-1;
      color: #ffffff;
      box-shadow: $c-shadow;
    }
  }

  .footer-container {
    height: 8%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;

    .navigator-wrap{
      height: 80%;
      width: 98%;
      border-radius: .5rem;
      background-color: $bgColor-1;
      box-shadow: $c-shadow;
      color: #ffffff;
    }
  }
}
@media all {

}

</style>
