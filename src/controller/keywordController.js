const axios = require('axios');
require('../config/environment').configEnv();

module.exports = {
  addKeyword: (data) => {
    const url = `${global.URL_PROJECT}/keyword`;
    const reqBody = data;
    return new Promise((resolve, reject) => {
      axios.post(url, reqBody).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  editKeyword: (data) => {
    const url = `${global.URL_PROJECT}/keyword`;
    const reqBody = data;
    return new Promise((resolve, reject) => {
      axios.put(url, reqBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  deleteKeyword: (keywordid) => {
    const url = `${global.URL_PROJECT}/keyword/${keywordid}`;
    return new Promise((resolve, reject) => {
      axios.delete(url).then((response) => {
        resolve(response);
      });
    });
  },

  addKeywordSubject: (data) => {
    const url = `${global.URL_PROJECT}/keyword/subject`;
    const reqBody = data;
    return new Promise((resolve, reject) => {
      axios.post(url, reqBody).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  updateSubjectKeyword: (data) => {
    const url = `${global.URL_PROJECT}/keyword/subject`;
    const reqBody = data;
    return new Promise((resolve, reject) => {
      axios.put(url, reqBody).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  getKeywordsAlternative: () => {
    const url = `${global.URL_PROJECT}/keyword`;
    return new Promise((resolve, reject) => {
      axios.get(url).then((response) => {
        resolve(response);
      });
    });
  },
};
