const axios = require('axios');
const authentication = require('../utils/authentication');

const projUrlGetAlocated = `${global.URL_PROJECT}/alocated/`;
const projUrlGetProject = `${global.URL_PROJECT}/project/get/`;
const projUrlPutProject = `${global.URL_PROJECT}/project/update`;
const projUrlPutProjectEvaluate = `${global.URL_PROJECT}/project/evaluate`;
const projUrlPutProjectReallocate = `${global.URL_PROJECT}/project/reallocate`;
const projUrlPutAlocated = `${global.URL_PROJECT}/alocated/status`;
const projUrlGetAllSubjects = `${global.URL_PROJECT}/subject`;
const projUrlPutProposalStatus = `${global.URL_PROJECT}/alocate/`;
const projUrlGetMyProposals = `${global.URL_PROJECT}/userProposals/`;

module.exports = {
  getProject: (projectId) => new Promise((resolve, reject) => {
    axios.get(projUrlGetProject + projectId).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),

  addProject: (req) => {
    const projectUrl = `${global.URL_PROJECT}/project`;
    const reqBody = req.body;
    return new Promise((resolve, reject) => {
      reqBody.userid = authentication.getUserId(req.headers.auth);
      axios.post(projectUrl, reqBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  putProject: (body) => new Promise((resolve, reject) => {
    axios.put(projUrlPutProject, body).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),

  evaluateProject: (body) => new Promise((resolve, reject) => {
    axios.put(projUrlPutProjectEvaluate, body).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),

  reallocateProject: (body) => new Promise((resolve, reject) => {
    axios.put(projUrlPutProjectReallocate, body).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),

  deleteProject: (projectIdParam) => {
    const projectUrl = `${global.URL_PROJECT}/project/`;
    return new Promise((resolve, reject) => {
      axios.delete(projectUrl + projectIdParam).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  getKeywords: () => {
    const projectUrl = `${global.URL_PROJECT}/palavra-chave`;
    return new Promise((resolve, reject) => {
      axios.get(projectUrl).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  getAllSubjects: () => new Promise((resolve, reject) => {
    axios.get(projUrlGetAllSubjects).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),

  getAlocated: (subjectId) => new Promise((resolve, reject) => {
    axios.get(projUrlGetAlocated + subjectId).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),

  getMyProposals: async (req) => {
    const userId = authentication.getUserId(req.headers.auth);
    return axios.get(projUrlGetMyProposals + userId, { params: req.query });
  },

  putAlocated: (body) => new Promise((resolve, reject) => {
    axios.put(projUrlPutAlocated, body).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),

  putProposalStatus: (projectId, body) => new Promise((resolve, reject) => {
    axios.put(`${projUrlPutProposalStatus + projectId}/status`, body).then((response) => {
      resolve(response);
    }).catch((err) => {
      reject(err);
    });
  }),

  addFile: (req) => {
    const projectUrl = `${global.URL_PROJECT}/upload`;
    const reqBody = req.body;
    return new Promise((resolve, reject) => {
      axios.post(projectUrl, reqBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  initial: () => new Promise((resolve, reject) => {
    axios.get(`${global.URL_PROJECT}`).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),
};
