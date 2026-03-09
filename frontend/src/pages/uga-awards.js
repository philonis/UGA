import { useState } from 'react'

export default function UGAAwards() {
  const [votes, setVotes] = useState({})

  const categories = [
    {
      id: 'goty',
      name: '年度最佳游戏',
      nominees: [
        { id: 1, name: '游戏 A' },
        { id: 2, name: '游戏 B' },
        { id: 3, name: '游戏 C' },
        { id: 4, name: '游戏 D' },
      ]
    },
    {
      id: 'narrative',
      name: '最佳叙事',
      nominees: [
        { id: 5, name: '游戏 E' },
        { id: 6, name: '游戏 F' },
        { id: 7, name: '游戏 G' },
      ]
    },
    {
      id: 'art',
      name: '最佳艺术指导',
      nominees: [
        { id: 8, name: '游戏 H' },
        { id: 9, name: '游戏 I' },
        { id: 10, name: '游戏 J' },
      ]
    },
  ]

  const handleVote = (categoryId, gameId) => {
    setVotes(prev => ({
      ...prev,
      [categoryId]: gameId
    }))
  }

  const submitVotes = () => {
    console.log('Submitting votes:', votes)
    alert('投票成功！感谢参与 UGA 游戏大奖评选')
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
      <section className="py-16 px-8 bg-gradient-to-b from-uga-highlight to-uga-primary">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">🏆 UGA 游戏大奖 2024</h1>
          <p className="text-xl text-gray-400">
            组委会 + KOL + 媒体 + 玩家 共同投票
          </p>
        </div>
      </section>

      {/* Voting Categories */}
      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto">
          {categories.map((category) => (
            <div key={category.id} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-uga-accent">
                {category.name}
              </h2>
              <div className="space-y-3">
                {category.nominees.map((nominee) => (
                  <label
                    key={nominee.id}
                    className={`flex items-center p-4 rounded-lg cursor-pointer transition-all
                      ${votes[category.id] === nominee.id 
                        ? 'bg-uga-accent/20 ring-2 ring-uga-accent' 
                        : 'bg-uga-secondary hover:bg-uga-highlight'}`}
                  >
                    <input
                      type="radio"
                      name={category.id}
                      value={nominee.id}
                      checked={votes[category.id] === nominee.id}
                      onChange={() => handleVote(category.id, nominee.id)}
                      className="w-5 h-5 text-uga-accent"
                    />
                    <span className="ml-4 text-lg">{nominee.name}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          {/* Submit Button */}
          <div className="text-center mt-12">
            <button
              onClick={submitVotes}
              className="bg-uga-accent hover:bg-uga-accent/90 px-12 py-4 rounded-lg text-xl font-bold transition-all"
            >
              提交投票
            </button>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-12 px-8 bg-uga-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">📋 评选规则</h2>
          <div className="space-y-4 text-gray-300">
            <p>1. 每个类别可投 1 票</p>
            <p>2. 投票权重：组委会 40% + KOL 30% + 媒体 20% + 玩家 10%</p>
            <p>3. 投票截止日期：2024 年 12 月 31 日</p>
            <p>4. 颁奖典礼将于 2025 年 1 月举行</p>
          </div>
        </div>
      </section>

      {/* Past Winners */}
      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">🏅 历届回顾</h2>
          <div className="bg-uga-secondary p-6 rounded-lg">
            <p className="text-gray-400">2023 年度最佳游戏：XXX</p>
            <p className="text-gray-400 mt-2">2022 年度最佳游戏：XXX</p>
          </div>
        </div>
      </section>
    </div>
  )
}
