<template>
    <navigationbar v-if="!notfound"/>
    <RouterView />
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import navigationbar from './components/navigationbar.vue';

const route = useRoute();
const notfound = computed(() => route.name === 'notfound' || route.name === 'home' ? true : false);
</script>
