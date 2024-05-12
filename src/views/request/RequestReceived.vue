<template>
<div v-if="isloading">
    <loading />
</div>
<div v-for="(req, index) in requests" :key="req.id"  class="container mx-auto mt-10 max-w-screen">
        <div :class="{ 'bg-gray-200 opacity-75': req.accepted }" class="bg-gradient-to-r from-teal-400 to-blue-300 rounded-lg shadow-lg p-8">
        <h1 class="text-2xl text-black font-bold mb-4">Request Details</h1>
        <div class="mb-4">
            <p class="text-gray-600 mb-2"><strong>Student Name:</strong> {{ req.name }}</p>
            <p class="text-gray-600 mb-2"><strong>Date:</strong> {{ req.date }}</p>
            <p class="text-gray-600 mb-2"><strong>Message:</strong></p>
            <p class="text-black">{{ req.message }}</p>
        </div>
        <div class="flex justify-end">
            <button v-show="!req.accepted" @click="acceptRequest(req, index)" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4">Accept</button>
            <button v-show="!req.accepted" @click="rejectRequest(req, index)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reject</button>
                </div>
        </div>
        <!-- <div :class="{ 'bg-gray-200 opacity-75': req.accepted }" class="w-full">
            <div v-if="req.accepted" class="bg-white rounded-lg shadow-lg p-8">
                <span class="text-black"> Please contact the request sender throught this Email :</span>
                <p class="text-gray-600 mb-2"><strong>Email:</strong> {{ req.email }}</p>
            </div>
        </div> -->
        <div v-if="req.accepted && !copied" class="fixed top-0 left-0 w-full h-full bg-gray-500 opacity-75 z-50 flex justify-center items-center">
            <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 class="text-xl font-bold mb-4">Request Accepted</h2>
                <div class="flex mb-4">
                    <p class="text-gray-600 mr-4"><strong>Student Name:</strong></p>
                    <p class="text-black select-all">{{ req.name }}</p>
                </div>
                <div class="flex mb-4 gap-3">
                    <p class="text-gray-600 mr-4"><strong>Student Email:</strong></p>
                    <p class="text-black select-all">{{ req.email }}</p>
                    <button @click="copyText(req.email)" class="text-blue-500 hover:text-blue-700 focus:outline-none">
                        <box-icon name='copy-alt'></box-icon>
                    </button>
                </div>
            </div>
        </div>
</div>
</template>

<script setup>
import loading from '@/components/loading.vue'
import { onMounted, onUnmounted, ref } from 'vue'
import { useStore } from 'vuex';
import { db } from '@/firebase.js';
import { setDoc, getDoc, doc } from 'firebase/firestore';

const requests = ref({})
const noRequests = ref(true)
const isloading = ref(true)
const coachData = ref({})
const store = useStore();
const user_id = store.state.user_id;
const showEmail = ref(false);
const copied = ref(false);

onMounted( async () => {
    
    const coach = await getDoc(doc(db, 'coachs', user_id))
    isloading.value = false;
    if (coach.exists()) {
        coachData.value = coach.data();
        console.log(coachData.value)
    }
    if (coachData.value.requests) {
        noRequests.value = false;
        requests.value = coachData.value.requests;
        console.log(requests.value)
    }
})

const acceptRequest = (req) => {
    req.accepted = true;
}
const rejectRequest = (req) => {
    if (confirm('Are you sure you want to reject this request?')) {
    requests.value = requests.value.filter((request) => {
        return request !== req
    })
    }
}

const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
    copied.value = true;
}

onUnmounted(() => {
    setDoc(doc(db, 'coachs', user_id), {
        requests: requests.value
    }, {merge: true});
})
</script>
