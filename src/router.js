import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contacts from './views/Contacts.vue'
import LogIn from './views/LogIn.vue'
import SignUp from './views/SignUp.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/Home',
            component: Home
        },
        {
            path: '/About',
            component: About
        },
        {
            path: '/Contacts',
            component: Contacts
        },
        {
            path: '/Login',
            component: LogIn
        },
        {
            path: '/Signup',
            component: SignUp
        }
    ]
})

export default router