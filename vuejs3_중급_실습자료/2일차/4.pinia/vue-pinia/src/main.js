import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia"; // createPinia() 함수 불러오기
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";

const app = createApp(App);

const pinia = createPinia(); // pinia 인스턴스 생성
pinia.use(piniaPluginPersistedstate);

app.use(pinia); // pinia 인스턴스 등록

app.mount("#app");
