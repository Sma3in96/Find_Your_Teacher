<template>
    <div v-if="!isloaded" class="container mx-auto mt-10">
      <loading/>
    </div>
    <div class="container mx-auto mt-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-lg shadow-lg">
        <div class="bg-gray-100 p-8 flex flex-col items-center justify-center rounded-lg">
          <img :src="coachData.pic_link" :alt="name" class="w-48 h-48 rounded-full object-cover mb-4">
          <h1 class="text-2xl text-black font-bold mb-2">{{ coachData.firstName + " " + coachData.secondName }}</h1>
          <p class="text-gray-600 mb-4">Phone: {{ coachData.phone }}</p>
          <div class="flex justify-center gap-2">
            <ul class="flex justify-center gap-2">
              <li v-for="language in coachData.languages" :key="language">
                <img width="30" height="30" class="rounded-full hover:animate-pulse" :src="languagesLinks[language]" />
              </li>
            </ul>
          </div>
        </div>
        <div class="bg-white p-8 flex flex-col rounded-lg">
          <h2 class="text-xl text-black font-bold mb-1">Specialization:</h2>
          <ul class="flex flex-wrap justify-start gap-2">
            <li
              v-for="spe in coachData.specialization"
              :key="spe"
              class="py-2 px-4 rounded-md text-white bg-teal-600 font-medium"
            >
              <span>{{ spe }}</span>
            </li>
          </ul>
          <div class="flex justify-end">
          <h2 class="text-width inline-block mt-2 py-2 px-4 rounded-md text-white bg-black font-medium">Price: {{ coachData.price }}$</h2>
            </div>
          <h3 class="mt-4 text-lg text-black font-bold">Description:</h3>
          <p class="text-gray-600">{{ coachData.description }}</p>
          <div class="flex justify-between items-center mt-auto">
            <div>
              <a :href="linkedin" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline transition duration-300 ease-in-out transform hover:scale-110 mr-4">
                <box-icon name='linkedin-square' type='logo' ></box-icon>
              </a>
              <a :href="whatsapp" target="_blank" rel="noopener noreferrer" class="text-green-500 hover:underline transition duration-300 ease-in-out transform hover:scale-110 mr-4">
                <box-icon name='whatsapp' type='logo' ></box-icon>
              </a>
            </div>
            <button v-show="!userIsCoach && !requestSent" @click="showRequest = true" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Make a request</button>
            <button v-show="userIsCoach" @click="editprofile" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none">Edit My profile</button>
          </div>
        </div>
      </div>
    </div>

        <!--requests section-->
    <div class="container mx-auto mt-5" v-if="showRequest">
        <div class="bg-white rounded-lg shadow-lg p-8 items-center ">
          <label class="text-black mb-4 py-2 ">Fill this from to send the request :</label>
          <input class="text-black border rounded-lg px-3 py-2 mb-4 w-full" placeholder="Enter your name" v-model="requesterName" type="text">
          <input class="text-black border rounded-lg px-3 py-2 mb-4 w-full" placeholder="Enter your Email that coach will contact you with" v-model="requesterEmail" type="email">
            <textarea v-model="newrequest" placeholder="message" class="border rounded-lg px-3 py-2 mb-4 w-full text-black"></textarea>
            <button @click="makearequest" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Send your request</button>
        </div>
    </div>
    <!-- Comment section -->
    <div class="container mx-auto">
    <div class="bg-white rounded-lg shadow-lg p-8 item-center mt-5 mb-5">
    <h1 class="text-black mb-5 text-xl">comments:</h1>
        <div v-for="(comment, index) in comments" :key="index" class="mb-4">
        <p class="text-gray-500 text-sm">{{ comment.username }} >> {{ comment.date }} </p>
        <p class="text-gray-700">{{ comment.text }}</p>
        <!-- <p class="text-gray-500 text-sm ">{{ comment.date }}</p> -->
        
    </div>
        <div v-show="!userIsCoach">
          <textarea v-model="newComment" placeholder="Write a comment..." class="border rounded-lg px-3 py-2 mb-4 w-full text-black"></textarea>
          <button @click="addComment" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Add Comment</button>
        </div>
      </div>
    </div>
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import { ref, onMounted } from 'vue';
    import { db } from '../../firebase.js';
    import { doc, getDoc, setDoc } from 'firebase/firestore';
    import { useStore } from 'vuex';
    import loading from '@/components/loading.vue'
    import router from '@/router';

    const isloaded = ref(false);
    const userIsCoach = ref(false);
    const store = useStore();
    const showRequest = ref(false)
    const coachData = ref({})
    let coachSkills = ref('')
    const newComment = ref('')
    let comments = ref([])
    const requests = ref([]);
    const newrequest = ref('')
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
    const requesterName = ref('')
    const requesterEmail = ref('')
    const requestSent = ref(false)

    const route = useRoute();
    const id = route.params.id;
    onMounted( async () => {    
    const coach = await getDoc(doc(db, 'coachs', id))
    if (coach.exists()) {
        coachData.value = coach.data()
        if (coachData.value.comments) {
            comments.value = coachData.value.comments
        }
        if (coachData.value.requests) {
            requests.value = coachData.value.requests;
        }
    } else {
        console.log('coach does not exist')
    }
    if (id === store.state.user_id) {
      console.log('this my profile is already')
      userIsCoach.value = true;

    }
    isloaded.value = true;
})

    const addComment = async () => {
        comments.value.unshift({
            text: newComment.value,
            date : new Date().toLocaleString(),
            username : store.state.username || 'unknown',
        });
        setDoc(doc(db, 'coachs', id), {
            comments : comments.value
        }, { merge: true})
        newComment.value = "";
    }

    const makearequest = async () => {
        requests.value.unshift({
            username : store.state.username || 'unknown',
            name: requesterName.value,
            email: requesterEmail.value,
            date : new Date().toLocaleString(),
            message: newrequest.value,
            accepted: false
        });
        setDoc(doc(db, 'coachs', id), {
            requests : requests.value
        }, { merge: true})
        newrequest.value = "";
        requesterName.value = "";
        requesterEmail.value = "";
        showRequest.value = false
        requestSent.value = true;
    }
    const linkedin = "http://www.linkedin.com/in/" + coachData.value.linkedin;
    const whatsapp = "https://wa.me/" + coachData.value.phone;
    
    const editprofile = () => {
        router.push({name: "coachedit", params: {id: id}})
    }
</script>
