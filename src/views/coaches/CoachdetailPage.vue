<template>
    <div class="container  mx-auto mt-10">
        <div class="bg-gray-200 rounded-lg shadow-lg p-8 flex justify-start md:flex-row md:items-start md:justify-between">
            <div class="mb-4 md:mb-0 md:pr-4 md:mr-0 md:border-r md:border-gray-300">
                <img :src="coachData.pic_link" :alt="name" class="w-48 h-48 rounded-full bg-black mx-auto md:mx-0">
            </div>
            <div  class="text-center  md:text-left">
                <h1 class="text-2xl text-black font-bold mb-4">{{ coachData.firstName + " " + coachData.secondName }}</h1>
                <p class="text-gray-600 mb-2">Phone: {{ coachData.phone }}</p>
                <!-- <p class="text-gray-600 mb-2">E-mail: {{ coachData.email }}</p> -->
                <div>
                    <ul class="flex justify-start gap-2 mb-2" >
                        <li v-for="language in coachData.languages" :key="language"> 
                            <img width="30" height="30" class="hover:vibrate" :src="languagesLinks[language]" />
                        </li>
                    </ul>
                </div>
                <div >
                    <ul class=" divide-teal-300 flex justify-start gap-2">
                        <li 
                        v-for="spe in coachData.specialization" 
                        :key="spe"
                        class="py-3 px-4 rounded-md shadow-md hover:bg-teal-200 transition-colors duration-200"
                        ><span class="text-gray-800 font-medium">{{ spe }}</span></li>
                    </ul>
                </div>
                <p class="bg-teal-100 px-3 py-2 text-black mt-2 rounded-md shadow-sm hover:text-gray-500">Price: {{ coachData.price }}$</p>
                <h2 class="text-2xl text-black font-bold mb-4">Description</h2>
                <p class="text-gray-500 mb-3">{{ coachData.description }}</p>
                <a :href="linkedin" class="text-blue-500 hover:underline">{{ coachData.linkedIn }}</a>
            </div>
            <button @click="makearequest" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 md:mt-0 self-center md:self-end">Make a request</button>
        </div>
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
        <p class="text-gray-700">{{ comment.text }}</p>
        <p class="text-gray-500 text-sm">{{ comment.date }}</p>
    </div>
        <textarea v-model="newComment" placeholder="Write a comment..." class="border rounded-lg px-3 py-2 mb-4 w-full text-black"></textarea>
        <button @click="addComment" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add Comment</button>
    </div>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { ref, onMounted } from 'vue';
    import { db } from '../../firebase.js';
    import { doc, getDoc, setDoc } from 'firebase/firestore';
    
    
    const showRequest = ref(false)
    const coachData = ref({})
    let coachSkills = ref('')
    const newComment = ref('')
    let comments = ref([])
    const languagesLinks = {
        python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        html: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
        css: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
        C: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
        'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
        'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
        PHP: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
        Swift: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg',
        Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
        flutter: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg'
    }



    const makearequest = () => {
        showRequest.value = !showRequest.value
    }
    const route = useRoute();
    const id = route.params.id;
    onMounted( async () => {    
    const coach = await getDoc(doc(db, 'coachs', id))
    if (coach.exists()) {
        coachData.value = coach.data()
        coachSkills.value = coachData.value.skills.join(', ')
        if (coachData.value.comments) {
            comments.value = coachData.value.comments
        }
    } else {
        console.log('coach does not exist')
    }
})

    const addComment = async () => {
        comments.value.push({
            text: newComment.value,
            date : new Date().toLocaleString()
        });
        setDoc(doc(db, 'coachs', id), {
            comments : comments.value
        }, { merge: true})
        newComment.value = "";
    }
    
    const linkedin = "https://www.linkedin.com/in/your-profile-url/";
</script>
