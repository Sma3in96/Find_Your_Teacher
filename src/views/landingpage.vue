<template>
    <div id="app" class="relative bg-gray-100 min-h-screen">
    <div class="absolute inset-0 z-0 bg-gradient-to-r from-teal-600 to-teal-200 animate-pulse"></div>
    <main class="container mx-auto">
        <blogpost v-for="post in blogPosts" :key="post.id" :title="post.title" :excerpt="post.excerpt"/>
    </main>
    <footer class="flex justify-center items-center py-4 px-6 bg-gray-800 text-white">
    <div class="text-xl font-bold">Your Name - Coach</div>
        <!-- Footer content -->
    </footer>
    </div>
</template>

<script>
    import blogpost from '@/components/blogpost.vue'
    export default {
    components: {
    blogpost,
  },
  data() {
    return {
      blogPosts: [
        { id: 1, title: "Post Title 1", excerpt: "A short description of the post content." },
        { id: 2, title: "Post Title 2", excerpt: "Another post with a brief description." },
      ]
    }
  }
}
</script>
<style scoped>
@keyframes pulse {
    0% {
    opacity: 0.7;
}
    50% {
    opacity: 1;
}
    100% {
    opacity: 0.7;
}
}
.animate-pulse {
    animation: pulse 3s infinite ease-in-out;
}
</style>