/* eslint-disable import/no-unresolved */
const axios = require('axios');
const jwt = require('jsonwebtoken');

require('../config/environment').configEnv();

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
    const { userId, type } = response.data;
    const token = jwt.sign({ userId, userType: type }, global.SECRET, { expiresIn: 604800 });
    return { token, ...response.data };
  },

  getStudent: async (matriculaIdParam) => {
    const URL = `${global.URL_USER}/aluno/${matriculaIdParam}`;
    try {
      return await new Promise((resolve) => {
        axios.get(URL).then((res) => {
          resolve(res.data);
        });
      });
    } catch {
      // eslint-disable-next-line no-undef
      resolve(JSON.parse('{"cod": 400}'));
    }
  },

  initial: () => {
    const URL = `${global.URL_USER}`;
    return new Promise((resolve) => {
      axios.get(URL).then((res) => {
        resolve(res.data);
      });
    });
    ;
  },

  updatePassword: (param) => {
    const userUrl = `${global.URL_USER}/password/${param.email}`;
    const reqBody = param;
    return new Promise((resolve, reject) => {
      axios.put(userUrl, reqBody).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  recoverPassword: (body) => {
    const userUrl = `${global.URL_USER}/recover`;
    const reqBody = body;
    return new Promise((resolve, reject) => {
      axios.post(userUrl, reqBody).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        if (error.message.includes('404')) {
          resolve({ error, status: 404 });
        }
        reject(error);
      });
    });
  },

  addUserType: (body) => {
    const userUrl = `${global.URL_USER}/userType`;
    const reqBody = body;
    return new Promise((resolve, reject) => {
      axios.post(userUrl, reqBody).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        if (error.message.includes('404')) {
          resolve({ error, status: 404 });
        }
        reject(error);
      });
    });
  },

  getUserType: (userTypeId) => {
    const reqUserTypeId = userTypeId || '';
    const userUrl = `${global.URL_USER}/userType/${reqUserTypeId}`;
    return new Promise((resolve, reject) => {
      axios.get(userUrl).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        if (error.message.includes('404')) {
          resolve({ error, status: 404 });
        }
        reject(error);
      });
    });
  },

  updateUserType: (userTypeId, body) => {
    const userUrl = `${global.URL_USER}/userType/${userTypeId}`;
    const reqBody = body;
    return new Promise((resolve, reject) => {
      axios.put(userUrl, reqBody).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        if (error.message.includes('404')) {
          resolve({ error, status: 404 });
        }
        reject(error);
      });
    });
  },

  deleteUserType: (userTypeId) => {
    const userUrl = `${global.URL_USER}/userType/${userTypeId}`;
    return new Promise((resolve, reject) => {
      axios.delete(userUrl).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        if (error.message.includes('404')) {
          resolve({ error, status: 404 });
        }
        reject(error);
      });
    });
  },

  getPendingApprovalTeacher: () => {
    const userUrl = `${global.URL_USER}/user/teacher/pending`;
    return new Promise((resolve, reject) => {
      axios.get(userUrl).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  updateStatusTeacher: (userId, body) => {
    const userUrl = `${global.URL_USER}/user/teacher/pending/${userId}`;
    const reqBody = body;
    return new Promise((resolve, reject) => {
      axios.patch(userUrl, reqBody).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  },
};
