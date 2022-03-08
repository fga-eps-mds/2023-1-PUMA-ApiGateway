/* eslint-disable import/no-unresolved */
const axios = require('axios');
const jwt = require('jsonwebtoken');

require('../config/environment');

module.exports = {
  registerUser: (body) => {
    const userUrl = `${global.URL_USER}/register`;
    const reqBody = body;
    return new Promise((resolve, reject) => {
      axios.post(userUrl, reqBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  logUserIn: async (body) => {
    const userUrl = `${global.URL_USER}/login`;
    const response = await axios.post(userUrl, body);
    const { userId, userType } = response.data;
    const token = jwt.sign({ userId, userType }, global.SECRET, { expiresIn: 604800 });
    return { token, type: userType };
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

  initial: () => {
    const URL = `${global.URL_USER}`;
    return new Promise((resolve) => {
      axios.get(URL).then((res) => {
        resolve(res.data);
      });
    }).catch(() => {
      // eslint-disable-next-line no-undef
      resolve(JSON.parse('{"cod": 400}'));
    });
  },
};
