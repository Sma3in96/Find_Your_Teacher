<template>
    <div class="search-bar" >
        <button v-if="!showSearch" @click="toggleSearch">
            <box-icon name='search-alt-2' class="search-icon"></box-icon>
        </button>
        
        <input v-if="showSearch" type="text" v-model="searchQuery" @input="filterCoaches" placeholder="Search for a coach" class="bg-white text-xl">
        <button v-if="showSearch" @click="toggleSearch">
            <box-icon name='arrow-back' class="arrow-back"></box-icon>
        </button>
    </div>
    <div class="Coach-card" >
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
    background-color: rgb(135,206,235);
    margin: 40px;
    border-radius: 10px;
    height: auto;
    padding: 5px;
    
}
.Coach-card {
    background-color: rgb(2,132,199);
    margin: 40px;
    border-radius: 10px;
    height: auto;
    padding: 1px;
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