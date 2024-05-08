import { createRouter, createWebHistory } from 'vue-router';
import CoachlistPage from './views/coaches/CoachlistPage.vue';
import LoginPage from './views/auth/LoginPage.vue';
import SignupPage from './views/auth/SignupPage.vue';
import RequestReceived from './views/request/RequestReceived.vue';
import CoachregistrationPage from './views/coaches/CoachregistrationPage.vue';
import CoachdetailPage from './views/coaches/CoachdetailPage.vue';
import landingpage from './views/landingpage.vue';
import NotfoundPage from '@/views/NotfoundPage.vue';
import CoachEditPage from './views/coaches/coachEditPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
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
        {
            path: '/',
            component: landingpage,
            name: 'home',
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
            path: '/coachprofile/:id?',
            component: CoachdetailPage,
            name: 'coachprofile',
            props: true,
        },
        {
            path: '/coachprofile/edit/:id?',
            component: CoachEditPage,
            name: 'coachedit',
            props: true,
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotfoundPage,
            name: 'notfound',
        },
    ],
    linkActiveClass: 'act-link',
});

export default router;
