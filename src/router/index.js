import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import FavView from '../views/FavView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavView
    }
  ]
})

export default router