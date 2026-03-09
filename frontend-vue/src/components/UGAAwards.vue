<script setup>
</script>

<template>
  <section class="py-24 mx-12 mb-24 bg-gradient-to-r from-red-600 to-red-900 rounded-3xl p-12 relative overflow-hidden group">
    <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
      <div class="max-w-xl">
        <div class="bg-black text-red-500 inline-block px-3 py-1 font-black text-xs uppercase tracking-widest mb-6 italic">
          2025 UGA GAME AWARDS
        </div>
        <h3 class="text-6xl font-black mb-6 leading-none italic uppercase">
          UGA 游戏大奖<br/>投票现已开启
        </h3>
        <p class="text-white/80 text-lg mb-8">
          参与组委会、KOL、媒体与玩家的加权投票，见证年度行业标杆的诞生。
        </p>
        <div class="flex gap-4">
          <button class="bg-white text-red-600 px-8 py-3 rounded font-black hover:bg-black hover:text-white transition-all uppercase italic">
            立即投票
          </button>
          <button class="border-2 border-white/30 text-white px-8 py-3 rounded font-black hover:border-white transition-all uppercase italic">
            颁奖回顾
          </button>
        </div>
      </div>
      <div class="relative">
        <div class="bg-black/30 backdrop-blur-md p-6 border border-white/10 rounded-2xl relative">
          <img 
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400" 
            class="w-64 h-80 object-cover rounded shadow-2xl mb-4" 
          />
          <div class="text-center">
            <p class="text-xs font-bold text-white/40 uppercase">提名揭晓：2025.11.20</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
