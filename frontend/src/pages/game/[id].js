import { useRouter } from 'next/router'

export default function GameDetail() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className="min-h-screen bg-uga-primary text-white">
      {/* Header */}
      <header className="bg-uga-secondary py-4 px-8">
        <nav className="max-w-7xl mx-auto">
          <a href="/" className="text-uga-accent">← 返回首页</a>
        </nav>
      </header>

      {/* Game Info */}
      <section className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cover */}
            <div className="aspect-video bg-gray-700 rounded-lg"></div>
            
            {/* Info */}
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold mb-4">游戏名称</h1>
              <p className="text-gray-400 mb-6">游戏简介预览...</p>
              
              {/* Scores */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-uga-secondary p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-400">85</div>
                  <div className="text-sm text-gray-400">中国媒体</div>
                </div>
                <div className="bg-uga-secondary p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-400">88</div>
                  <div className="text-sm text-gray-400">中国 KOL</div>
                </div>
                <div className="bg-uga-secondary p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-400">82</div>
                  <div className="text-sm text-gray-400">海外媒体</div>
                </div>
              </div>

              {/* UGA Badge */}
              <div className="bg-uga-highlight p-4 rounded-lg">
                <span className="text-uga-accent font-bold">🏆 UGA 2024 提名</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Module */}
      <section className="py-12 px-8 bg-uga-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">📝 评测聚合</h2>
          
          <div className="space-y-4">
            {/* Review Item */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-uga-primary p-6 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">媒体/KOL 名称 {i}</h3>
                    <p className="text-gray-400 text-sm mt-1">短评内容预览...</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">9.0</div>
                    <a href="#" className="text-uga-accent text-sm hover:underline">查看全文 →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-term Tracking */}
      <section className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">📊 长线追踪评价</h2>
          <div className="bg-uga-secondary p-6 rounded-lg">
            <p className="text-gray-400">游戏全生命周期数据追踪中...</p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span>发售前宣传</span>
                <span className="text-green-400">✓ 已完成</span>
              </div>
              <div className="flex justify-between">
                <span>发售时表现</span>
                <span className="text-green-400">✓ 追踪中</span>
              </div>
              <div className="flex justify-between">
                <span>发售后维护</span>
                <span className="text-yellow-400">⏳ 持续追踪</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
