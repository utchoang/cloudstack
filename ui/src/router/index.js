import { createRouter, createWebHistory } from 'vue-router'
import { constantRouterMap } from '@/config/router'
console.log(constantRouterMap)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRouterMap
})

export default router
