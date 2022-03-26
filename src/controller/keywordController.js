const axios = require('axios');

module.exports = {
  getKeywords: () => {
    const projectUrl = `${global.URL_ALOCATE}/palavras-chave`;
    console.log('aqui');
    return new Promise((resolve, reject) => {
      axios.get(projectUrl).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
}
