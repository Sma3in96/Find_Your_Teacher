<template>
    <Loading v-show="!dataReady" />
    <div class="bar p-3  justify-between relative rounded border-black flex w-[800px] max-w-[90%] mx-auto mt-5">
        <div class="flex gap-4 ">
            <button
            v-if="!showSearch"
            @click="toggleSearch"
        >
            <box-icon class=" search-icon w-8 h-8"
                name='search-alt-2'
            ></box-icon>
            </button>
            
        <input
            class="bg-white text-xl text-black border rounded p-1 searchBar"
            v-if="showSearch"
            type="text"
            v-model="searchQuery"
            @input="filterCoaches"
            placeholder="Search for a coach"
            
        >
        <button
            v-if="showSearch"
            @click="toggleSearch"
        >
            <box-icon
                name='arrow-back'
                class="arrow-back"
            ></box-icon>
        </button>
        </div>

        <button @click="showFilters = !showFilters" class="filter-icon">
                <box-icon name='filter'></box-icon>
        </button>
        
        <div
        v-show="showFilters"
        v-on-click-outside="cancelFilter"
        class="bg-blue-200 opacity-80 absolute right-2 flex flex-col p-4 rounded-md shadow-md transition-all duration-300 ease-in-out"
        >
            <div class="flex justify-between gap-4">
            <div class="mb-4 px-3 py-3 rounded-md hover:shadow-md">
                <h3 class="text-teal-900 mb-2">Specialization:</h3>
                <label
                v-for="option in options"
                :key="option"
                class="flex items-center mb-2 last:mb-0"
                >
                    <input type="checkbox" :value="option" v-model="selectedSpe"  class="mr-2" />
                        <span >{{ option }}</span>
                </label>
            </div>
            <div class="mb-4 px-3 py-3 rounded-md hover:shadow-md">
                <h3 class="text-teal-900 mb-2">Programming Languages:</h3>
                <label
                v-for="lang in Languages"
                :key="lang"
                class="flex items-center mb-2 last:mb-0"
                >
                    <input type="checkbox" :value="lang" v-model="selectedLanguages" class="mr-2" />
                        <span>{{ lang }}</span>
                </label>
            </div>
            </div>
            <div class="flex justify-center gap-5">
                <button
                @click="cancelFilter"
                class="bg-white text-teal-600 px-2 py-1 rounded-md hover:bg-gray-200 transition-colors duration-200 ease-in-out"
                >
                Cancel
                </button>
                <button
                @click="applyFilter"
                class="bg-white text-teal-600 px-2 py-1 rounded-md hover:bg-gray-200 transition-colors duration-200 ease-in-out"
                >
                Apply
                </button>
            </div>
        </div>
    </div>

    <div class="bg-gradient-to-r from-white to-blue-200  w-[800px] max-w-[90%] mx-auto grid gap-4 p-4 rounded-lg shadow mt-5">
    <div class="flex justify-end">
        <router-link to="/register">
            <button  class=" bg-teal-100 hover:bg-teal-950 text-black font-bold py-2 px-4 rounded ">Register as coach</button>
        </router-link>
    </div>
    <cardCoach
        v-show="dataReady"
        v-for="coach in filteredCoaches"
        :coach="coach"
        :key="coach.id"
    ></cardCoach>
    <div v-show="noResult" class="text-black flex justify-center" >
        <div>
        <img src="@/assets/icons8-nothing-found-80.png"> </div>
        <span class="py-5" >No coach found</span> 
    </div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import cardCoach from "../../components/cardCoach.vue";
import {db} from '../../firebase.js';
import {getDocs, collection} from 'firebase/firestore'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { vOnClickOutside } from '@vueuse/components'
import Loading from '../../components/loading.vue';

const router = useRouter();
const store = useStore();


const showFilters = ref(false);
const dataReady = ref(false);
const searchQuery = ref('');
let allCoaches = [];
const filteredCoaches = ref([]);
const showSearch = ref(false);
const selectedSpe = ref([]);
const selectedLanguages = ref([]);
const noResult = ref(false);

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

// on mounted gets the date from the backend
onMounted( async () => {
    let coaches = await getDocs(collection(db, 'coachs'))
    coaches.forEach((coach) => {
        allCoaches.push({
            id: coach.id,
            data: coach.data()});
    })
    filteredCoaches.value = allCoaches;
    dataReady.value = true;

})


// cancel all the filters
const cancelFilter = () => {
    showFilters.value = false;
    selectedSpe.value = [];
    selectedLanguages.value = [];
    filteredCoaches.value = allCoaches;
}


// return the selected coaches according to the selected filter
const applyFilter = () => {
    filteredCoaches.value = allCoaches.filter((coach) => {
    const hasSelectedSpecialization = selectedSpe.value.every((spe) => coach.data.specialization.includes(spe));
    const hasSelectedLanguage = selectedLanguages.value.every((lang) => coach.data.languages.includes(lang));
    return hasSelectedSpecialization && hasSelectedLanguage;
    });
    if (filteredCoaches.value.length === 0) {
        noResult.value = true;
    }
    else {
        noResult.value = false;
    }
    showFilters.value = false;
}

// Show the search bar
const toggleSearch = () => {
    showSearch.value = !showSearch.value;
    searchQuery.value = '';
    filteredCoaches.value = allCoaches;
    noResult.value = false;
}

// search function for the current search query
// ---------------------------------------------------------------- 
const filterCoaches = () => {
    if (searchQuery.value) {
    filteredCoaches.value = searchCoaches(allCoaches, searchQuery.value);
    if (filteredCoaches.value.length === 0) {
        noResult.value = true;
    } else {
        noResult.value = false;
    }
    
    } else {
        filteredCoaches.value = allCoaches;
    }
};
// searchCoaches returns a list of all the available search queries
function searchCoaches(coaches, searchQuery) {
    const lowerCaseSearchQuery = searchQuery.toLowerCase();
    const searchRegex = new RegExp(lowerCaseSearchQuery.toLowerCase(), 'i')
    return coaches.filter(coach => {
        function searchInData(data) {
            if (typeof data === 'string') {
            return searchRegex.test(data);
            } else if (Array.isArray(data)) {
            return data.some(item => searchInData(item));
            } else if (typeof data === 'object' && data !== null) {
            return Object.values(data).some(value => searchInData(value));
        }
    return false;
    }

        return searchInData(coach.data);
    });
}




</script>

<style scoped>

.search-icon {
color: black;
padding: 5px;
}

.filter-icon {
    color: black;
}

.arrow-back {
    padding: 5px;
    width: 40px;
    height: 30px;
    color: black;
    margin-left: -10px;
}

.bar {
    background-color: #93c572;
    opacity: 90%;
    @media screen and (max-width: 640px) {
        font-size: 1rem;
        padding: 0.5rem;
    }
}

.searchBar {
    @media screen and (max-width: 640px) {
        font-size: 1rem;
        padding: 0.5rem;
    }
}


</style>
