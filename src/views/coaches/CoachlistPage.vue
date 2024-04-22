<template>
    <div class="search-bar">
        <button
            v-if="!showSearch"
            @click="toggleSearch"
        >
            <box-icon
                name='search-alt-2'
                class="search-icon"
            ></box-icon>
        </button>

        <input
            v-if="showSearch"
            type="text"
            v-model="searchQuery"
            @input="filterCoaches"
            placeholder="Search for a coach"
            class="bg-white text-xl"
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
    <div>
        <router-link to="/register">
            <button>Register as coach</button>
        </router-link>
        <coachregistration class="hidden" @form-submitted="handleForm" />
    </div>
    <div class="bg-blue-900 w-[800px] max-w-[90%] mx-auto grid gap-4 p-4 rounded-lg shadow">
        <cardCoach
            v-for="coach in filteredCoaches"
            :coach="coach"
        ></cardCoach>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import cardCoach from "../../components/cardCoach.vue";
import { sharedData } from "../../hooks/coachs";
import coachregistration from './CoachregistrationPage.vue';


const searchQuery = ref('');
const filteredCoaches = ref(sharedData.coaches);
const showSearch = ref(false);

const toggleSearch = () => {
    showSearch.value = !showSearch.value;
    searchQuery.value = '';
    filteredCoaches.value = coaches;
}

const filterCoaches = () => {
    if (searchQuery.value) {
        console.log(searchQuery.value);
        filteredCoaches.value = coaches.filter(coach => coach.FullName.includes(searchQuery.value));
    } else {
        filteredCoaches.value = coaches;
    }
};

function handleForm(formData) {
    console.log(formData);
}

</script>

<style scoped>
input {
    position: static;
    margin: 20px;
    width: 300px;
    padding: 10px;
    border: 2px solid #000000;
    border-radius: 10px;
    font-size: 16px;
    text-shadow: 2px 2px 5px black;
}

.search-bar {
    background-color: rgb(135, 206, 235);
    margin: 40px;
    border-radius: 10px;
    height: auto;
    padding: 5px;
}

.search-icon {
    padding: 5px;
    font-size: 15px;
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
