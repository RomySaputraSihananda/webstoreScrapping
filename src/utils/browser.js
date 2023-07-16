const puppeteer = require("puppeteer");

const browser = async () => {
  try {
    console.log("Opening the browser......");
    const browser = await puppeteer.launch({
      headless: false,
      args: ["--disable-setuid-sandbox"],
      ignoreHTTPSErrors: true,
    });
    return browser;
  } catch (err) {
    console.log(err);
  }
};

module.exports = browser;
