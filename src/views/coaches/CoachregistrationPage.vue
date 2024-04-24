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
                class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                :class="!formData.firstName.value ? 'border-red-500': 'border-green-500'"
                >
                <h6 :class="!formData.firstName.value ? 'text-red-600 text-xs' : 'hidden'">  * This field is required </h6>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Second Name</label>
                <input type="text" required v-model="formData.secondName.value"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                :class="!formData.secondName.value ? 'border-red-500': 'border-green-500'"
                >
                <h6 :class="!formData.secondName.value ? 'text-red-600 text-xs' : 'hidden'">  * This field is required </h6>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
                <input type="email" required v-model="formData.email.value"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                :class="!formData.email.value ? 'border-red-500': 'border-green-500'">
                <h6 :class="!formData.email.value ? 'text-red-600 text-xs' : 'hidden'">  * This field is required </h6>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Description</label>
                <textarea rows="4" v-model="formData.description.value" class="w-full"></textarea>
            </div>

            <div class="mb-4" >
                <label class="block text-gray-700 text-sm font-bold mb-2">Skills</label>
                <div @click="toggleOptions" class="flex items-center space-x-2" @blur="closeOptions">
                    <input type="text" placeholder="Select a skill" :value="selectedSkills.join(', ')" readonly 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                    <span v-if="showOptions">▼</span>
                    <span v-else>▲</span>
                </div>
                <div v-if="showOptions"  class="mt-2 bg-white border border-gray-300 rounded-lg shadow-md w-full" >
                    <label v-for="option in options" :key="option" class="flex gap-4">
                        <input type="checkbox" :value="option" v-model="selectedSkills" class="ml-2">
                        <span>{{ option }}</span>
                    </label>
                </div>
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
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Price</label>
                <input type="link" v-model="formData.price.value"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                :class="!formData.price.value ? 'border-red-500': 'border-green-500'"
                >
                <h6 :class="!formData.price.value ? 'text-red-600 text-xs' : 'hidden'">  * This field is required </h6>
            </div>
            <div class="mb-4 flex items-center">
                <input type="checkbox" id="accept-terms" v-model="formData.terms.value" class="form-checkbox h-4 w-4 text-blue-500">
                <label for="accept-terms" class="ml-2 text-sm" 
                :class="!formData.terms.value ? 'text-red-500': 'text-green-500'">
                I accept and agree on the terms
                </label>
            </div>


            <button :disabled="!formData.terms.value" @click.prevent="submitFunction" class="block mx-auto bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            SUBMIT
            </button>
    </form>
    </div>
  </template>
  
<script setup>
    import { ref } from 'vue';
    import {db} from '../../firebase.js';
    import {collection, addDoc} from 'firebase/firestore';
    import router from '@/router.js';

    const options = [
        'front-end',
        'back-end',
        'ux/ui',
        'python',
        'javascript',
        'html/css',
        'ruby',
        'c++/c',
        'Java',
        'flutter'
    ];
    const showOptions = ref(false);
    const selectedSkills = ref([]);
    const formData = {
        firstName: ref(''),
        secondName: ref(''),
        email: ref(''),
        description: ref(''),
        linkLinkedIn: ref(''),
        phone: ref(''),
        price: ref(''),
        terms: ref(false)
    };
    const toggleOptions = () => {
        showOptions.value = !showOptions.value;
    };
    const closeOptions = () => {
        showOptions.value = false;
    };

    const submitFunction = () => {
        addDoc(collection(db, 'coachs'), {
            firstName: formData.firstName.value,
            secondName: formData.secondName.value,
            email: formData.email.value,
            description: formData.description.value,
            skills: selectedSkills.value,
            linkedIn: formData.linkLinkedIn.value,
            phone: formData.phone.value,
            price: formData.price.value,
            pic_link: ""
        });
        router.push('/');
    }

</script>
  

<style scoped>
 form {
    background-color: #eee;
    color: #000
 }
</style>
