<template>
    <div class="max-w-xl mx-auto">
        <div class="text-center mb-8">
            <p class="text-lg text-teal-500 font-semibold">Here you can register as a Teacher in our website</p>
            <p class="text-sm text-teal-800">please fill the form below and submit your informations</p>
        </div>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Upload a photo</label>
                <input type="file" required @change="handleUpload"
                class="bg-white shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
            </div>
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
                <label class="block text-gray-700 text-sm font-bold mb-2">specialization</label>
                <div @click="toggleOptions" class="flex items-center space-x-2" @blur="closeOptions">
                    <input type="text" placeholder="Select a specialization" :value="selectedSpe.join(', ')" readonly 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                    <span v-if="showOptions">▼</span>
                    <span v-else>▲</span>
                </div>
                <div v-if="showOptions"  class="mt-2 bg-white border border-gray-300 rounded-lg shadow-md w-full" >
                    <label v-for="option in options" :key="option" class="flex gap-4">
                        <input type="checkbox" :value="option" v-model="selectedSpe" class="ml-2">
                        <span>{{ option }}</span>
                    </label>
                </div>
            </div>
            <div class="mb-4" >
                <label class="block text-gray-700 text-sm font-bold mb-2">Languages</label>
                <div @click="toggleLang" class="flex items-center space-x-2" @blur="closeLang">
                    <input type="text" placeholder="Select a skill" :value="selectedLanguages.join(', ')" readonly 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                    <span v-if="showLang">▼</span>
                    <span v-else>▲</span>
                </div>
                <div v-if="showLang"  class="mt-2 bg-white border border-gray-300 rounded-lg shadow-md w-full" >
                    <label v-for="lang in Languages" :key="lang" class="flex gap-4">
                        <input type="checkbox" :value="lang" v-model="selectedLanguages" class="ml-2">
                        <span>{{ lang }}</span>
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
    import { onMounted, ref } from 'vue';
    import {db, storage} from '../../firebase.js';
    import {collection, addDoc} from 'firebase/firestore';
    import router from '@/router.js';
    import { ref as stRef, uploadBytes, getDownloadURL } from 'firebase/storage';
    import { useStore } from 'vuex';

    const store = useStore();


    const options = [
        'front-end',
        'back-end',
        'design',
    ]
    const Languages = [
        'python',
        'javascript',
        'html',
        'css',
        'C',
        'C++',
        'C#',
        'PHP',
        'Swift',
        'Java',
        'flutter'
    ];
    const showOptions = ref(false);
    const showLang = ref(false);
    const selectedLanguages = ref([]);
    const selectedSpe = ref([]);
    const formData = {
        firstName: ref(''),
        secondName: ref(''),
        email: ref(''),
        description: ref(''),
        linkLinkedIn: ref(''),
        phone: ref(''),
        price: ref(''),
        terms: ref(false),
        pic_link: ref(''),
    };
    const uploadedFile = ref('');
    const handleUpload = (event) => {
        uploadedFile.value = event.target.files[0];
    }

    

    const toggleOptions = () => {
        showOptions.value = !showOptions.value;
    };
    const toggleLang = () => {
        showLang.value = !showLang.value;
    };
    const closeOptions = () => {
        showOptions.value = false;
    };
    const closeLang = () => {
        showLang.value = false;
    }
    const submitFunction = async () => {
        if (uploadedFile.value) {
            const storageRef = stRef(storage, `uploads/${uploadedFile.value.name}`);
            const uploadTask = await uploadBytes(storageRef, uploadedFile.value);
            const url = await getDownloadURL(uploadTask.ref);
            formData.pic_link.value = url;
        }
        addDoc(collection(db, 'coachs'), {
            firstName: formData.firstName.value,
            secondName: formData.secondName.value,
            email: formData.email.value,
            description: formData.description.value,
            specialization: selectedSpe.value,
            languages: selectedLanguages.value,
            linkedIn: formData.linkLinkedIn.value,
            phone: formData.phone.value,
            price: formData.price.value,
            pic_link: formData.pic_link.value,
            comments: [],
            requests: []
        });

        router.push('/');
    }
    onMounted (() => {
        const intendedRoute = router.currentRoute.value.fullPath;
        if (store.state.isLoggedIn) {
            router.push('/register');
        } else {
            console.log(intendedRoute);
            router.push({ path: '/auth/login', query: {redirect: intendedRoute} });
    }})


</script>
  

<style scoped>
 form {
    background-color: #eee;
    color: #000
 }
</style>
