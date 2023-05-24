const axios = require('axios');

module.exports = {
  getExternal: () => new Promise((resolve, reject) => {
    const url = `${global.URL_EXTERNAL}/`;
    axios.get(url).then((response) => {
      resolve(response);
    }).catch((error) => {
        reject(error);
      });
  })
}