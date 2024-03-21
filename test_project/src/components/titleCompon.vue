<template>
  <!--圆形img  -->
  <div v-if="titleInfo.isUse" @click="titleClick(titleInfo)">
      <div class="titleCompon">
        <i class="iconfont iconActive">{{ String.fromCharCode(parseInt(titleInfo.icon.replace("&#x", ""), 16)) }}</i>
    </div>
    <div>
        <p class="title">{{titleInfo.title}}</p>
    </div>
  </div>
  <div v-else>
      <div class="titleCompon">
        <i class="iconfont iconUnActive">{{ String.fromCharCode(parseInt(titleInfo.icon.replace("&#x", ""), 16)) }}</i>
    </div>
    <div>
        <p class="title textUnActive">{{titleInfo.title}}</p>
    </div>
  </div>

</template>

<script setup>
//接收参数
defineProps({
  // 定义props
  titleInfo: {
    type: Object,
    default: "未传入标题",
  },
});
//声明事件
const titleEmit = defineEmits(["titleClick"])
function titleClick(e) {
  titleEmit("titleClick",e)
}
</script>

<style scoped>
.titleCompon {
  /* 圆形div */
  width: 12vw;
  height: 12vw;
  background-color: #ffe8e7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
@font-face {
  font-family: "iconfont";
  src: url("../font/iconfont.ttf");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 6vw;
  font-style: normal;
}
.iconActive {
  color: #ec7c77;
}
.iconUnActive {
  color: #f5d0cd;
}
.textUnActive {
  color: #b8b8b8;
}
.title{
  font-size: 3vw;
  text-align: center;
  
 
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>
