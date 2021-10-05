const axios = require('axios');

require('../config/environment');

module.exports = {
  addAluno: (body) => {
    const userUrl = `${global.URL_USER}/aluno`;
    const reqBody = body;
    return new Promise((resolve, reject) => {
      axios
        .post(userUrl, reqBody)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getAluno: (matriculaIdParam) => {
    const URL = `${global.URL_USER}/aluno:matriculaId`;
    const matriculaId = matriculaIdParam;
    return new Promise((resolve) => {
      axios.get(URL, matriculaId).then((res) => {
        resolve(res.data);
      });
    }).catch(() => {
      // eslint-disable-next-line no-undef
      resolve(JSON.parse('{"cod": 400}'));
    });
  },
};
