<template>
    <div class="relative min-h-screen">
    <div class="absolute inset-0 z-0 bg-gray-900 opacity-75"></div>  
    <div class="absolute inset-0 z-1 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse">
        </div>  
        <div class="container mx-auto px-4 py-16 flex flex-col items-center justify-center h-screen bg-gray-900 opacity-50 rounded-lg shadow-md">  
        <h1 class="text-6xl font-bold text-black mb-8 font-['Sevillana']">"Your Coaching Expertise"</h1>
        <p class="text-xl text-gray-200 text-center max-w-md mb-8">
            Welcome to our platform, where aspiring web developers find guidance and expertise to fuel their journey towards mastery. Our website is your gateway to a community of seasoned web development coaches dedicated to empowering students like you with the skills and knowledge needed to thrive in the digital landscape. Whether you're a beginner seeking foundational understanding or an experienced coder aiming to refine your craft, our tailored coaching sessions cater to all levels of expertise. Join us and embark on a transformative learning experience, where every line of code you write propels you closer to your goals."
        </p>
            <div>
            <router-link to="/auth/signup" class="btn">
                Start Your Coding Journey Now
            </router-link>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
h1,
p {
    text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
}
.btn {
    display: inline-block;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    text-decoration: none;
    text-align: center;
    border: none;
    border-radius: 8px;
    background: linear-gradient(to right, #4CAF50, #8BC34A);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
}

.btn:hover {
    background: linear-gradient(to right, #8BC34A, #4CAF50);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
