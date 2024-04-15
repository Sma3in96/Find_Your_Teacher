import { createRouter, createWebHistory } from 'vue-router'
import CoachlistPage from './views/coaches/CoachlistPage.vue'
import LoginPage from './views/auth/LoginPage.vue'
import SignupPage from './views/auth/SignupPage.vue'
import RequestReceived from './views/request/RequestReceived.vue'
import CoachregistrationPage from './views/coaches/CoachregistrationPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: CoachlistPage
        },
        {
            path: '/register',
            component: CoachregistrationPage
        },
        {
            path: '/login',
            component: LoginPage
        },

        {
            path: '/signup',
            component: SignupPage
        },

        {
            path: '/requests',
            component: RequestReceived
        }
    ],
    linkActiveClass: 'act-link',
})

export default router
