import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
