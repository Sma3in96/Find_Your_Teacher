<template>
  <div class="c-card">
    <img :src="coach.image" :alt="coach.name" class="c-image" />
    <h2> {{ coach.name }}</h2>
    <p>Price: {{ coach.price }} </p>
    <p>Review: {{ coach.review }} </p>
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
  margin: 40px;
}
.coach-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
}
</style>
