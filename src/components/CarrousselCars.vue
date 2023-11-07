<template>
  <div class="carousel-container">
    <div class="carousel-wrapper">
      <h3 class="carousel-title">Conheça a nossa Frota</h3>
      <p>As melhores condições para você reservar e aproveitar</p>
      <n-carousel autoplay show-arrow show-dots>
        <router-link to="/">
          <img class="carousel-img" src="../assets/images/cars/categoria-1.png" />
          <p class="carousel-title">Grupo-E Compactos</p>
        </router-link>
        <router-link to="/">
          <img class="carousel-img" src="../assets/images/cars/categoria-2.png" />
          <P class="carousel-title">Grupo-D Sedans</P>
        </router-link>
        <router-link to="/">
          <img class="carousel-img" src="../assets/images/cars/categoria-3.png" />
          <P class="carousel-title">Grupo-C Furgões</P>
        </router-link>
        <router-link to="/">
          <img class="carousel-img" src="../assets/images/cars/categoria-4.png" />
          <P class="carousel-title">Grupo-B SUV</P>
        </router-link>
        <router-link to="/">
          <img class="carousel-img" src="../assets/images/cars/categoria-5.png" />
          <P class="carousel-title">Grupo-A Luxo</P>
        </router-link>
      </n-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NCarousel } from 'naive-ui'
</script>

<style scoped>
.carousel-title {
  text-align: center;
  text-decoration: none;
  color: black;
}
.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: silver;
}

.carousel-wrapper {
  width: 25%; /* adjust the width as needed */
}

.carousel-img {
  width: auto;
  height: 240px;
}
.carousel-title {
  display: flex;
  justify-content: center;
}
</style>
