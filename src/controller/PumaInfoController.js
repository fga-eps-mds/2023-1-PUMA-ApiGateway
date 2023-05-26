const axios = require('axios');

module.exports = {

  getPumaInfo: () => new Promise((resolve, reject) => {
    const url = `${global.URL_PROJECT}/pumaInfo`;
    axios.get(url).then((response) => {
      resolve(response);
    }).catch((e) => {
      reject(e);
    });
  }),

  updatePumaInfo: (data) => {
    const url = `${global.URL_PROJECT}/pumaInfo`;
    const reqBody = data;
    return new Promise((resolve, reject) => {
      axios.put(url, reqBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
};
