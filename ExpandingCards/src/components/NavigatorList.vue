<template>
  <div class="container">
    <div class="left-container">

    </div>

    <div class="split-line"></div>

    <div class="middle-container">

    </div>

    <div class="right-container">
      <div>{{year}}-{{today}}</div>
      <div>{{time}}</div>
    </div>

  </div>
</template>

<script setup lang="ts">

import {CurrentTime} from "@/utils/timeUtils"
import {ref} from "vue";

let date = new CurrentTime(new Date().getTime(),'yyyy-MM-dd')

let today = ref(date.formatterTime('MM'))
let year = ref(date.formatterTime('yyyy')) || ''
let time = ref(date.formatterTime('hh:mm:ss')) || ''

// setInterval(()=>{
//   time.value = getCurrentTime('hh:mm:ss') || ''
// },1000)

</script>

<style scoped lang="scss">
$c-bg-color:#ffffff;


.container{
  color: $c-bg-color;
  display: flex;
  align-items: center;

  .left-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: .5rem;
    //border: .1rem solid $c-bg-color;
    margin: 0 0 0 .5rem;
    padding: 0 1rem;
    font-size: 1rem;
    width: 3%;
  }

  .split-line{
    border-left: $c-bg-color solid .1rem;
    margin: .1rem 1rem;
    height: 60%;
    width: 1%;
  }

  .middle-container{
    width: 91%;
  }

  .right-container{
  //display: flex;
 //   flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: .5rem;
    border: .1rem solid $c-bg-color;
    margin: 0 0 0 .5rem;
    padding: 0 1rem;
    font-size: 1rem;
   // width: 5%;
  }
}
</style>
