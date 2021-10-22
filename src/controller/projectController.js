const axios = require('axios');

module.exports = {
  getAlocated: (body) => {
    const projUrl = `${global.URL_PROJECT}/alocated/${body.subjectId}`;
    return new Promise((resolve, reject) => {
      axios.get(projUrl).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  getProject: (body) => {
    const projUrl = `${global.URL_PROJECT}/project/${body.projectId}`;
    return new Promise((resolve, reject) => {
      axios.get(projUrl).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  putAlocated: (body) => {
    const projUrl = `${global.URL_PROJECT}/alocated/status`;
    return new Promise((resolve, reject) => {
      axios.put(projUrl, body).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  getAllSubjects: (body) =>{
    const projUrl = `${global.URL_PROJECT}/subject`;
    return new Promise((resolve, reject) => {
      axios.get(projUrl).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
};
