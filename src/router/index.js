import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/donate',
    name: 'Donate',
    component: () => import('../views/Donate.vue')
  },
  {
    path: '/involved',
    name: 'Get Involved',
    component: () => import('../views/About.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/Events.vue')
  },
  {
    path: '/donateAnon',
    name: 'DonateAnon',
    component: () => import('../views/DonateAnon.vue')
  },
  {
    path: '/stories',
    name: 'Stories',
    component: () => import('../views/Stories.vue')
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
