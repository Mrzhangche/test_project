<template>
  <!-- 根据视口变化的card -->
  <div class="card" @click="dataChange(versionInfo)">
    <p class="first_line">{{ versionInfo.versionName }}</p>
    <p class="second_line">{{ versionInfo.versionRemark }}</p>
  </div>
</template>

<script setup>
//接收参数
defineProps({
  // 定义props
  versionInfo: {
    type: Object,
    default: "未传入版本名称",
  },
});
//声明事件
const versionEmit = defineEmits(["versionClick"]);
function dataChange(e) {
  versionEmit("versionClick", e);
}
</script>

<style scoped>
/* 卡片样式，width为视口的45%，height为视口的45% */
.card {
  width: 45vw;
  height: 40vw;
  background-color: #f0f0f0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;
  padding: 0px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.card .first_line {
  /* color: red; */
  font-weight: 600;
  font-size: 20px;
}
.card .second_line {
  color: #b8b8b8;
  font-size: 14px;
}
.cardActive {
  /* 红色细边框，背景淡红色 */
  border: 1px solid red;
  background-color: #fff9f6;
  .second_line {
    color: red;
  }
  color: red;
}
</style>
