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
            path: '/skills',
            name: 'skills',
            component: () => import('../views/SkillsView.vue'),
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
        }
    ]
})

export default router
