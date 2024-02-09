import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Adrien GEORGE - Développeur Full-Stack'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'Adrien GEORGE - A propos de moi'
    }
  },
  {
    path: '/carrer',
    name: 'carrer',
    component: () => import('../views/CarrerView.vue'),
    meta: {
      title: 'Adrien GEORGE - Mes domaines de compétences'
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    meta: {
      title: 'Adrien GEORGE - Mes projets'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
