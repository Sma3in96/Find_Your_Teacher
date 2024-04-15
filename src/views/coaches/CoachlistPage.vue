<template>
    <div class="search-bar">
        <input type="text" v-model="searchQuery" @input="filterCoaches" placeholder="Search for a coach">
    </div>
    <div class="bg-red-500">
        <cardCoach v-for="coach,index in coachs" :key="index" :coach="coach"></cardCoach>
    </div>
</template>

<script>
import cardCoach from "../../components/cardCoach.vue";

export default {
  components: { cardCoach },
    data() {
        return {
            coachs: [
                {name: "farah", price: "50$", review: "good teacher"},
                {name: "sami", price: "80$", review: "bad teacher"},
                {name: "donk", price: "5$", review: "great teacher"}
            ]
        }
    }
}
</script>

<style scoped>
</style>

