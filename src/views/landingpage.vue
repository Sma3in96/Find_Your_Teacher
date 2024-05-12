<template>
    <div class="back flex justify-center items-center min-h-screen ">
      <div class="container mx-auto max-w-md px-4 py-8 rounded-lg shadow-lg bg-white ml-2 mr-2">
        <h1 class="text-4xl font-extrabold text-teal-700 text-center mb-6">Find Your Teacher</h1>
        <p class="text-lg text-gray-800 text-center mb-8">
          Find Your Teacher is your one-stop shop for connecting with amazing teachers
          and finding the perfect learning experience. Whether you're a beginner or
          a seasoned learner, we have a wide range of teachers to suit your needs.
        </p>
        <h3 class="text-lg font-medium text-gray-800 text-center mb-4">Why Choose Find Your Teacher?</h3>
        <ul class="list-disc pl-6 mb-8">
          <li class="text-gray-800 mb-2">Extensive Teacher Network: Find teachers for a variety of subjects and skill levels.</li>
          <li class="text-gray-800 mb-2">Convenient Online Learning: Learn from the comfort of your own home with our online learning platform.</li>
          <li class="text-gray-800 mb-2">Flexible Scheduling: Find teachers who offer schedules that work for you.</li>
          <li class="text-gray-800 mb-2">Affordable Rates: Find quality teachers at competitive prices.</li>
        </ul>
        <router-link to="/home" class="btn text-white bg-teal-500 py-3 px-6 rounded-md font-semibold hover:bg-teal-600 flex justify-center mx-auto block w-full max-w-xs mx-auto mb-2" >
          Explore Find Your Teacher
        </router-link>
        <h5 class="text-gray-800 text-center mb-2">or a quick login</h5>
        <router-link to="/auth/login" class="btn text-white bg-teal-500 py-3 px-6 rounded-md font-semibold hover:bg-teal-600 flex justify-center mx-auto block w-full max-w-xs mx-auto">
          Log In
        </router-link>
      </div>
    </div>
</template>
  
<style scoped>
.btn {
    transition: all 0.3s ease;
  }
  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .back {
    background-image: url(https://wallpaperaccess.com/full/314785.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
