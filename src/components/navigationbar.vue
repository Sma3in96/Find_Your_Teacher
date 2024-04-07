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
        height: 55px;
        position: fixed;
        width: 100%;
    }
    .inline-list {
        list-style-type: none;
        display: flex;
        justify-content: space-between center;
        align-items: center;
        padding: 1rem;
        left: 0;
        top: 0;
        width: 100%;

    }
    .inline-list li{
        display:inline-block;
        margin-right: 10px;
    }
    .inline-list li:last-child { 
        margin-left: auto;
        margin-right: 0px;
    }
    .inline-list li:first-child {
        margin-right: auto;
    }
</style>