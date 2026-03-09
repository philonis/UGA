<script setup>
const trackingPhases = [
  { label: "发售前：宣发透过度监测", icon: "01" },
  { label: "发售时：首发质量及优化评估", icon: "02" },
  { label: "发售后：更新维护与社区响应", icon: "03" }
]
</script>

<template>
  <section class="py-24 px-12 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 transform translate-x-24"></div>
    <div class="grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <h3 class="text-5xl font-black leading-tight mb-8 uppercase tracking-tighter">
          独家<span class="text-red-600">全生命周期</span><br/>追踪评价体系
        </h3>
        <p class="text-white/60 text-lg mb-10 leading-relaxed border-l-2 border-white/10 pl-8 italic">
          "我们不只关注发售当下的那一刻，我们记录游戏从跳票、宣发、翻车到最后'救赎'的每一个版本细节。UGA 旨在建立属于中国玩家的行业白皮书。"
        </p>
        <div class="space-y-6">
          <div 
            v-for="phase in trackingPhases" 
            :key="phase.icon" 
            class="flex items-center gap-6 group cursor-default"
          >
            <span class="text-2xl font-black text-white/10 group-hover:text-red-600 transition-colors">{{ phase.icon }}</span>
            <div class="h-px w-8 bg-white/10"></div>
            <span class="text-lg font-bold group-hover:translate-x-2 transition-transform">{{ phase.label }}</span>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="bg-[#151518] p-8 border border-white/10 rounded-xl relative z-10">
          <div class="flex justify-between items-center mb-6">
            <span class="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Project Dashboard</span>
            <span class="text-red-500 flex items-center gap-1 text-[10px] font-bold">
              <div class="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div> LIVE TRACKING
            </span>
          </div>
          <div class="space-y-4">
            <div class="bg-black/40 p-4 rounded border border-white/5">
              <p class="text-sm font-bold mb-2">Marketing Campaign</p>
              <div class="h-2 bg-white/5 rounded-full overflow-hidden">
                <div class="h-full bg-red-600 w-3/4"></div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-black/40 p-4 rounded border border-white/5">
                <p class="text-[10px] text-white/40 uppercase font-bold">Total Exposure</p>
                <p class="text-2xl font-black">2.4M</p>
              </div>
              <div class="bg-black/40 p-4 rounded border border-white/5">
                <p class="text-[10px] text-white/40 uppercase font-bold">Steam Reviews</p>
                <p class="text-2xl font-black">94% <span class="text-xs text-green-500 font-medium">↑</span></p>
              </div>
            </div>
            <div class="bg-red-600/10 p-4 rounded border border-red-500/20">
              <p class="text-xs text-red-500 font-bold mb-1 italic">组委会最新结论：</p>
              <p class="text-xs text-white/80 leading-relaxed">近期 1.04 补丁大幅修复了性能 Bug，长线追踪评级上调至 [A+]。</p>
            </div>
          </div>
        </div>
        <div class="absolute -top-4 -right-4 w-full h-full bg-white/5 rounded-xl -z-0"></div>
      </div>
    </div>
  </section>
</template>
