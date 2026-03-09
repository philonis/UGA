<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import HotGames from '../components/HotGames.vue'
import LifecycleTracking from '../components/LifecycleTracking.vue'
import ReleaseSchedule from '../components/ReleaseSchedule.vue'
import UGAAwards from '../components/UGAAwards.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    <HeroSection />
    <HotGames />
    <LifecycleTracking />
    <ReleaseSchedule />
    <UGAAwards />
    <Footer />
  </div>
</template>
