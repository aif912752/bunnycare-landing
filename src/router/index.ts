import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'  // ทำการ import คอมโพเนนต์ Home

const routes = [
  { path: '/', component: Home },  // ใช้ component ที่ import มา
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
