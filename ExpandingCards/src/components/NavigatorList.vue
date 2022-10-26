<template>
  <div class="container">
    <div class="left-container">

    </div>

    <div class="split-line"></div>

    <div class="middle-container">
      <list-item button-text="取色板" :is-activated="true" @click="test"/>
    </div>

    <div class="right-container">
      <div class="text-container">
        <div>{{ year }}-{{ today }}</div>
        <div>{{ time }}</div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

import {CurrentTime} from "@/utils/timeUtils"
import {ref} from "vue";
import ListItem from "@/components/ListItem.vue";
import {useRouter} from "vue-router";

// 定义路由
const router= useRouter()

let date = new CurrentTime(new Date().getTime(), 'yyyy-MM-dd')

let today = ref(date.formatterTime('MM')) || ''
let year = ref(date.formatterTime('yyyy')) || ''
let time = ref(date.formatterTime('hh:mm:ss')) || ''

// setInterval(()=>{
//   let date = new CurrentTime(new Date().getTime(),'yyyy-MM-dd')
//   time.value = date.formatterTime('hh:mm:ss') || ''
// },1000)

function test() {
  router.push('/ColorPalette')
}

</script>

<style scoped lang="scss">
$c-bg-color: #ffffff;


.container {
  color: $c-bg-color;
  display: flex;
  align-items: center;

  .left-container {
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

  .split-line {
    border-left: $c-bg-color solid .1rem;
    margin: .1rem 1rem;
    height: 60%;
    width: 1%;
  }

  .middle-container {
    width: 91%;
    display: flex;
    height: 100%;
    align-items: center;
  }

  .right-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    height: 100%;
    width: 5%;

    .text-container {
      height: 70%;
      border: .1rem solid $c-bg-color;
      border-radius: .5rem;
      padding: 0 .2rem;
      margin: .2rem .5rem;
      font-size: .9em;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
