import { useState } from 'react'

export default function ReleaseSchedule() {
  const [filter, setFilter] = useState('all')

  const releases = [
    { date: '2024-03-15', name: '游戏 A', platform: ['PC', 'PS5'], status: 'upcoming' },
    { date: '2024-03-18', name: '游戏 B', platform: ['PC'], status: 'upcoming' },
    { date: '2024-03-20', name: '游戏 C', platform: ['PC', 'Xbox', 'PS5'], status: 'upcoming' },
    { date: '2024-03-25', name: '游戏 D', platform: ['全平台'], status: 'upcoming' },
    { date: '2024-03-28', name: '游戏 E', platform: ['PC', 'Switch'], status: 'upcoming' },
    { date: '2024-04-01', name: '游戏 F', platform: ['PC'], status: 'upcoming' },
    { date: '2024-04-05', name: '游戏 G', platform: ['PS5', 'Xbox'], status: 'upcoming' },
    { date: '2024-04-10', name: '游戏 H', platform: ['PC', 'PS5'], status: 'upcoming' },
  ]

  const platforms = ['all', 'PC', 'PS5', 'Xbox', 'Switch']

  const filteredReleases = filter === 'all' 
    ? releases 
    : releases.filter(r => r.platform.includes(filter))

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
          <h1 className="text-4xl font-bold mb-4">📅 游戏发售表</h1>
          <p className="text-gray-400">追踪即将发售的游戏</p>
        </div>
      </section>

      {/* Platform Filter */}
      <section className="py-4 px-8 bg-uga-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-4">
            {platforms.map((p) => (
              <button
                key={p}
                onClick={() => setFilter(p)}
                className={`px-4 py-2 rounded-lg transition-all
                  ${filter === p 
                    ? 'bg-uga-accent text-white' 
                    : 'bg-uga-primary text-gray-400 hover:text-white'}`}
              >
                {p === 'all' ? '全部' : p}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Release List */}
      <section className="py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            {filteredReleases.map((game, index) => (
              <div
                key={index}
                className="bg-uga-secondary p-6 rounded-lg hover:bg-uga-highlight transition-all"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-6">
                    <div className="text-center min-w-20">
                      <div className="text-2xl font-bold text-uga-accent">
                        {game.date.split('-')[2]}
                      </div>
                      <div className="text-sm text-gray-400">
                        {game.date.split('-')[0]}.{game.date.split('-')[1]}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{game.name}</h3>
                      <div className="flex gap-2 mt-2">
                        {game.platform.map((p, i) => (
                          <span
                            key={i}
                            className="text-xs bg-uga-primary px-2 py-1 rounded text-gray-400"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <a
                    href={`/game/${index}`}
                    className="bg-uga-accent/20 text-uga-accent px-4 py-2 rounded-lg hover:bg-uga-accent hover:text-white transition-all"
                  >
                    查看详情 →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar View Link */}
      <section className="py-12 px-8 bg-uga-secondary">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-4">需要日历视图？</p>
          <button className="bg-uga-primary border border-uga-accent text-uga-accent px-6 py-3 rounded-lg hover:bg-uga-accent hover:text-white transition-all">
            切换日历视图
          </button>
        </div>
      </section>
    </div>
  )
}
