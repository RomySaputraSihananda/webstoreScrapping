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
  await page.waitForSelector("div.shopee-search-item-result__items");
  let urls = await page.$$eval(
    "div.shopee-search-item-result__item",
    (links) => {
      // links = links.map;
    }
  );

  // const searchValue = await page.$eval(
  //   ".shopee-search-item-result__item > a",
  //   (el) => el.href
  // );
  console.log(urls);
};

const shopee = (url) => {
  const browserInstance = browser();
  scrapeAll(browserInstance, url);
};

module.exports = shopee;
