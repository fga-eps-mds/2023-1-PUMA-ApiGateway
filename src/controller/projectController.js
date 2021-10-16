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
  }
};
