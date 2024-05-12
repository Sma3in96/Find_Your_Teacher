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
              <input type="text" required v-model="firstName"
              class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
              
          </div>
          <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">Second Name</label>
              <input type="text" required v-model="secondName"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
              <div class="mb-4 mt-2">
                <label class="block text-gray-700 text-sm font-bold mb-2">Github</label>
                <input type="text" required v-model="github"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
            </div>
          </div>
          <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">Description</label>
              <textarea rows="4" v-model="description" class="w-full"></textarea>
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
              <input type="link" v-model="linkLinkedIn"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">Whatsapp/Phone</label>
              <input type="link" v-model="phone"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">Price</label>
              <input type="link" v-model="price"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          
        
          </div>


          <button  @click.prevent="submitFunction" class="block mx-auto bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          SUBMIT
          </button>
  </form>
  </div>
  
</template>
<script setup>
    import { onMounted, ref } from 'vue';
    import {db, storage} from '../../firebase.js';
    import {collection, addDoc, doc, setDoc, getDoc} from 'firebase/firestore';
    import router from '@/router.js';
    import { ref as stRef, uploadBytes, getDownloadURL } from 'firebase/storage';
    import { useStore } from 'vuex';
    import { useRoute } from 'vue-router';

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
    const coachData = ref({})
    
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
            pic_link.value = url;
        }
        const userID = store.state.user_id;
        const docRef = doc(db, 'coachs', userID);
        setDoc(docRef, {
            firstName: firstName.value,
            secondName: secondName.value,
            github: github.value,
            description: description.value,
            specialization: selectedSpe.value,
            languages: selectedLanguages.value,
            linkedIn: linkLinkedIn.value,
            phone: phone.value,
            price: price.value,
            pic_link: pic_link.value,
            
        }, {merge: true});
        console.log("updated")
        router.push({name: 'coachprofile', params: {id: userID}});
    }
    const route = useRoute();
    const user_id = store.state.user_id
    const firstName = ref("")
    const secondName = ref("")
    const github = ref("")
    const description = ref("")
    const linkLinkedIn = ref("")
    const phone = ref("")
    const price = ref("")
    const pic_link = ref("")
    onMounted(async () => {
        const coach = await getDoc(doc(db, 'coachs', user_id))
        if (coach.exists()) {
          coachData.value = coach.data()
          console.log(coachData.value.firstName)
          firstName.value = coachData.value.firstName
          secondName.value = coachData.value.secondName
          github.value = coachData.value.github
          description.value = coachData.value.description
          selectedSpe.value = coachData.value.specialization
          selectedLanguages.value = coachData.value.languages
          linkLinkedIn.value = coachData.value.linkedIn
          phone.value = coachData.value.phone
          price.value = coachData.value.price
          pic_link.value = coachData.value.pic_link
        };
        });


</script>
  

<style scoped>
form {
    background-color: #eee;
    color: #000
}
</style>
