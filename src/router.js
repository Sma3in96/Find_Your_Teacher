import { createRouter, createWebHistory } from 'vue-router';
import CoachlistPage from './views/coaches/CoachlistPage.vue';
import LoginPage from './views/auth/LoginPage.vue';
import SignupPage from './views/auth/SignupPage.vue';
import RequestReceived from './views/request/RequestReceived.vue';
import CoachregistrationPage from './views/coaches/CoachregistrationPage.vue';
import CoachdetailPage from './views/coaches/CoachdetailPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: CoachlistPage
        },
        {
            path: '/coaches',
            component: CoachregistrationPage
        },
        {
            path: '/requests',
            component: RequestReceived,
        },
        {
            path: '/register',
            component: CoachregistrationPage
        },
        // AUTH
        {
            path: '/auth/login',
            component: LoginPage,
            name: 'login'
        },
        {
            path: '/auth/signup',
            component: SignupPage,
            name: 'signup'
        },
        {
            path: '/coachprofile',
            component: CoachdetailPage,
        },
    ],
    linkActiveClass: 'act-link',
});

export default router;
