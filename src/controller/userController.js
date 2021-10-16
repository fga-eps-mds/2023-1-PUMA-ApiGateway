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
  logUserIn: (body) => {
    const userUrl = `${global.URL_USER}/login`;
    const reqBody = body;
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        let {userId, userType} = await axios.post(userUrl, reqBody);
        userId = userId.data;
        let token;
        switch(userType) {
          case 'Aluno':
            token = jwt.sign({ userId }, global.STUDENT_SECRET, { expiresIn: 604800 });
            break;
          case 'Professor':
            token = jwt.sign({ userId }, global.PROFESSOR_SECRET, { expiresIn: 604800 });
            break;
          case 'Agente Externo':
            token = jwt.sign({ userId }, global.AGENT_SECRET, { expiresIn: 604800 });
            break;
        }
        resolve(token);
      } catch (e) {
        reject(e);
      }
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
