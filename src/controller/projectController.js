const axios = require('axios');
const projUrlgetAlocated = `${global.URL_PROJECT}/alocated/`;
const projUrlgetProject = `${global.URL_PROJECT}/project/`;
const projUrlputAlocated = `${global.URL_PROJECT}/alocated/status`;
const projUrlgetAllSubjects = `${global.URL_PROJECT}/subject`;
const projUrlputProposal = `${global.URL_PROJECT}/proposal/`;
const projUrlputProposalStatus = `${global.URL_PROJECT}/alocate/`;

module.exports = {
  getAlocated: (subjectId) => {
    return new Promise((resolve, reject) => {
      axios.get(projUrlgetAlocated + subjectId).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  getProject: (projectId) => {
    return new Promise((resolve, reject) => {
      axios.get(projUrlgetProject + projectId).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  putAlocated: (body) => {
    return new Promise((resolve, reject) => {
      axios.put(projUrlputAlocated, body).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  getAllSubjects: () => {
    return new Promise((resolve, reject) => {
      axios.get(projUrlgetAllSubjects).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  putProposal: (projectId, body) => {
    return new Promise((resolve, reject) => {
      axios.put(projUrlputProposal + projectId, body).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  putProposalStatus: (projectId, body) => {
    return new Promise((resolve, reject) => {
      axios.put(projUrlputProposalStatus + projectId + '/status', body).then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(err);
      });
    });
  },

  addProject: (body) => {
    const projectUrl = `${global.URL_PROJECT}/project`;
    const reqBody = body;
    return new Promise((resolve, reject) => {
      axios.post(projectUrl, reqBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  addFile: (body) => {
    const projectUrl = `${global.URL_PROJECT}/upload`;
    const reqBody = body;
    return new Promise((resolve, reject) => {
      axios.post(projectUrl, reqBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
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
};
