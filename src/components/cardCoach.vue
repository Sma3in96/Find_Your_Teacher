<template>
  <div class="c-card">
    <img :src="coach.image" :alt="coach.name" class="c-image" />
    <h2 class="coach-name"> {{ coach.name }}</h2>
    <p class="price">Price: {{ coach.price }} </p>
    <p class="review">Review: {{ coach.review }} </p>
  </div>
</template>

<script>
export default {
    props: ['coach']
}
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
