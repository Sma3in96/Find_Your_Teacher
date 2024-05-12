<template>
    <div v-if="!isloaded" class="container w-[800px] max-w-[90%] mt-10">
      <loading/>
    </div>
    <div class="container mx-auto w-[700px] max-w-[90%] mt-10">
      <div class="container bg-gradient-to-r from-white to-blue-100 grid grid-cols-1 sm:grid-cols-2 gap-2 rounded-lg shadow-lg">
        <div class="div1 p-8 flex flex-col justify-between rounded-lg">
          <div>
            <h3 class="text-lg tracking-tighter underline text-gray-500  mb-1">This is me:</h3>
          <blockquote>
          <p class="text-black tracking-wider text-xl" >"{{ coachData.description }}"</p>
          </blockquote>
          </div>
          <div class="">
            <h3 class="text-lg tracking-tighter underline text-gray-500  mb-1">This is what I do</h3>
          <ul class="flex justify-center gap-2">
            <li
              v-for="spe in coachData.specialization"
              :key="spe"
              class="border bg-gray-200 rounded text-gray-900 flex text-xl font-small"
            >
              <span>{{ spe }}</span>
            </li>
          </ul>
          </div>
          <div class="gap-2 py-3">
            <h3 class="text-lg tracking-tighter underline text-gray-500  mb-1">This is my tools:</h3>
            <ul class="flex justify-center gap-2">
              <li v-for="language in coachData.languages" :key="language">
                <img width="30" height="30" class="rounded-full hover:animate-pulse" :src="languagesLinks[language]" />
              </li>
            </ul>
          </div>
          <div class=" flex flex-col justify-between ">
            <h3 v-show="!userIsCoach" class="text-lg tracking-tighter underline text-gray-500  mb-1">If you are intressed in learning from me:</h3>
            <!-- <h2 class="text-width inline-block mt-2 py-2 px-4 rounded-md text-gray-900 font-medium">{{ coachData.price }}$</h2> -->
            <div class="flex justify-end">
            </div>
          </div>
        </div>
        <div class="container div2 p-8 flex flex-col items-center justify-start rounded-lg">
          <div>
          <img :src="coachData.pic_link" :alt="name" class="w-48 h-48 rounded-full justify-center object-cover mb-4">
          <h1 class="text-4xl text-center text-black font-bold mb-2">{{ coachData.firstName + " " + coachData.secondName }}</h1>
          </div>
          <div class="flex justify-items-end items-center mt-2">
            <div>
              <a :href="linkedin" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline transition duration-300 ease-in-out transform hover:scale-110 mr-4">
                <box-icon name='linkedin-square' type='logo' ></box-icon>
              </a>
              <a :href="whatsapp" target="_blank" rel="noopener noreferrer" class="text-green-500 hover:underline transition duration-300 ease-in-out transform hover:scale-110 mr-4">
                <box-icon name='whatsapp' type='logo' ></box-icon>
              </a>
            </div>
            
          </div>
          
        </div>
        <div class="flex justify-center m-2">
          <button v-show="!userIsCoach && !requestSent" @click="showRequest = true" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-3 rounded-sm focus:outline-none">Make a request</button>
        </div>
        <div class="flex justify-end mb-2 mr-2">
          <button v-show="userIsCoach" @click="editprofile" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-3 rounded focus:outline-none">Edit My profile</button>  
          </div>
      </div>
    </div>

        <!--requests section-->
    <div class="container mx-auto w-[700px] max-w-[90%] mt-5" v-if="showRequest">
        <div class="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-lg p-8 items-center ">
          <h2 class="text-red-700">{{ `this coach charges ${ coachData.price }$ per hour, although all prices are negoiciable even after the request` }}</h2>
          <label class="text-black mb-4 py-2 ">Fill this from to send the request :</label>
          <input class="text-black border rounded-lg px-3 py-2 mb-4 w-full" placeholder="Enter your name" v-model="requesterName" type="text">
          <input class="text-black border rounded-lg px-3 py-2 mb-4 w-full" placeholder="Enter your Email that coach will contact you with" v-model="requesterEmail" type="email">
            <textarea v-model="newrequest" placeholder="message" class="border rounded-lg px-3 py-2 mb-4 w-full text-black"></textarea>
            <button @click="makearequest" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Send your request</button>
        </div>
    </div>
    <!-- Comment section -->
    <div class="container mx-auto w-[700px] max-w-[90%]">
    <div class="bg-gradient-to-r from-blue-200 to-blue-300 rounded-lg shadow-lg p-8 item-center mt-5 mb-5">
    <h1 class="text-black mb-5 text-xl">Comments:</h1>
        <div v-for="(comment, index) in comments" :key="index" class="mb-4">
        <p class="text-gray-500 underline text-sm">{{ comment.username }} >> {{ comment.date }} </p>
        <p class="text-gray-700">{{ comment.text }}</p>
        <!-- <p class="text-gray-500 text-sm ">{{ comment.date }}</p> -->
        
        </div>
        <div v-show="!userIsCoach">
          <textarea v-model="newComment" placeholder="Write a comment..." class="border rounded-lg px-3 py-2 mb-4 w-full text-black"></textarea>
          <button @click="addComment" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Add Comment</button>
        </div>
      </div>

    </div>
    <!-- <div class="bg-green-100 p-8 rounded-md text-black shadow-md" v-html="currentSectionContent"></div> -->
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

<style scoped>
.button {
  @apply px-4 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50;
}

.div2 {
  @media screen and (max-width: 640px) {
      grid-row-start: 1;
    }
}
</style>
