import { createApp } from "vue";
import App from "./src/App.vue";

// 创建Vue应用实例
const app = createApp(App);

// 可以在这里添加全局的配置、插件、组件等

// 挂载Vue应用实例到DOM元素上
app.mount("#app");
