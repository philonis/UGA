<script setup>
const hotGames = [
  { title: "消逝的光芒 困兽", score: 8.6, source: "12 家媒体共同评分", color: "border-red-500" },
  { title: "噬血代码 2", score: 8.0, source: "22 家媒体共同评分", color: "border-orange-500" },
  { title: "维纳斯璀璨假期", score: 6.9, source: "12 家媒体共同评分", color: "border-yellow-500" },
  { title: "浩劫前夕", score: 1.0, source: "3 家媒体共同评分", color: "border-green-500" }
]
</script>

<template>
  <section class="py-24 px-12 bg-[#0d0d0f]">
    <div class="flex justify-between items-end mb-12">
      <div>
        <h3 class="text-4xl font-black flex items-center gap-4 italic">
          📈 热门推荐 <span class="text-white/10 not-italic">/ HOT GAMES</span>
        </h3>
        <div class="h-1 w-24 bg-red-600 mt-2"></div>
      </div>
      <a href="#" class="text-sm font-bold text-white/40 hover:text-white transition-colors flex items-center gap-1 group">
        查看全部 →
      </a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div 
        v-for="(game, idx) in hotGames" 
        :key="idx" 
        class="group relative bg-[#151518] border border-white/5 hover:border-red-500/50 transition-all duration-500 overflow-hidden cursor-pointer"
      >
        <div class="aspect-[16/9] overflow-hidden">
          <img 
            :src="`https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400&sig=${idx}`" 
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          />
        </div>
        <div class="p-6">
          <h4 class="text-xl font-bold mb-6 group-hover:text-red-500 transition-colors h-14 line-clamp-2">{{ game.title }}</h4>
          <div class="flex items-center justify-between mt-auto">
            <div>
              <p class="text-[10px] text-white/40 font-bold uppercase">UGA Score</p>
              <p class="text-[10px] text-white/40">{{ game.source }}</p>
            </div>
            <div :class="`relative w-16 h-16 rounded-full border-4 ${game.color} flex items-center justify-center`">
              <span class="text-2xl font-black">{{ game.score }}</span>
              <div class="absolute -inset-2 bg-white/5 rounded-full blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
