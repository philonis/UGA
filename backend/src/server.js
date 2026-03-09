const express = require('express')
const cors = require('cors')
const db = require('./models/database')

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Initialize sample data
db.initSampleData()

// Routes
app.get('/api', (req, res) => {
  res.json({ message: 'UGA API Server', version: '0.1.0' })
})

// Games API
app.get('/api/games', (req, res) => {
  const games = db.getGames()
  const scores = db.readData().scores
  
  // Aggregate scores for each game
  const gamesWithScores = games.map(game => {
    const gameScores = scores.filter(s => s.gameId === game.id)
    const mediaScore = gameScores.filter(s => s.type === 'media')
    const kolScore = gameScores.filter(s => s.type === 'kol')
    const overseasScore = gameScores.filter(s => s.type === 'overseas')
    
    return {
      ...game,
      mediaScore: mediaScore.length ? Math.round(mediaScore.reduce((a, b) => a + b.score, 0) / mediaScore.length) : null,
      kolScore: kolScore.length ? Math.round(kolScore.reduce((a, b) => a + b.score, 0) / kolScore.length) : null,
      overseasScore: overseasScore.length ? Math.round(overseasScore.reduce((a, b) => a + b.score, 0) / overseasScore.length) : null,
    }
  })
  
  res.json({ games: gamesWithScores })
})

app.get('/api/games/:id', (req, res) => {
  const game = db.getGameById(req.params.id)
  if (!game) {
    return res.status(404).json({ error: 'Game not found' })
  }
  
  const scores = db.getScores(game.id)
  const reviews = scores.map(s => ({
    source: s.source,
    score: s.score,
    summary: s.reviewText || '暂无短评',
    type: s.type,
    url: s.reviewUrl
  }))
  
  res.json({
    ...game,
    reviews,
    ugaNomination: true,
    lifecycle: {
      preRelease: 'completed',
      release: 'tracking',
      postRelease: 'ongoing'
    }
  })
})

// Release Schedule API (sample data)
app.get('/api/releases', (req, res) => {
  res.json({
    releases: [
      { date: '2024-03-15', name: '龙之信条 2', platform: 'PC/PS5/Xbox' },
      { date: '2024-03-20', name: '浪人崛起', platform: 'PS5' },
      { date: '2024-03-25', name: '星空', platform: 'PC/Xbox' },
      { date: '2024-04-01', name: '哈迪斯 2', platform: 'PC' },
    ]
  })
})

// UGA Awards API (sample data)
app.get('/api/uga-awards', (req, res) => {
  res.json({
    categories: [
      { id: 'goty', name: '年度最佳游戏', nominees: ['黑神话：悟空', '博德之门 3', '塞尔达传说：王国之泪'] },
      { id: 'narrative', name: '最佳叙事', nominees: ['博德之门 3', '赛博朋克 2077', '最终幻想 16'] },
      { id: 'art', name: '最佳艺术指导', nominees: ['黑神话：悟空', '塞尔达传说：王国之泪', '蜘蛛侠 2'] },
    ]
  })
})

// Submit vote API
app.post('/api/uga-awards/vote', (req, res) => {
  const { categoryId, gameId } = req.body
  // TODO: Store vote in database
  res.json({ success: true, message: '投票成功' })
})

// Steam Scraper API
app.post('/api/scrape/steam', async (req, res) => {
  try {
    const { appId } = req.body
    const { scrapeSteamGame } = require('./scrapers/steam')
    const data = await scrapeSteamGame(appId)
    res.json({ success: true, data })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 UGA Backend running on http://localhost:${PORT}`)
})
