const axios = require("axios");

const getHtml = async (url) => {
  try {
    const html = await axios
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return html;
  } catch (err) {
    console.log(err);
  }
};

module.exports = getHtml;
