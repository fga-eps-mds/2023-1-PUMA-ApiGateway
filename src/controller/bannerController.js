const axios = require('axios');
const authentication = require('../utils/authentication');
require('../config/environment').configEnv();

module.exports = {
  getAllBanners: () => new Promise((resolve, reject) => {
    const url = `${global.URL_PROJECT}/banner`;
    axios.get(url).then((response) => {
      resolve(response.data);
    }).catch((error) => {
      reject(error);
    });
  }),

  addBanner: (req) => {
    const reqBody = req.body;
    return new Promise((resolve, reject) => {
      const url = `${global.URL_PROJECT}/banner`;
      axios.post(url, reqBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  getBanner: (bannerId) => new Promise((resolve, reject) => {
    const url = `${global.URL_PROJECT}/banner/${bannerId}`;
    axios.get(url).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),

  updateBanner: (bannerId, data) => new Promise((resolve, reject) => {
    const url = `${global.URL_PROJECT}/banner/${bannerId}`;
    const reqBody = data;
    axios.put(url, reqBody).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),

  deleteBanner: (bannerId) => {
    return new Promise((resolve, reject) => {
      const url = `${global.URL_PROJECT}/banner/${bannerId}`;
      axios.delete(url).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  },
};
