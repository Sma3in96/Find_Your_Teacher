<template>
  <div class="bg-sky-500 p-4 bg-opacity-50 rounded border-white border">
    <div class="flex justify-between items-center font-semibold">
      <div class="flex gap-4 items-center">
        <img
          class="bg-red-500 size-[55px] rounded-full border"
          src=""
          alt=""
        >
        <p>{{ coach.name }}</p>
      </div>
      <div>{{ `$${coach.price}/hour` }}</div>
    </div>
    <div class="flex items-center justify-between mt-4 gap-3">
      <div class="max-[500px]:text-balance">Lorem ipsum, dolor sit amet consectetur adipisicing elit...</div>
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
