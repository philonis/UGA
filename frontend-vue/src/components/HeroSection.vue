<script setup>
import { ref, onMounted } from 'vue'

const activeHero = ref(0)

const heroGames = [
  {
    id: 1,
    title: "天国：拯救 2",
    subtitle: "Kingdom Come: Deliverance II",
    desc: "中世纪硬核动作角色扮演游戏的回归。UGA 组委会深度追踪：从早期宣发到发售后的长线表现。",
    score: 9.3,
    tags: ["角色扮演", "历史", "开放世界"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 2,
    title: "黑神话：悟空",
    subtitle: "Black Myth: Wukong",
    desc: "中国首款国产 3A 大作。从预告片发布的惊艳到全球媒体的一致赞誉，记录每一个里程碑节点。",
    score: 9.1,
    tags: ["动作", "西游", "国产"],
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=2070"
  }
]

onMounted(() => {
  const interval = setInterval(() => {
    activeHero.value = (activeHero.value + 1) % heroGames.length
  }, 5000)
  return () => clearInterval(interval)
})
</script>

<template>
  <section class="relative h-[90vh] overflow-hidden">
    <div 
      v-for="(game, index) in heroGames" 
      :key="game.id" 
      class="absolute inset-0 transition-opacity duration-1000"
      :class="activeHero === index ? 'opacity-100' : 'opacity-0'"
    >
      <img :src="game.image" class="w-full h-full object-cover scale-105" :alt="game.title" />
      <div class="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/40 to-transparent" />
      <div class="absolute bottom-32 left-12 max-w-2xl animate-in fade-in slide-in-from-left-8 duration-700">
        <div class="flex gap-2 mb-4">
          <span 
            v-for="tag in game.tags" 
            :key="tag" 
            class="bg-red-600/20 border border-red-600/40 text-red-500 text-[10px] font-bold px-2 py-1 rounded tracking-widest"
          >
            {{ tag }}
          </span>
        </div>
        <h2 class="text-7xl font-black mb-2 tracking-tight leading-none uppercase">{{ game.title }}</h2>
        <p class="text-xl text-white/60 mb-8 italic font-light">{{ game.subtitle }}</p>
        <p class="text-lg text-white/80 mb-8 leading-relaxed border-l-4 border-red-600 pl-6">{{ game.desc }}</p>
        <div class="flex items-center gap-6">
          <button class="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-black hover:bg-red-600 hover:text-white transition-all transform hover:scale-105">
            ▶ 观看评测视频
          </button>
          <div class="flex flex-col">
            <span class="text-xs text-white/40 font-bold uppercase tracking-widest">UGA 综合评分</span>
            <span class="text-4xl font-black text-red-500">{{ game.score }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 指示器 -->
    <div class="absolute bottom-12 right-12 flex gap-4">
      <button 
        v-for="(_, idx) in heroGames" 
        :key="idx" 
        @click="activeHero = idx"
        class="h-1 bg-white transition-all"
        :class="activeHero === idx ? 'w-24 bg-red-600' : 'w-12 opacity-30'"
      />
    </div>
  </section>
</template>
