import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Start from '../views/Start.vue'
import Home from '../views/Home.vue'
import Cooking from '../views/Cooking.vue'
import Baking from '../views/Baking.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {title:'Home Page'}
  },
  {
    path: '/home',
    name: 'home2',
    component: Home,
    meta: {title:'Home Page'}
  },
  {
    path: '/start',
    name: 'start',
    component: Start,
    meta: {title:'Home Page'}
  },
  {
    path: '/cooking',
    name: 'cooking',
    component: Cooking,
    meta: {title:'Home Page'}
  },
  {
    path: '/baking',
    name: 'baking',
    component: Baking,
    meta: {title:'Home Page'}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from) => {
  document.title = to.meta.title ?? 'Default Title';
  console.log(to.toString());
  console.log(from.toString());
  console.log(to.meta.title);
})



export default router
