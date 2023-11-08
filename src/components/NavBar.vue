<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <div class="links">
          <router-link to="/" class="navbar-item">
            <img class="logo" loading="lazy" src="../assets/images/logos/uniliza-logo.ico" />
          </router-link>
          <router-link to="/car-group" class="custom-link">Grupos de Carros</router-link>
          <router-link to="/" class="custom-link">Ofertas</router-link>
          <router-link to="/" class="custom-link">Dúvidas</router-link>
        </div>
      </div>
      <div class="DateBar">
        <DateBar />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import DateBar from '@/components/DateBar.vue'
</script>

<style scoped>
.links {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.container {
  background: linear-gradient(to right, rgba(151, 89, 110, 255), rgba(65, 54, 67, 255));
  padding: 0.2%;
}
.custom-link {
  text-decoration: none;
  color: White;
}
.logo {
 height: 100px;
 margin-left: 0;
}
</style>
