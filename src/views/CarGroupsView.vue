<template>
    <NavBar />
  <CarCard :items="items" :title="'Grupos de Carros'" :description="'Conheça os grupos de carros disponíveis'" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CarCard from '@/components/CarCard.vue';
import NavBar from '@/components/NavBar.vue';

let items = [
  '@/assets/images/cars/categoria-1.png',
  '@/assets/images/cars/categoria-2.png',
  '@/assets/images/cars/categoria-3.png',
  '@/assets/images/cars/categoria-4.png',
  '@/assets/images/cars/categoria-5.png'
]

// const title = 'Grupos de Carros'
// const description = 'Conheça os grupos de carros disponíveis'
</script>
