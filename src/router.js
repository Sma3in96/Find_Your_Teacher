import { createRouter, createWebHistory } from 'vue-router'
import CoachlistPage from './views/coaches/CoachlistPage.vue'
import LoginPage from './views/auth/LoginPage.vue'
import SignupPage from './views/auth/SignupPage.vue'
import RequestReceived from './views/request/RequestReceived.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/Home',
            component: CoachlistPage
        },

        {
            path: '/Login',
            component: LoginPage
        },

        {
            path: '/Signup',
            component: SignupPage
        },

        {
            path: '/Requests',
            component: RequestReceived
        }
    ]
})

export default router