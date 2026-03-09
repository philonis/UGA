import Link from 'next/link'

export default function HotGames() {
  const games = [
    { id: 1, name: '游戏 A', mediaScore: 92, kolScore: 89, playerScore: 91, cover: '/covers/1.jpg' },
    { id: 2, name: '游戏 B', mediaScore: 88, kolScore: 85, playerScore: 90, cover: '/covers/2.jpg' },
    { id: 3, name: '游戏 C', mediaScore: 95, kolScore: 93, playerScore: 89, cover: '/covers/3.jpg' },
    { id: 4, name: '游戏 D', mediaScore: 85, kolScore: 87, playerScore: 88, cover: '/covers/4.jpg' },
    { id: 5, name: '游戏 E', mediaScore: 90, kolScore: 91, playerScore: 92, cover: '/covers/5.jpg' },
    { id: 6, name: '游戏 F', mediaScore: 82, kolScore: 84, playerScore: 86, cover: '/covers/6.jpg' },
    { id: 7, name: '游戏 G', mediaScore: 89, kolScore: 90, playerScore: 87, cover: '/covers/7.jpg' },
    { id: 8, name: '游戏 H', mediaScore: 93, kolScore: 88, playerScore: 94, cover: '/covers/8.jpg' },
  ]

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-400'
    if (score >= 80) return 'text-blue-400'
    if (score >= 70) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="min-h-screen bg-uga-primary text-white">
      {/* Header */}
      <header className="bg-uga-secondary py-4 px-8">
        <nav className="max-w-7xl mx-auto">
          <a href="/" className="text-uga-accent">← 返回首页</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">🔥 热门游戏</h1>
          <p className="text-gray-400">媒体、KOL、玩家评分聚合</p>
        </div>
      </section>

      {/* Sort Options */}
      <section className="py-4 px-8 bg-uga-secondary">
        <div className="max-w-7xl mx-auto flex gap-4">
          <button className="px-4 py-2 bg-uga-accent rounded-lg">综合排序</button>
          <button className="px-4 py-2 bg-uga-primary text-gray-400 rounded-lg hover:text-white">媒体评分</button>
          <button className="px-4 py-2 bg-uga-primary text-gray-400 rounded-lg hover:text-white">KOL 评分</button>
          <button className="px-4 py-2 bg-uga-primary text-gray-400 rounded-lg hover:text-white">玩家评分</button>
          <button className="px-4 py-2 bg-uga-primary text-gray-400 rounded-lg hover:text-white">发售日期</button>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {games.map((game) => (
              <Link
                key={game.id}
                href={`/game/${game.id}`}
                className="bg-uga-secondary rounded-lg overflow-hidden hover:ring-2 hover:ring-uga-accent transition-all group"
              >
                <div className="aspect-video bg-gray-700 group-hover:opacity-80 transition-all"></div>
                <div className="p-4">
                  <h3 className="font-semibold truncate">{game.name}</h3>
                  <div className="mt-3 space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">媒体</span>
                      <span className={`font-bold ${getScoreColor(game.mediaScore)}`}>
                        {game.mediaScore}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">KOL</span>
                      <span className={`font-bold ${getScoreColor(game.kolScore)}`}>
                        {game.kolScore}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">玩家</span>
                      <span className={`font-bold ${getScoreColor(game.playerScore)}`}>
                        {game.playerScore}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="py-12 px-8">
        <div className="max-w-7xl mx-auto flex justify-center gap-2">
          <button className="px-4 py-2 bg-uga-secondary rounded-lg hover:bg-uga-highlight">上一页</button>
          <button className="px-4 py-2 bg-uga-accent rounded-lg">1</button>
          <button className="px-4 py-2 bg-uga-secondary rounded-lg hover:bg-uga-highlight">2</button>
          <button className="px-4 py-2 bg-uga-secondary rounded-lg hover:bg-uga-highlight">3</button>
          <button className="px-4 py-2 bg-uga-secondary rounded-lg hover:bg-uga-highlight">下一页</button>
        </div>
      </section>
    </div>
  )
}
