<template>
  <div class="flex flex-col bg-black p-16">
    <div class="flex items-center mb-4">
      <img
        class="w-48 h-48 rounded-full mr-4 bg-white text-black"
        src="https://placehold.co/"
        alt="Profile picture"
      />
      <div class="font-bold text-3xl">Full Name</div>
    </div>
    <div class="flex space-x-1">
      <button
        type="button"
        class="text-gray-600 bg-teal-300 px-4 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-gray-200"
        @click="showSection('description')"
      >
        Description
      </button>
      <button
        type="button"
        class="text-gray-600 bg-teal-300 px-4 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-gray-200"
        @click="showSection('specialization')"
      >
        Specialization
      </button>
      <button
        type="button"
        class="text-gray-600 bg-teal-300 px-4 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-gray-200"
        @click="showSection('additional')"
      >
        Additional Information
      </button>
      <button
        type="button"
        class="text-gray-600 bg-teal-300 px-4 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 active:bg-gray-200"
        @click="showSection('request')"
      >
        Make a Request
      </button>
    </div>
    <div class="bg-green-100 p-8 rounded-md text-black shadow-md" v-html="currentSectionContent"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSection: 'description',
      sections: {
        description: `I'm a passionate coach with X years of experience helping people achieve their goals. I specialize in Y and I'm committed to providing my clients with the support and guidance they need to succeed.`,
        specialization: `I specialize in helping clients with a variety of goals, including weight loss, muscle gain, and improved overall fitness. I use a personalized approach to create a plan that is right for each individual.`,
        additional: `I am also a certified nutritionist and can help you create a healthy eating plan that supports your fitness goals. I am also passionate about helping people develop a healthy relationship with food.`,
        request: `If you're interested in learning more about my coaching services, please contact me today for a free consultation.`,
      },
    };
  },
  methods: {
    showSection(section) {
      this.currentSection = section;
    },
  },
  computed: {
    currentSectionContent() {
      return this.sections[this.currentSection];
    },
  },
};
</script>

<style scoped>
.button {
  @apply px-4 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50;
}
</style>
