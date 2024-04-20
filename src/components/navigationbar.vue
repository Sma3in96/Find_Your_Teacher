<template>
    <header
        :class="{ 'scroll-act': isScroll }"
        class="bg-blue-900 pl-4 flex items-center top-[-5rem] sticky capitalize h-[64px] duration-300 ease-out transition-[top] shadow"
    >
        <div class="flex py-4">
            <h1 class="font-bold text-2xl">LOGO</h1>
        </div>

        <div class="routers h-full divide-line relative pl-4 flex justify-between flex-1 font-semibold">
            <nav class="flex gap-4 text-lg max-[850px]:gap-0">
                <span
                    v-show="authPage"
                    ref="activeLink"
                    class="absolute bottom-0 left-[15px] h-full w-[82px] duration-300 ease-out transition-all border-b-[4px] bg-sky-500"
                ></span>
                <router-link
                    to="/"
                    @click="savePosition($event)"
                >
                    <div>home</div>
                    <box-icon name='home'></box-icon>
                </router-link>
                <router-link
                    to="/coaches"
                    @click="savePosition($event)"
                >
                    <div>coaches</div>
                    <box-icon
                        type='solid'
                        name='collection'
                    ></box-icon>
                </router-link>
                <router-link
                    to="/requests"
                    @click="savePosition($event)"
                >
                    <div>requests</div>
                    <box-icon name='message-square-dots'></box-icon>
                </router-link>
            </nav>

            <div class="auth-actions flex divide-x-1">
                <router-link
                    class="border-r-2"
                    to="/auth/login"
                >
                    <div>login</div>
                    <box-icon name='log-in-circle'></box-icon>
                </router-link>
                <router-link to="/auth/signup">
                    <div>signup</div>
                    <box-icon name='mouse-alt'></box-icon>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const activeLink = ref(null);
const isScroll = ref(false);
const authPage = computed(() => route.name === 'login' || route.name === 'signup' ? false : true);

function savePosition(e) {
    const target = e.currentTarget;
    if(target instanceof HTMLElement) {

        const activeLinkPos = {
            left: target.offsetLeft,
            width: target.offsetWidth
        };

        window.sessionStorage.setItem('nav-link-pos', JSON.stringify(activeLinkPos));
        activeLink.value.style.width = activeLinkPos.width + "px";
        activeLink.value.style.left = activeLinkPos.left + "px";
    }
}

function resizeNavLink() {
    const links = document.querySelectorAll('nav a');
    links.forEach((link) => {
        if(link.classList.contains('act-link')) {
            activeLink.value.style.width = link.offsetWidth + 'px';
            activeLink.value.style.left = link.offsetLeft + 'px';
        }
    });
}

const navBarScroller = () => parseInt(scrollY) >= 200 ? (isScroll.value = true) : (isScroll.value = false);

onMounted(() => {
    window.addEventListener('resize', resizeNavLink);
    window.addEventListener('scroll', navBarScroller);

    function getPositionLink() {
        if(window.sessionStorage.getItem('nav-link-pos')) {
            const pos = JSON.parse(sessionStorage[ 'nav-link-pos' ]);
            activeLink.value.style.width = pos.width + "px";
            activeLink.value.style.left = pos.left + "px";
        }
    }

    getPositionLink();
});
</script>

<style scoped>
header.scroll-act {
    @apply sticky top-5 max-[850px]:top-0 max-w-full w-[700px] mx-auto border border-white;
    backdrop-filter: blur(.15rem);
    background-color: hsl(0 50% 90% /.2);
}

header.scroll-act :is(span, .auth-actions a) {
    @apply bg-opacity-50;
}

header.scroll-act .auth-actions a:hover::before {
    @apply bg-opacity-50
}

.divide-line::before {
    @apply content-[''] absolute left-2 h-2/3 top-1/2 -translate-y-1/2 w-[.5px] bg-white max-[850px]:hidden;
}

nav a {
    @apply grid place-content-center px-4 isolate;
}

nav a div {
    @apply max-[850px]:hidden
}

nav a box-icon {
    @apply hidden max-[850px]:block
}

.auth-actions a {
    @apply bg-sky-500 px-4 py-2 grid place-content-center relative z-10;
}

.auth-actions a div {
    @apply max-[850px]:hidden
}

.auth-actions a box-icon {
    @apply hidden max-[850px]:block
}

.auth-actions a:hover {
    @apply text-sky-500 duration-300
}

.auth-actions a::before {
    @apply content-[''] absolute inset-0 -z-10 duration-300 ease-in-out transition-all;
    clip-path: circle(100% at 50% 50%);
}

.auth-actions a:hover::before,
.auth-actions a.act-link {
    @apply bg-white text-sky-500;
    animation: hoverAnimate 300ms ease-in-out forwards;
}

@keyframes hoverAnimate {
    0% {
        clip-path: circle(0% at 50% 50%);
    }

    100% {
        clip-path: circle(100% at 50% 50%);
    }
}
</style>
