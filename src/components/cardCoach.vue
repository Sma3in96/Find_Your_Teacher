<template>
    <div class="bg-white bg-opacity-35 m-2 p-4 border rounded text-black ">
      <div class="flex justify-between items-center font-semibold">
        <div class="flex gap-4 items-center">
          <img
            class="bg-teal-100 size-[55px] rounded-full border"
            :src="coach.data.pic_link"
            alt=""
          >
          <p><router-link :to="{name: 'coachprofile', params: {id: coach.id, data: coach.data}}">{{ coach.data.firstName + ' ' + coach.data.secondName }}</router-link></p>
        </div>
        <div class=" text-orange-500 px-3 py-2 rounded-md shadow-sm hover:text-orange-600" >{{ `${coach.data.price} $/h` }}</div>
      </div>
      <div class=" items-center mt-4 gap-3 ">
        <div class="max-[500px]:text-balance">{{ coach.data.description }}</div>
        <div>
            <ul class="flex justify-start gap-2 mb-2" >
                <li v-for="language in coach.data.languages" :key="language"> 
                    <img width="30" height="30" class="hover:vibrate" :src="languagesLinks[language]" />
                </li>
            </ul>
        </div>
        <div >
            <ul class=" divide-teal-300 flex justify-start gap-2">
                <li 
                v-for="spe in coach.data.specialization" 
                :key="spe"
                class="py-3 px-4 rounded-md shadow-md "
                ><span class="text-gray-800 font-medium">{{ spe }}</span></li>
            </ul>
        </div>
        <!-- <div class="flex items-center gap-4">
          <button>
            <box-icon
              type='solid'
              name='dislike'
            ></box-icon>
          </button>
          <button>
            <box-icon
              name='like'
              type='solid'
            ></box-icon>
          </button>
        </div> -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
    return {
      languagesLinks: {
        python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        html: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
        css: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
        C: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
        'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
        'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
        PHP: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
        Swift: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg',
        Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
        flutter: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg'
      }
    }
    },  
    props: {
      coach: {
        type: Object,
        required: true
      }
    }};
  </script>
  
  <style scoped>

    </style>
  