const browser = require("./browser");

const scrapeAll = async (browserInstance, url) => {
  try {
    const browser = await browserInstance;
    await scraper(browser, url);
  } catch (err) {
    console.log(err);
  }
};

const scraper = async (browser, url) => {
  const page = await browser.newPage();
  console.log(`Navigating to ${url}...`);
  await page.goto(url);
};

const shoppe = () => {
  const browserInstance = browser();
  scrapeAll(browserInstance, "https://google.com");
};

module.exports = shoppe;
