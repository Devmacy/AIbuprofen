<template>
  <div class="main-wrap">
    <div class="progress-wrap">
      <ProgressItem class="item-wrap" v-for="(item,index) in list" :key="index" :msg="item.msg"></ProgressItem>
    </div>

    <div class="function-wrap">
      <button :class="index === 0 ? 'no-use-wrap' : 'button-wrap'" @click="setIndex('sub')" :disabled="index === 0">
        上一步
      </button>
      <button :class="index === list.length ? 'no-use-wrap' : 'button-wrap'" @click="setIndex('add')"
              :disabled="index === list.length">
        下一步
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue'
import ProgressItem from "./ProgressItem.vue";

// 定义数组接口
interface listType {
  msg: string
}

// 定义数组
const list: listType[] = reactive([])
list.push(...[
  {
    msg: '123'
  },
  {
    msg: '123'
  },
  {
    msg: '123'
  }, {
    msg: '123'
  }, {
    msg: '123'
  }
])

// 定义索引
let index = ref(0)

/**
 *
 * @param func 什么功能
 */
function setIndex(func: string): void {
  switch (func) {
    case 'add':
      if (index.value !== list.length) {
        index.value = index.value + 1
      }
      break;
    case 'sub':
      if (index.value !== 0) {
        index.value -= 1
      }
      break;
  }
}
</script>

<style scoped lang="scss">
.flex-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-wrap {
  display: flex;
  flex-direction: column;

  .progress-wrap {
    @extend .flex-wrap;
    justify-content: space-around;

    .item-wrap {
      width: 6rem;
      height: 6rem;
      margin: 1rem;
    }
  }

  .function-wrap {
    @extend .flex-wrap;
    justify-content: center;

    .com-btn-wrap {
      margin: 1rem;
      border-radius: .3rem;
    }

    .button-wrap {
      @extend .flex-wrap, .com-btn-wrap;
      background-color: #646cff;
      color: #ffffff;
    }

    //  不可用的按钮
    .no-use-wrap {
      @extend .flex-wrap, .com-btn-wrap;
      background-color: #ffffff;
      color: #1a1a1a;
    }
  }
}
</style>
