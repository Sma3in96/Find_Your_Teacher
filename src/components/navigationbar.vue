<template>
    <header class="p-4 bg-sky-500 flex items-center justify-between fixed w-full top-0 text-white">
        <div
            @click="closeNav()"
            v-if="isClose"
            class="fixed hidden max-[850px]:block inset-0 z-10 bg-black bg-opacity-50"
        ></div>
        <div class="flex">
            <button
                @click="openNav()"
                class="hidden max-[850px]:block"
            >
                <box-icon
                    name='menu'
                    size="md"
                ></box-icon>
            </button>
            <!-- LOGO -->
            <router-link to="/">
                <h1 class="text-2xl font-bold">LOGO</h1>
            </router-link>
        </div>

        <!-- NAV -->
        <nav
            :class="{ 'act-sm': isClose }"
            class="z-20 flex items-center space-x-4 justify-between pl-8 flex-1"
        >
            <ul class="flex gap-4">
                <li>
                    <router-link to="/">Coaches</router-link>
                </li>
                <li>
                    <router-link to="/requests">Requests</router-link>
                </li>
            </ul>

            <!-- AUTH -->
            <div class="actions flex gap-4">
                <router-link
                    class="auth-btn"
                    to="/auth/signup"
                >Signup</router-link>
                <router-link
                    class="auth-btn"
                    to="/auth/login"
                >Login</router-link>
            </div>
            <button
                @click="closeNav()"
                class="test hidden max-[850px]:block"
                style="margin-left: auto;"
            >
                <box-icon
                    name='left-arrow-alt'
                    size="md"
                ></box-icon>
            </button>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const isClose = ref(false);

function closeNav() {
    isClose.value = false;
}

function openNav() {
    isClose.value = true;
}

onMounted(() => {
    const links = document.querySelectorAll('ul li a');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            links.forEach((link) => {
                if(e.target.classList.contains('act-link')) {
                    link.closest('li').classList.remove('act');
                }
            });
            link.closest('li').classList.add('act');
        });
    });
});
</script>

<style scoped>
.auth-btn {
    @apply bg-sky-300 px-4 py-2 rounded hover:bg-sky-600 duration-300 ease-out transition-all;
}

ul li {
    @apply relative font-semibold text-lg duration-300 ease-out transition-colors;
}

li::before,
li::after {
    @apply content-[''] absolute left-0 -bottom-1 h-[3px] w-0 bg-sky-600 duration-300 transition-[width] ease-out;
}

li:hover::before,
li:hover::after {
    @apply w-full;
}

li.act::before,
li.act::after {
    @apply w-full;
}

@media (max-width: 850px) {
    nav {
        position: absolute;
        top: 0;
        left: -300px;
        width: 300px;
        height: 100vh;
        flex-direction: column-reverse;
        padding: 0;
        @apply p-4 space-x-0 items-start justify-end bg-sky-500 duration-300 ease-out transition-[left];
    }

    nav.act-sm {
        left: 0
    }

    nav ul {
        @apply block w-full;
    }

    nav ul li {
        @apply grid place-content-center h-[45px];
    }

    li + li {
        @apply border-t-2 border-white
    }

    nav .actions {
        @apply w-full my-4;
    }

    nav .actions a {
        @apply flex-1 text-center
    }
}
</style>
