import puppeteer from 'puppeteer'
import chromium from 'chrome-aws-lambda'

const url = 'https://github.com/trending'

const getTrendingRepositories = async () => {
  let browser = null
  let page = null

  try {
    browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath,
      headless: true,
    })

    page = await browser.newPage()
    await page.goto(url)
    const data = await page
      ?.evaluate(() => {
        const repositories = Array.from(document.querySelectorAll('article'))
        return repositories?.map(repo => {
          const [name, description, stars, forks, starsToday] = Array.from(
            repo.querySelectorAll(
              'h1 a, p, div:nth-of-type(2) > a, div:nth-of-type(2) > a:nth-of-type(2), div:nth-of-type(2) > span.float-sm-right',
            ),
          )

          return {
            name: name?.innerText || '',
            description: description?.innerText || '',
            forks: forks?.innerText,
            stars: stars?.innerText || '',
            starsToday: starsToday?.innerText || '',
          }
        })
      })
      .catch(error => error)
    return data
  } finally {
    if (browser) {
      await browser.close()
    }
  }
}

export { getTrendingRepositories }
