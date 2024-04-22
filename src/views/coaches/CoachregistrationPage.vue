<template>
    <div class="max-w-xl mx-auto">
        <div class="text-center mb-8">
            <p class="text-lg text-teal-500 font-semibold">Here you can register as a Teacher in our website</p>
            <p class="text-sm text-teal-800">please fill the form below and submit your informations</p>
        </div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                <input type="text" required v-model="formData.firstName.value"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Second Name</label>
                <input type="text" required v-model="formData.secondName.value"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
                <input type="email" required v-model="formData.email.value"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Description</label>
                <textarea rows="4" v-model="formData.description.value" class="w-full"></textarea>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Skills</label>
                <input type="text" v-model="formData.skills.value"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">LinkedIn profile link</label>
                <input type="link" v-model="formData.linkLinkedIn.value"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Whatsapp/Phone</label>
                <input type="link" v-model="formData.phone.value"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4 flex items-center">
                <input type="checkbox" id="accept-terms" v-model="formData.terms.value" class="form-checkbox h-4 w-4 text-blue-500">
                <label for="accept-terms" class="ml-2 text-sm text-gray-700">I accept the terms</label>
            </div>


            <button @click.prevent="submitFunction" class="block mx-auto bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <router-link to="/"> SUBMIT </router-link>
            </button>
    </form>
    </div>
  </template>
  
<script setup>
    import { ref } from 'vue';

    import { sharedData } from '@/hooks/coachs';
  
    const formData = {
        firstName: ref(''),
        secondName: ref(''),
        email: ref(''),
        description: ref(''),
        skills: ref(''),
        linkLinkedIn: ref(''),
        phone: ref(''),
        terms: ref(false)
    };
    const submitFunction = () => {
        sharedData.coaches.push({
            FullName : formData.firstName.value + formData.secondName.value, 
            Mail : formData.email.value,
            Description : formData.description.value,
            Skills : formData.skills.value,
            Link : formData.linkLinkedIn.value,
            Price : "0",
            pic_link : ""
    })
}

</script>
  

<style scoped>
 form {
    background-color: #eee;
    color: #000
 }
</style>
