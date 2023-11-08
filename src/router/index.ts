import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CarGroupsViewVue from '@/views/CarGroupsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/car-group',
      name: 'carGroup',
      component: CarGroupsViewVue
    }
  ]
})

export default router
