const axios = require('axios');
require('../config/environment').configEnv();

module.exports = {
  addPartner: (reqBody) => new Promise((resolve, reject) => {
    const url = `${global.URL_PROJECT}/partner`;
    axios.post(url, reqBody).then((response) => {
      resolve(response);
    }).catch((error) => {
      console.log(error);
      reject(error);
    });  
  }),

  getPartner: (partnerId) => new Promise((resolve, reject) => {
    const url = `${global.URL_PROJECT}/partner/${partnerId}`;
    axios.get(url).then((response) => {
      resolve(response);
    });
  }),

  getPartners: () => new Promise((resolve, reject) => {
    const url = `${global.URL_PROJECT}/partner`;
    axios.get(url).then((response) => {
      resolve(response);
    }).catch((error) => {
      console.log(error);
      reject(error);
    });  
  }),

  updatePartner: (partnerId, data) => {
    const url = `${global.URL_PROJECT}/partner/${partnerId}`;
    const reqBody = data;
    return new Promise((resolve, reject) => {
      axios.put(url, reqBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  deletePartner: (partnerId) => {
    const url = `${global.URL_PROJECT}/partner/${partnerId}`;
    return new Promise((resolve, reject) => {
      axios.delete(url).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  },
};
