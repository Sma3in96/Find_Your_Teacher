<template>
    <div class="bg-white rounded-md shadow-md p-4 mb-4">
        <h3 class="text-lg font-bold mb-2 text-black">{{ title }}</h3>
        <p class="text-gray-700">{{ coach }}</p>
        <a href="#" class="text-blue-500 hover:text-blue-700">Read More</a>
    </div>
</template>

<script>
    export default {
    props: {
    title: String,
    coach: String,
    }
}
</script>

<style scoped>
    h3 {
    font-size: 1.25rem;
    }
    p {
    font-size: 0.875rem;
    }
</style>
