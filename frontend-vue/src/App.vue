<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HomePage from './pages/HomePage.vue'

const currentRoute = ref('home')
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0c] text-white font-sans selection:bg-red-500">
    <HomePage />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
}
</style>
