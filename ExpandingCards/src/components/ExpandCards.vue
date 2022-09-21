<template>
  <div class="main-container">
    <img alt="none photo" :class="photoIndex === index ? 'expand-img-wrap' : 'img-wrap'"
         v-for="(item,index) in photoList" :key="index" :src="imgUrl" @click="setPhotoIndex(index)"
         class="img-wrap"/>
  </div>

</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import imgUrl from '../assets/R.jpg'
// 定义数组类型
interface listType {
  id: string
  value?: number | string
  url?: string
}

// 创建图片数组
const photoList: listType[] = reactive([])
// 创建当前索引
let photoIndex = ref<number>(0)

// 数组使用reactive赋值
photoList.push(...[
    // {id:'',url:imgUrl},{id:'',url:''},{id:'',url:''},{id:'',url:''},{id:'',url:''},{id:'',url:''},{id:'',url:''},
  {
  id: '1',
  url: "https://th.bing.com/th/id/R.600958982c0da63858554ae70bcd40cc?rik=cLCY%2bkGidqMqhg&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20170911%2f156fce34b4c64235977e354004fa8f28.jpeg&ehk=VGHE7%2f2hbzihYm6b2wdQE9grp5h7%2bA0gWWpixstw7fo%3d&risl=&pid=ImgRaw&r=0"
}, {
  id: '1',
  url: "https://th.bing.com/th/id/R.600958982c0da63858554ae70bcd40cc?rik=cLCY%2bkGidqMqhg&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20170911%2f156fce34b4c64235977e354004fa8f28.jpeg&ehk=VGHE7%2f2hbzihYm6b2wdQE9grp5h7%2bA0gWWpixstw7fo%3d&risl=&pid=ImgRaw&r=0"
}, {
  id: '2',
  url: "https://th.bing.com/th/id/R.600958982c0da63858554ae70bcd40cc?rik=cLCY%2bkGidqMqhg&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20170911%2f156fce34b4c64235977e354004fa8f28.jpeg&ehk=VGHE7%2f2hbzihYm6b2wdQE9grp5h7%2bA0gWWpixstw7fo%3d&risl=&pid=ImgRaw&r=0"
}, {
  id: '2',
  url: "https://th.bing.com/th/id/R.600958982c0da63858554ae70bcd40cc?rik=cLCY%2bkGidqMqhg&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20170911%2f156fce34b4c64235977e354004fa8f28.jpeg&ehk=VGHE7%2f2hbzihYm6b2wdQE9grp5h7%2bA0gWWpixstw7fo%3d&risl=&pid=ImgRaw&r=0"
}, {
  id: '2',
  url: "https://th.bing.com/th/id/R.600958982c0da63858554ae70bcd40cc?rik=cLCY%2bkGidqMqhg&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20170911%2f156fce34b4c64235977e354004fa8f28.jpeg&ehk=VGHE7%2f2hbzihYm6b2wdQE9grp5h7%2bA0gWWpixstw7fo%3d&risl=&pid=ImgRaw&r=0"
}, {
  id: '2',
  url: "https://th.bing.com/th/id/R.600958982c0da63858554ae70bcd40cc?rik=cLCY%2bkGidqMqhg&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20170911%2f156fce34b4c64235977e354004fa8f28.jpeg&ehk=VGHE7%2f2hbzihYm6b2wdQE9grp5h7%2bA0gWWpixstw7fo%3d&risl=&pid=ImgRaw&r=0"
}, {
  id: '2',
  url: "https://th.bing.com/th/id/R.600958982c0da63858554ae70bcd40cc?rik=cLCY%2bkGidqMqhg&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20170911%2f156fce34b4c64235977e354004fa8f28.jpeg&ehk=VGHE7%2f2hbzihYm6b2wdQE9grp5h7%2bA0gWWpixstw7fo%3d&risl=&pid=ImgRaw&r=0"
}])


/**
 * 设置点击的索引为全局索引
 * @param clickIndex
 */
function setPhotoIndex(clickIndex: number) {
  photoIndex.value = clickIndex
}


</script>

<style scoped lang="scss">
.main-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;

  .img-wrap {
    max-width: 5%;
    min-width: 0.1%;
    height: 90%;
    border-radius: 2rem;
    margin: 1%;
    cursor: pointer;
    box-shadow: 0 0 0.5rem rgba(248, 248, 248, 0.98);
    // 贝塞尔曲线
    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    //  图片自适应
    object-fit: cover;
  }

  .expand-img-wrap {
    @extend .img-wrap;
    max-width: 30%;
    min-width: 30%;
  }
}
</style>
