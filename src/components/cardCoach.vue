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


<style scoped>

.c-card {
  border: 2px outset #000;
  border-radius: 10px;
  padding: 40px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 100px;
  background-color: rgb(135,206,235);
  color: black;
}

.coach-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.coach-name {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 10px;
  width: 300px;
  font-weight: bold;
  margin-left: 100px;
}

.price {
  margin-top: 50px;
  padding-top: 10px;
}

.review {
  margin-left: 300px;
}

</style>
