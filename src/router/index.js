import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/master/index.js'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/index.js')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
