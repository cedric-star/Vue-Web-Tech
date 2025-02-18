import { createRouter, createWebHistory} from 'vue-router'
import Start from '../views/Start.vue'
import Home from '../views/Home.vue'
import Cooking from '../views/Cooking.vue'
import Baking from '../views/Baking.vue'
import Imprint from "@/views/Imprint.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {title:'AromaAtlas - Home'}
  },
  {
    path: '/home',
    name: 'home2',
    component: Home,
    meta: {title:'AromaAtlas - Home'}
  },
  {
    path: '/**',
    name: 'home3',
    component: Home,
    meta: {title:'AromaAtlas - Home'}
  },
  {
    path: '/start',
    name: 'start',
    component: Start,
    meta: {title:'AromaAtlas - Start'}
  },
  {
    path: '/cooking',
    name: 'cooking',
    component: Cooking,
    meta: {title:'AromaAtlas - Cooking Recipes'}
  },
  {
    path: '/baking',
    name: 'baking',
    component: Baking,
    meta: {title:'AromaAtlas - Baking Recipes'}
  },
  {
    path: '/imprint',
    name: 'imprint',
    component: Imprint,
    meta: {title:'AromaAtlas - Imprint'}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to) => {
  document.title = to.meta.title;

})



export default router
