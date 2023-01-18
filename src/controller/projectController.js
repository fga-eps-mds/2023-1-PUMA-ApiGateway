const axios = require('axios');
const authentication = require('../utils/authentication');

module.exports = {
  getProject: (projectId) => new Promise((resolve, reject) => {
    const url = `${global.URL_PROJECT}/project/${projectId}`;
    axios.get(url).then((response) => {
      resolve(response);
    });
  }),

  addProject: (req) => {
    const reqBody = req.body;
    return new Promise((resolve, reject) => {
      const url = `${global.URL_PROJECT}/project`;
      reqBody.userid = authentication.getUserId(req.headers.auth);
      axios.post(url, reqBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  putProject: (body) => new Promise((resolve, reject) => {
    const url = `${global.URL_PROJECT}/project`;
    axios.put(url, body).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),

  deleteProject: (projectId) => {
    return new Promise((resolve, reject) => {
      const url = `${global.URL_PROJECT}/project/${projectId}`;
      axios.delete(url).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  evaluateProject: (body) => new Promise((resolve, reject) => {
    const url = `${global.URL_PROJECT}/project/evaluate`;
    axios.put(url, body).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),

  reallocateProject: (body) => new Promise((resolve, reject) => {
    const url = `${global.URL_PROJECT}/project/reallocate`;
    axios.put(url, body).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),

  getKeywordsAvailbleToProject: () => new Promise((resolve, reject) => {
    const url = `${global.URL_PROJECT}/project/keywords`;
    axios.get(url).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),

  getMyProposals: async (req) => {
    const userId = authentication.getUserId(req.headers.auth);
    const url = `${global.URL_PROJECT}/userProposals/${userId}`;
    return axios.get(url, { params: req.query });
  },

  initial: () => new Promise((resolve, reject) => {
    axios.get(`${global.URL_PROJECT}`).then((response) => {
      resolve(response);
    });
  }),
};
