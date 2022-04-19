const axios = require('axios');

module.exports = {
  getKeywords: () => {
    const alocateUrl = `${global.URL_ALOCATE}/alocate/palavras-chave`;
    return new Promise((resolve, reject) => {
      axios.get(alocateUrl).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  getSubject: (keywords) => {
    return new Promise((resolve, reject) => {
      axios.post(`${global.URL_ALOCATE}/alocate`, keywords).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
}
