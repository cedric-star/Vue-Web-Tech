import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Start from '../views/Start.vue'
import Home from '../views/Home.vue'
import Cooking from '../views/Cooking.vue'
import Baking from '../views/Baking.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    name: 'home2',
    component: Home
  },
  {
    path: '/start',
    name: 'start',
    component: Start
  },
  {
    path: '/cooking',
    name: 'cooking',
    component: Cooking
  },
  {
    path: '/baking',
    name: 'baking',
    component: Baking
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
