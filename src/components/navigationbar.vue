<template>
    <nav>
        <!-- desktop -->
        <div class="nav-bar">
            <div class="max-w-7xl mx-auto">
                <ul class="inline-list">
                    <li>
                        <router-link to="/Home">Logo</router-link>
                    </li>
                    <li>
                        <router-link to="/Login">Login</router-link>
                    </li>
                    <li>
                        <router-link to="/Signup">Signup</router-link>
                    </li>
                    <li>
                        <router-link to="/Requests">Requests</router-link>
                    </li>
                </ul>
                <router-view></router-view>
            </div>
        </div>
    <!-- mobile -->
</nav>
</template>

<script setup>
import { ref } from 'vue';

const showmobilemenu = ref(false)
</script>

<style scoped>
    .nav-bar{ 
        background-color: var(--color-10);
    }
    .inline-list {
        list-style-type: none;
        padding: 0;
        display: flex;
        justify-content: space-between;
    }
    .inline-list li{
        display:inline-block;
        margin-right: 10px;
    }
    .inline-list li:last-child { 
        margin-left: auto;
    }
    .inline-list li:first-child {
        margin-right: auto;
    }
</style>