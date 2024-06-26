import { createApp } from "vue";
import App from "./App.vue";
import "vant/lib/index.css";
import pinia from "./store";

const app = createApp(App);
app.use(pinia);
app.mount("#app");
