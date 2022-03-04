import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                title: 'Adrien George - Développeur Full-Stack'
            }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue'),
            meta: {
                title: 'Adrien George - A propos de moi'
            }
        },
        {
            path: '/carrer',
            name: 'carrer',
            component: () => import('../views/CarrerView.vue'),
            meta: {
                title: 'Adrien George - Mes domaines de compétences'
            }
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('../views/ProjectsView.vue'),
            meta: {
                title: 'Adrien George - Mes projets'
            }
        },
        {
            path: '/projects/habbox',
            name: 'habbox',
            component: () => import('../views/HabboxView.vue'),
            meta: {
                title: 'Adrien George - Habbox'
            }
        },
        {
            path: '/projects/merit',
            name: 'merit',
            component: () => import('../views/MeritView.vue'),
            meta: {
                title: 'Adrien George - MERIT'
            }
        },
        {
            path: '/projects/cosplay',
            name: 'cosplay',
            component: () => import('../views/CosplayView.vue'),
            meta: {
                title: 'Adrien George - SocialCosplay'
            }
        }

    ]
})

export default router
