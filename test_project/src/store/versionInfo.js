import { defineStore } from "pinia";

const useVersionInfoStore = defineStore("version", {
  state: () => ({
    versionName: "高级版本",
    versionRemark: "独立摄影师",
  }),
});

export default useVersionInfoStore;
