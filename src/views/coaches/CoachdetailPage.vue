<template>
    <div class="container mx-auto mt-10">
        <div class="bg-white rounded-lg shadow-lg p-8 items-center ">
        <div class="mr-4">
            <img :src="userprofile" :alt="name" class="w-32 h-32 rounded-full bg-black">
        </div>
            <h1 class="text-2xl text-black font-bold mb-4">username</h1>
            <p class="text-gray-600 mb-2">skills:</p>
            <p class="text-gray-600 mb-2">Age:</p>
            <p class="text-gray-600 mb-2">Location:</p>
            <h2 class="text-2xl text-black font-bold mb-4">Description</h2>
            
            <p>description</p>
            <a :href="linkedin" class="text-blue-500 hover:underline">LinkedIn Profile</a>
        </div>
        <button @click="makearequest" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Make a request</button>
    </div>
    <!--requests section-->
    <div class="container mx-auto mt-5" v-if="showRequest">
        <div class="bg-white rounded-lg shadow-lg p-8 items-center ">
            <textarea v-model="newrequest" placeholder="contact the coach" class="border rounded-lg px-3 py-2 mb-4 w-full text-black"></textarea>
            <button @click="makearequest" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Send your request</button>
        </div>
    </div>

    <!-- Comment section -->
    <div class="container mx-auto">
    <div class="bg-white rounded-lg shadow-lg p-8 item-center mt-5 mb-5">
    <h1 class="text-black mb-5 text-xl">comments:</h1>
        <div v-for="(comment, index) in comments" :key="index" class="mb-4">
        <p class="text-gray-700">commenttext</p>
        <p class="text-gray-500 text-sm">commentauthor - commentdate</p>
    </div>
        <textarea v-model="newComment" placeholder="Write a comment..." class="border rounded-lg px-3 py-2 mb-4 w-full text-black"></textarea>
        <button @click="addComment" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add Comment</button>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
    const showRequest = ref(false)
    const makearequest = () => {
        showRequest.value = !showRequest.value
    }

// Define LinkedIn profile URL
    const linkedin = "https://www.linkedin.com/in/your-profile-url/";
</script>
