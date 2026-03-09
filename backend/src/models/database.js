const fs = require('fs')
const path = require('path')

const dataPath = path.join(__dirname, '../../data/uga.json')

// Initialize data file
function initDataFile() {
  const dir = path.dirname(dataPath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, JSON.stringify({
      games: [],
      scores: [],
      ugaAwards: [],
      lifecycleTracking: []
    }, null, 2))
  }
}

function readData() {
  initDataFile()
  return JSON.parse(fs.readFileSync(dataPath, 'utf8'))
}

function writeData(data) {
  initDataFile()
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
}

// Game operations
function getGames() {
  const data = readData()
  return data.games
}

function getGameById(id) {
  const data = readData()
  return data.games.find(g => g.id === parseInt(id))
}

function addGame(game) {
  const data = readData()
  game.id = data.games.length > 0 ? Math.max(...data.games.map(g => g.id)) + 1 : 1
  game.createdAt = new Date().toISOString()
  data.games.push(game)
  writeData(data)
  return game
}

// Score operations
function getScores(gameId) {
  const data = readData()
  return data.scores.filter(s => s.gameId === gameId)
}

function addScore(score) {
  const data = readData()
  score.id = data.scores.length > 0 ? Math.max(...data.scores.map(s => s.id)) + 1 : 1
  score.createdAt = new Date().toISOString()
  data.scores.push(score)
  writeData(data)
  return score
}

// Initialize with sample data
function initSampleData() {
  const data = readData()
  if (data.games.length === 0) {
    // Add sample games
    const sampleGames = [
      { name: '黑神话：悟空', steamAppId: '2358720', description: '国产动作 RPG', releaseDate: '2024-08-20', platforms: ['PC', 'PS5'] },
      { name: '塞尔达传说：王国之泪', steamAppId: null, description: '任天堂冒险游戏', releaseDate: '2023-05-12', platforms: ['Switch'] },
      { name: '博德之门 3', steamAppId: '1086940', description: '拉瑞安 RPG 巨作', releaseDate: '2023-08-03', platforms: ['PC', 'PS5', 'Xbox'] },
      { name: '赛博朋克 2077', steamAppId: '1091500', description: 'CDPR 开放世界', releaseDate: '2020-12-10', platforms: ['PC', 'PS5', 'Xbox'] },
    ]
    
    sampleGames.forEach(game => addGame(game))
    
    // Add sample scores
    const games = getGames()
    games.forEach((game, i) => {
      addScore({ gameId: game.id, type: 'media', source: '媒体 A', score: 85 + i })
      addScore({ gameId: game.id, type: 'kol', source: 'KOL B', score: 88 + i })
      addScore({ gameId: game.id, type: 'overseas', source: 'IGN', score: 82 + i })
    })
    
    console.log('✅ 示例数据已初始化')
  }
}

module.exports = {
  readData,
  writeData,
  getGames,
  getGameById,
  addGame,
  getScores,
  addScore,
  initSampleData
}
