<template>
  <div class="container">
    <div class="date-bar">
      <n-space class="date-pickers" horizontal>
        <n-date-picker status="warning" />
        
        <n-date-picker status="error" />
      </n-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NDatePicker, NSpace } from 'naive-ui'
</script>

<style scoped>
.date-bar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.date-pickers {
  display: flex;
  gap: 20px;
}
</style>
