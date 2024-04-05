<template>
    <nav>
        <!-- desktop -->
        <div class="bg-green-300">
            <div class="max-w-7xl mx-auto">
                <div class="flex justify-between">
                <!-- menu -->
                <div class="flex space-x-4">
                    <!-- logo url svg -->
                        <!-- logo url svg -->
                    <a href="/Home" 
                    class="flex items-center space-x-2 py-4 px-2">
                        <span class="text-2xl font-extrabold text-black">FindYourTeacher</span>
                    </a>
                </div>
                <!-- menu -->
                <div class="hidden md:flex items-center space-x-1">
                    <a href="/About"class="py-5 px-2 hover:text-green-600 font-bold">About</a>
                    <a href="/Contacts"class="py-5 px-2 hover:text-green-600 font-bold">Contacts</a>
                    <a href="/Login"class="py-5 px-2 hover:text-green-600 font-bold">Login</a>
                    <a href="/Signup"class="py-5 px-2 hover:text-green-600 font-bold">Signup</a>
                </div>
                <!-- the button that shows mobile menu -->
                <div class="md:hidden flex items-center">
                    <button @click="showmobilemenu = !showmobilemenu" class="py- px-">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        x="0px" 
                        y="0px" 
                        width="40" 
                        height="50" 
                        viewBox="0 0 24 24">
                        <line 
                        x1="10" 
                        x2="20" 
                        y1="12" 
                        y2="12" 
                        fill="none" 
                        stroke="#000" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" s
                        troke-miterlimit="10" 
                        stroke-width="4" 
                        opacity=".35">
                    </line>
                    <line 
                    x1="4" 
                    x2="20" 
                    y1="19" 
                    y2="19" 
                    fill="none" 
                    stroke="#000" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-miterlimit="10" 
                    stroke-width="4">
                </line>
                    <line 
                    x1="4" 
                    x2="20" 
                    y1="5" 
                    y2="5" 
                    fill="none" 
                    stroke="#000" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-miterlimit="10" 
                    stroke-width="4">
                </line>
</svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- mobile -->
    <div class="md:hidden bg-green-400" v-show="showmobilemenu">
        <a href="/About" class="block py-2 px-4 hover:bg-green-500 hover:text-green-800 text-black">About</a>
        <a href="/Contacts" class="block py-2 px-4 hover:bg-green-500 hover:text-green-800 text-black">Contacts</a>
        <a href="/Login" class="block py-2 px-4 hover:bg-green-500 hover:text-green-800 text-black">Login</a>
        <a href="/Signup" class="block py-2 px-4 hover:bg-green-500 hover:text-green-800 text-black">Signup</a>
    </div>
</nav>
<div class="padding-8 text-2xl text-center">
        content
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showmobilemenu = ref(false)
</script>