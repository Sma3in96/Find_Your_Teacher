<template>
    <div class="bg-teal-200 p-4 bg-opacity-50 rounded text-black border-white border">
      <div class="flex justify-between items-center font-semibold">
        <div class="flex gap-4 items-center">
          <img
            class="bg-teal-100 size-[55px] rounded-full border"
            src=""
            alt=""
          >
          <p>{{ coach.FullName }}</p>
        </div>
        <div>{{ `$${coach.Price}/hour` }}</div>
      </div>
      <div class="flex items-center justify-between mt-4 gap-3">
        <div class="max-[500px]:text-balance">{{ coach.Description }}</div>
        <div class="flex items-center gap-4">
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
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: [ 'coach' ]
  };
  </script>
  
  <style scoped></style>
  