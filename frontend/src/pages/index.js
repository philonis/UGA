import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>UGA - 游戏评分网</title>
        <meta name="description" content="游戏全生命周期追踪评价平台" />
      </Head>

      <div className="min-h-screen bg-uga-primary text-white">
        {/* Header */}
        <header className="bg-uga-secondary py-4 px-8">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-uga-accent">UGA</h1>
            <div className="space-x-6">
              <Link href="/" className="hover:text-uga-accent">首页</Link>
              <Link href="/games" className="hover:text-uga-accent">热门游戏</Link>
              <Link href="/release" className="hover:text-uga-accent">发售表</Link>
              <Link href="/uga-awards" className="hover:text-uga-accent">UGA 游戏大奖</Link>
            </div>
          </nav>
        </header>

        {/* Hero */}
        <section className="py-16 px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">游戏全生命周期追踪评价</h2>
            <p className="text-gray-400 text-lg">
              中国媒体、KOL、海外媒体评分聚合 · 玩家社区 · UGA 颁奖典礼
            </p>
          </div>
        </section>

        {/* UGA Awards Banner */}
        <section className="py-8 px-8 bg-uga-highlight">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold">🏆 UGA 游戏大奖</h3>
                <p className="text-gray-400">组委会 + KOL + 媒体 + 玩家 共同投票</p>
              </div>
              <Link href="/uga-awards" className="bg-uga-accent px-6 py-3 rounded-lg hover:opacity-90">
                立即投票 →
              </Link>
            </div>
          </div>
        </section>

        {/* Hot Games */}
        <section className="py-12 px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">🔥 热门游戏</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Placeholder game cards */}
              {[1, 2, 3, 4].map((i) => (
                <Link key={i} href={`/game/${i}`} className="bg-uga-secondary rounded-lg overflow-hidden hover:ring-2 hover:ring-uga-accent">
                  <div className="aspect-video bg-gray-700"></div>
                  <div className="p-4">
                    <h4 className="font-semibold">游戏名称 {i}</h4>
                    <div className="flex justify-between mt-2 text-sm">
                      <span className="text-green-400">媒体：8.5</span>
                      <span className="text-blue-400">玩家：9.0</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Release Schedule */}
        <section className="py-12 px-8 bg-uga-secondary">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">📅 发售表</h3>
            <div className="space-y-4">
              {[
                { date: '2024-03-15', name: '游戏 A', platform: 'PC/PS5' },
                { date: '2024-03-20', name: '游戏 B', platform: 'PC' },
                { date: '2024-03-25', name: '游戏 C', platform: '全平台' },
              ].map((game, i) => (
                <div key={i} className="flex justify-between items-center bg-uga-primary p-4 rounded-lg">
                  <span className="text-uga-accent font-mono">{game.date}</span>
                  <span>{game.name}</span>
                  <span className="text-gray-400 text-sm">{game.platform}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto text-center text-gray-500">
            <p>UGA 游戏评分网 © 2024 - 游戏全生命周期追踪评价平台</p>
          </div>
        </footer>
      </div>
    </>
  )
}
