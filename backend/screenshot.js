const puppeteer = require('puppeteer')

async function screenshot() {
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800 })
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' })
  await page.screenshot({ path: '/tmp/uga-homepage.png', fullPage: true })
  await browser.close()
  console.log('✅ 截图已保存：/tmp/uga-homepage.png')
}

screenshot().catch(console.error)
