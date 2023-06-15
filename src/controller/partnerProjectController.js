const axios = require('axios');

module.exports = {

  getProjects: () => new Promise((resolve, reject) => {
    const url = `${global.URL_PROJECT}/partnerProject`;
    axios.get(url).then((response) => {
      resolve(response);
    }).catch((e) => {
      reject(e);
    });
  }),

  getProject: (id) => new Promise((resolve, reject) => {
    const url = `${global.URL_PROJECT}/partnerProject/${id}`;
    axios.get(url).then((response) => {
      resolve(response);
    }).catch((e) => {
      reject(e);
    });
  }),

  updateProject: (id, data) => new Promise((resolve, reject) => {
    const url = `${global.URL_PROJECT}/partnerProject/${id}`;
    axios.put(url, data).then((response) => {
      resolve(response);
    }).catch((e) => {
      reject(e);
    });
  }),

  deleteProject: (id) => new Promise((resolve, reject) => {
    const url = `${global.URL_PROJECT}/partnerProject/${id}`;
    axios.delete(url).then((response) => {
      resolve(response);
    }).catch((e) => {
      reject(e);
    });
  }),

  createProject: (data) => {
    const url = `${global.URL_PROJECT}/partnerProject`;
    const reqBody = data;
    return new Promise((resolve, reject) => {
      axios.post(url, reqBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
};
