<template>
        <div class="max-w-xl mx-auto">
        <div class="text-center mb-8">
        </div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Email :</label>
                <input type="link" placeholder="Enter your email" v-model="formData.EmailPhone.value"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Password :</label>
                <input type="link" placeholder="Enter your password" v-model="formData.Password.value"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <div>
            <p class="text-sm text-gray-600 mt-2">Don't have an account?</p> <router-link to="/auth/signup">Sign Up</router-link>
            </div>

            <button @click.prevent="submitFunction" class="block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Login
            </button>
            </form>
        </div>
</template>

<script setup>
import { ref } from 'vue';

import { defineEmits } from 'vue';

    const emit = defineEmits(['form-submitted']);


const formData = {
    EmailPhone: ref(''),
    Password: ref (''),
};

const submitFunction = () => {
    emit('form-submitted', formData);
};
</script>

<style scoped>
    form {
    background-color: #eee;
    color: #000
}

</style>
