const axios = require('axios');

module.exports = {
  getKnowledgeAreas: () => {
    const projectUrl = `${global.URL_PROJECT}/areas-conhecimento`;
    return new Promise((resolve, reject) => {
      axios.get(projectUrl).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
}