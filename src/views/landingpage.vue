<template>
    <div id="app" class="relative bg-gray-100 min-h-screen">
        <div class="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse">
        <section class="container mx-auto px-4 py-16">
        <h2 class="text-2xl font-bold mb-8 text-gray-600">Latest Blog Posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <blogpost v-for="post in blogPosts" :key="post.id" :title="post.title" :coach="post.coach" />
        </div>
        </section>
    </div>
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
                { id: 1, title: "Post Title 1", coach: "A short description of the post content." },
                { id: 2, title: "Post Title 2", coach: "Another post with a brief description." },
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
    animation: pulse 2s infinite ease-in-out;
    opacity: 0.8;
}
.container {
  z-index: 2; /* Place the content on top */
}

.absolute.inset-0 {
  z-index: 1; /* Keep the background animation behind */
}
  /* Add custom styles for blog post section and individual posts (optional) */
</style>