<template>
    <div class="search-bar bg-teal-900 p-6 bg-opacity-50 justify-between rounded border-black flex w-[800px] max-w-[90%] mx-auto mt-5">
        <div class="flex gap-4">
            <button
            v-if="!showSearch"
            @click="toggleSearch"
        >
            <box-icon class=" search-icon w-8 h-8"
                name='search-alt-2'
            ></box-icon>
            </button>
            
        <input
            class="bg-teal-100 text-xl text-black border rounded p-1"
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

        <button class="filter-icon">
                <box-icon name='filter'></box-icon>
        </button>

        <div class="filter-options">
        <!-- Your filter options go here -->
        <label><input type="checkbox"> Option 1</label><br>
        <label><input type="checkbox"> Option 2</label><br>
        <label><input type="checkbox"> Option 3</label><br>
        </div>
    </div>

<div class="bg-teal-800 w-[800px] max-w-[90%] mx-auto grid gap-4 p-4 rounded-lg shadow mt-5">
    <div class="flex justify-end">
        <router-link to="/register">
            <button class=" bg-teal-100 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded ">Register as coach</button>
        </router-link>
    </div>
        <cardCoach
            v-for="coach in filteredCoaches"
            :coach="coach"
            :key="coach.id"
        ></cardCoach>
</div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import cardCoach from "../../components/cardCoach.vue";
import {db} from '../../firebase.js';
import {getDocs, collection} from 'firebase/firestore'


const searchQuery = ref('');
let allCoaches = [];
const filteredCoaches = ref([]);
const showSearch = ref(false);

onMounted( async () => {
    let coaches = await getDocs(collection(db, 'coachs'))
    coaches.forEach((coach) => {
        allCoaches.push({
            id: coach.id,
            data: coach.data()});
    })
    filteredCoaches.value = allCoaches;

})

const toggleSearch = () => {
    showSearch.value = !showSearch.value;
    searchQuery.value = '';
    filteredCoaches.value = allCoaches;
}

const filterCoaches = () => {
    if (searchQuery.value) {
        console.log(searchQuery.value);
        filteredCoaches.value = allCoaches.filter(coach => coach.data.firstName.includes(searchQuery.value));
    } else {
        filteredCoaches.value = allCoaches;
    }
};



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

</style>
