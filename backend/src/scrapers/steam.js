const axios = require('axios')
const cheerio = require('cheerio')

/**
 * Steam 游戏数据抓取
 * 参考：https://store.steampowered.com/app/{appId}
 */

async function scrapeSteamGame(appId) {
  try {
    const url = `https://store.steampowered.com/app/${appId}`
    
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    })

    const $ = cheerio.load(response.data)

    const gameData = {
      appId,
      name: $('#appHubAppName').text().trim(),
      description: $('.game_description_snippet').text().trim(),
      releaseDate: $('.date').text().trim(),
      platforms: {
        windows: $('.platform_img.windows').length > 0,
        mac: $('.platform_img.mac').length > 0,
        linux: $('.platform_img.linux').length > 0
      },
      genres: [],
      reviews: {
        positive: 0,
        negative: 0,
        summary: ''
      }
    }

    // Extract genres
    $('.block_content a').each((i, el) => {
      if ($(el).attr('href')?.includes('/genre/')) {
        gameData.genres.push($(el).text().trim())
      }
    })

    // Extract review summary
    const reviewSummary = $('.user_reviews_summary')
    if (reviewSummary.length > 0) {
      gameData.reviews.summary = reviewSummary.text().trim()
    }

    console.log(`✅ Scraped: ${gameData.name}`)
    return gameData

  } catch (error) {
    console.error(`❌ Error scraping ${appId}:`, error.message)
    throw error
  }
}

// CLI usage
if (require.main === module) {
  const appId = process.argv[2]
  if (!appId) {
    console.log('Usage: node steam.js <appId>')
    console.log('Example: node steam.js 1091500')
    process.exit(1)
  }

  scrapeSteamGame(appId)
    .then(data => console.log(JSON.stringify(data, null, 2)))
    .catch(err => console.error(err))
}

module.exports = { scrapeSteamGame }
