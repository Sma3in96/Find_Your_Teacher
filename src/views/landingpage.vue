<template>
    <div class="relative bg-gray-100 min-h-screen">
        <div class="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse">
        <section class="container mx-auto px-4 py-16">
            <h1 class="text-4xl font-bold text-gray-800 mb-8">Your Application Name</h1>
            <p class="text-xl text-gray-600 text-center max-w-md mb-8">
            **Description of your application and its benefits.** Briefly explain what your application does and the value it offers to users.
            </p>
            <a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Sign Up - **Start Your Journey Today**
            </a>
        </section>
        </div>
    </div>
</template>

<script>

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
    animation: pulse 4s infinite ease-in-out;
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