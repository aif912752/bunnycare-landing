import { createApp } from "vue";

import "./style.css";
import App from "./App.vue";
import router from './router/index'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App);

app.use(router);

app.mount("#app");

// เรียก AOS.init() หลังจาก mount
AOS.init({
  duration: 1200, // ค่าเริ่มต้นสำหรับทุก animation (ms)
  easing: 'ease-in-out', // รูปแบบการเคลื่อนไหวแบบนุ่มนวล
  once: true, // animation จะเล่นเพียงครั้งเดียวเมื่อเลื่อนผ่าน
});