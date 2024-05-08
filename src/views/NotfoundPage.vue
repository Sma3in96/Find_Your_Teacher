<template>
    <div class="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex flex-col items-center justify-center py-8">
        <img src="@/hooks/error.png" alt="Logo" class="w-20 mb-8" />
        <h1 class="text-xl">
            Page Not Found !!
        </h1>
        <h2 class="text-4xl font-bold text-white glitch animate-ping infinite">
        404
        </h2>
        <p class="text-xl text-gray-200 text-center mb-8">
        Oops! We can't seem to find the page you're looking for.
        </p>
        <router-link to="/home" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
        <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7"></path></svg>
        Go Back Home
        </router-link>
    </div>
</template>

<script>
    export default {
}
</script>

<style scoped>
.glitch {
    animation: glitch 1s linear infinite;
}

@keyframes glitch {
    0% {
        transform: translateX(0);
    }
    20% {
        transform: translateX(5px);
    }
    40% {
        transform: translateX(-5px);
    }
    60% {
    transform: translateX(5px);
    }
    80% {
        transform: translateX(-5px);
    }
    100% {
        transform: translateX(0);
    }
    }

.animate-ping {
    animation: ping 1.5s infinite ease-in-out;
    }

@keyframes ping {
    0% {
        opacity: 1;
    }
    75% {
        opacity: 0.2;
    }
    100% {
        opacity: 1;
    }
}

h1 {
  animation: glitch 1s linear infinite;
}

@keyframes glitch {
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(5px);
  }
  40% {
    transform: translateX(-5px);
  }
  60% {
    transform: translateX(5px);
  }
  80% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}

h2 {
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
}
</style>
