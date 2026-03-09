<script setup>
const schedule = [
  { date: "02.26", title: "生化危机 安魂曲", platform: "PC/PS5/XSX", tags: ["冒险", "恐怖"] },
  { date: "03.05", title: "咖啡心语 东京", platform: "PC/Switch", tags: ["文字", "休闲"] },
  { date: "03.26", title: "OPUS: 心相吾山", platform: "PC", tags: ["剧情", "国产"] }
]
</script>

<template>
  <section class="py-24 px-12 bg-[#0a0a0c] border-t border-white/5">
    <div class="flex justify-between items-end mb-12">
      <h3 class="text-4xl font-black flex items-center gap-4 italic">
        📅 发售表 <span class="text-white/10 not-italic">/ SCHEDULE</span>
      </h3>
    </div>
    
    <div class="flex flex-col md:flex-row gap-8">
      <div 
        v-for="(item, idx) in schedule" 
        :key="idx" 
        class="flex-1 group"
      >
        <div class="text-6xl font-black text-white/5 mb-4 group-hover:text-red-600 transition-colors">
          {{ item.date }}
        </div>
        <div class="bg-[#151518] p-6 border-l-4 border-red-600 hover:bg-[#1a1a1e] transition-all">
          <p class="text-xs text-white/40 font-bold mb-2 uppercase">{{ item.platform }}</p>
          <h5 class="text-xl font-bold mb-4">{{ item.title }}</h5>
          <div class="flex gap-2">
            <span 
              v-for="tag in item.tags" 
              :key="tag" 
              class="text-[10px] border border-white/20 px-2 py-0.5 rounded text-white/60 uppercase"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
