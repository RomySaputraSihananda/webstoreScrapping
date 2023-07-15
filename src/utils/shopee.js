const cheerio = require("cheerio");
const getHtml = require("./getHtml");

const shopee = async () => {
  const html = await getHtml("http://localhost/dashboard/");
  const $ = cheerio.load(html);
  console.log($("html").find("h1").text());
};

module.exports = shopee;
