<template>
    <div class="max-w-xl mx-auto">
        <div class="text-center mb-8">
            <p class="text-lg text-teal-500 font-semibold">Start your journey with us. Sign up now!</p>
            <p class="text-sm text-teal-800">please fill the form below and submit your informations</p>
        </div>
        
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Full Name :</label>
                <input type="text" placeholder="Enter your full name" required v-model="formData.fullname.value"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">E-mail :</label>
                <input type="email" placeholder="Enter your email" required v-model="formData.email.value"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Phone number :</label>
                <input type="link" placeholder="Enter your phone number"v-model="formData.phone.value"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Password :</label>
                <input type="link" placeholder="Enter your password" v-model="formData.Password.value"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Password Confirmation :</label>
                <input type="link" placeholder="Confirm your password"v-model="formData.passwordconfirmation.value"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>

            <div class="mb-4 flex items-center">
                <input type="checkbox" id="accept-terms" v-model="formData.terms.value" class="form-checkbox h-4 w-4 text-blue-500">
                <label for="accept-terms" class="ml-2 text-sm text-gray-700">I accept the terms</label>
            </div>

            <div>
            <p class="text-sm text-gray-600 mt-2">Already have an account?</p> <router-link to="/auth/login">Login</router-link>
            </div>

            <button @click.prevent="submitFunction" class="block mx-auto bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                SUBMIT
            </button>
            </form>

        </div>
</template>

<script setup>
import { ref } from 'vue';

import { defineEmits } from 'vue';

    const emit = defineEmits(['form-submitted']);


const formData = {
    fullname: ref(''),
    email: ref(''),
    phone: ref(''),
    Password: ref (''),
    passwordconfirmation: ref(''),
    terms: ref(false)

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