<template>
    <nav class="nav-bar">
                <ul class="inline-list">
                    <li>
                        <router-link to="/Home">Find Your Teacher</router-link>
                    </li>
                    <li>
                        <router-link to="/Requests">Requests</router-link>
                    </li>
                    <li>
                        <router-link to="/Register">Register as a Teacher</router-link>
                    </li>
                    <li>
                        <router-link to="/Login">Login</router-link>
                    </li>
                </ul>
            <router-view></router-view>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const showmobilemenu = ref(false)
</script>

<style scoped>
    .nav-bar{ 
        background-color: var(--color-10);
        height: 48px;
    }
    .inline-list {
        list-style-type: none;
        padding: 0;
        display: flex;
        justify-content: space-between center;
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
