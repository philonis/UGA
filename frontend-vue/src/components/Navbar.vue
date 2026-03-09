<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav 
    class="fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between"
    :class="isScrolled ? 'bg-[#0a0a0c]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'"
  >
    <div class="flex items-center gap-12">
      <h1 class="text-3xl font-black tracking-tighter italic text-red-600">
        UGA<span class="text-white not-italic">.ARCHIVE</span>
      </h1>
      <div class="hidden md:flex gap-8 text-sm font-bold tracking-widest uppercase">
        <a href="#" class="hover:text-red-500 transition-colors border-b-2 border-red-500 pb-1">热门游戏</a>
        <a href="#" class="hover:text-red-500 transition-colors">发售表</a>
        <a href="#" class="hover:text-red-500 transition-colors flex items-center gap-1">
          🏆 UGA 大奖
        </a>
      </div>
    </div>
    
    <div class="flex items-center gap-6">
      <div class="relative hidden lg:block">
        <input 
          type="text" 
          placeholder="搜索游戏、KOL、评测..." 
          class="bg-white/5 border border-white/10 rounded-full py-2 px-6 w-64 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all" 
        />
      </div>
      <button class="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-sm font-bold text-sm transition-all shadow-lg shadow-red-600/20 uppercase">
        登录
      </button>
    </div>
  </nav>
</template>
