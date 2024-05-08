<template>
  <div class="page-loader" >
    <div class="cube1"></div>
    <div class="cube2"></div>
    <div class="cube3"></div>
    <div class="cube4"></div>
  </div> 
</template>

<script>
</script>

<style  scoped>


/* Page loader styles */
.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  backdrop-filter: blur(5px);
}

/* Cube styles */
.cube1 {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-color: #8CC271;
  animation: left 1s infinite;

}

.cube2 {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-color: #69BEEB;
}

.cube3 {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-color: #F5AA39;
}

.cube4 {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  background-color: #E9643B;
  animation: right 1s infinite 0.5s;
}

/* Left animation */
@keyframes left {
  40% {
    transform: translateX(-60px);
  }
  50% {
    transform: translateX(0);
  }
}

/* Right animation */
@keyframes right {
  40% {
    transform: translateX(60px);
  }
  50% {
    transform: translateX(0);
  }
}

</style>
