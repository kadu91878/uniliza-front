<template>
    <div class="card">
      <div class="carousel">
        <naive-carousel :interval="3000">
          <naive-carousel-item v-for="(item, index) in props.items" :key="index">
            <!-- Your carousel content here, e.g., images or other components -->
            <img :src="item.image" alt="Carousel Image" />
          </naive-carousel-item>
        </naive-carousel>
      </div>
      <div class="card-content">
        <!-- Card content goes here -->
        <h2>{{ props.title }}</h2>
        <p>{{ props.description }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { NCarousel, NCarouselItem } from 'naive-ui';

const props = {
    title: String, description: String, items: Array<any>
}
  
  </script>
  
  <style scoped>
  .card {
    display: flex;
    flex-direction: column;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .carousel {
    width: 100%;
    height: 200px; /* Adjust the height as needed */
  }
  
  .card-content {
    padding: 16px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  