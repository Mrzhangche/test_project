<template>
  <div class="contanier">
    <div>
      <NavBar title="标题" />
    </div>
    <div class="versionClass">
      <div v-for="item in versionData" :key="item.value">
        <versionCompon
          :class="{ cardActive: item.isUse }"
          :version-info="item"
          @version-click="versionChange"
        ></versionCompon>
      </div>
    </div>
    <div class="titleClass">
      <div class="title_content">
        <p style="font-weight: 600; font-size: 20px">
          {{ versionInfo.versionName }}
        </p>
        <div class="title_remark">
          <p>(适合</p>
          <p style="color: red">{{ versionInfo.versionRemark }})</p>
        </div>
      </div>
      <div class="title_main">
        <div style="margin: 3vw" v-for="item in titleData" :key="item.id">
          <titleCompon :titleInfo="item" @title-click="dialog"></titleCompon>
        </div>
      </div>
    </div>
  </div>
  <!-- dialog框 -->
  <Popup v-model:show="showDialog" :style="{ height: '40%', width: '60%' }">
    <div style="text-align: center; padding: 10px">
      <p style="font-weight: 600; font-size: 4vw; text-align: left">
        {{ dialogTitle }}
      </p>
      <span
        style="font-size: 3vw; text-align: left; color: gray"
        v-for="index in 9"
        :key="index"
      >
        {{ dialogContent }}
      </span>
    </div>
  </Popup>
</template>

<script setup>
import { ref } from "vue";
import { NavBar, Popup } from "vant";
//引入组件
import titleCompon from "./components/titleCompon.vue";
import versionCompon from "./components/versionCompon.vue";

//引入pinia
import useVersionInfoStore from "./store/versionInfo";
const versionInfo = useVersionInfoStore();

//引入数据
import getVersionData from "./service/getVersionData";
let versionData = ref(getVersionData);

import getTitleData from "./service/getTitleData";

let titleData = ref(getTitleData);

//自定义数据
let showDialog = ref(false);

//自定义事件
function versionChange(e) {
  //去掉e.versionRemark中的前两个字符

  versionInfo.versionName = e.versionName;
  versionInfo.versionRemark = e.versionRemark.slice(2);
  //改变version中的isuse的值
  versionData.value.forEach((item) => {
    if (item.value === e.value) {
      item.isUse = true;
    } else {
      item.isUse = false;
    }
  });
  //改变titleData中的isused值
  titleChange(e.value);
}

//改变titleData中的isused值
function titleChange(e) {
  //当e为senior时，将titleData中id为5，6，7，8，9的项isused值改为false
  if (e === "senior") {
    titleData.value[4].isUse = false;
    titleData.value[5].isUse = false;
    titleData.value[6].isUse = false;
    titleData.value[7].isUse = false;
    titleData.value[8].isUse = false;
  } else {
    //当e为custom时，所有项的isused值改为true
    titleData.value.forEach((item) => (item.isUse = true));
  }
}

//弹出框
let dialogTitle = ref("");
let dialogContent = ref("");
function dialog(e) {
  console.log(e, versionInfo.versionName);
  dialogTitle.value = `${versionInfo.versionName}-${e.title}`;
  dialogContent.value = versionInfo.versionName + "正文";
  showDialog.value = true;
}
</script>

<style scoped>
/* 使用媒体监听，实现自动适配 */
/* 视口宽度最小为320px，最大为640px时，呈现样式 */
@media (min-width: 320px) and (max-width: 640px) {
  .contanier {
    background-color: #f7f7f7;
    height: 100vh;
  }
}

/* 视口宽度最小为640px，最大为1024px时，呈现样式 */
@media (min-width: 640px) and (max-width: 1024px) {
  .contanier {
    background-color: #f7f7f7;
    height: 100vh;
  }
}

/* 视口宽度最小为1024px，最大为1600px时，呈现样式 */
@media (min-width: 1024px) and (max-width: 1600px) {
  .contanier {
    background-color: #f7f7f7;
    height: 100vh;
  }
}
.versionClass {
  /* 内部元素水平居中 */
  display: flex;
  background-color: white;
  justify-content: center;
}
.titleClass {
  background-color: white;

  margin-top: 10px;
}
.titleClass .title_content {
  /* 内部元素靠左 */
  display: flex;
  justify-content: flex-start;
  margin: 15px;
}
.titleClass .title_remark {
  display: flex;
  position: relative;
  top: 10px;
  bottom: 0px;

  color: #b8b8b8;
  margin-left: 10px;
}
.titleClass .title_main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
