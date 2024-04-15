<template>
    <div class="search-bar bg-red-600" >
        <button v-if="!showSearch" @click="toggleSearch">
            <box-icon name='search-alt-2'></box-icon>
        </button>
        
        <input v-if="showSearch" type="text" v-model="searchQuery" @input="filterCoaches" placeholder="Search for a coach" class="bg-red-500 text-xl">
        <button v-if="showSearch" @click="toggleSearch">
            <box-icon name='arrow-back'></box-icon>
        </button>
    </div>
    <div class="bg-blue-600">
        <cardCoach v-for="coach,index in filteredCoaches" :key="index" :coach="coach"></cardCoach>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import cardCoach from "../../components/cardCoach.vue";

const coaches = [
        {name: "farah", price: "50$", review: "good teacher"},
        {name: "sami", price: "80$", review: "bad teacher"},
        {name: "donk", price: "5$", review: "great teacher"},
        {name: "alice", price: "70$", review: "excellent teacher"},
        {name: "bob", price: "60$", review: "average teacher"},
        {name: "charlie", price: "45$", review: "knowledgeable teacher"},
        {name: "david", price: "90$", review: "patient teacher"},
        {name: "emily", price: "55$", review: "skilled teacher"},
        {name: "frank", price: "85$", review: "friendly teacher"},
        {name: "george", price: "75$", review: "helpful teacher"}
    ];

const searchQuery = ref('');
const filteredCoaches = ref(coaches);
const showSearch = ref(false);

const toggleSearch = () => {
    showSearch.value = !showSearch.value;
    searchQuery.value = '';
}

const filterCoaches = () => {
    if (searchQuery.value) {
        console.log(searchQuery.value);
        filteredCoaches.value = coaches.filter(coach => coach.name.includes(searchQuery.value));
    } else {
        filteredCoaches.value = coaches;
    }
};
</script>

<style scoped>
input {
    background-color: blueviolet;
}
</style>
