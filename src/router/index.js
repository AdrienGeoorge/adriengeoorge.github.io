import { createRouter, createWebHistory } from 'vue-router'
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
  },
  {
    path: '/projects/habbox',
    name: 'habbox',
    component: () => import('../views/HabboxView.vue'),
    meta: {
      title: 'Adrien GEORGE - Habbox'
    }
  },
  {
    path: '/projects/merit',
    name: 'merit',
    component: () => import('../views/MeritView.vue'),
    meta: {
      title: 'Adrien GEORGE - MERIT'
    }
  },
  {
    path: '/projects/cosplay',
    name: 'cosplay',
    component: () => import('../views/CosplayView.vue'),
    meta: {
      title: 'Adrien GEORGE - SocialCosplay'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
