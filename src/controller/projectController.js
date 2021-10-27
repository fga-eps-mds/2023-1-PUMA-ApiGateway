const axios = require('axios');
const projUrlgetAlocated = `${global.URL_PROJECT}/alocated/`;
const projUrlgetProject = `${global.URL_PROJECT}/project/`;
const projUrlputAlocated = `${global.URL_PROJECT}/alocated/status`;
const projUrlgetAllSubjects = `${global.URL_PROJECT}/subject`;
const projUrlputProposal = `${global.URL_PROJECT}/proposal/`;
const projUrlputProposalStatus = `${global.URL_PROJECT}/alocate/`;

module.exports = {
  getAlocated: (body) => {
    return new Promise((resolve, reject) => {
      axios.get(projUrlgetAlocated + body.subjectId).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  getProject: (body) => {
    return new Promise((resolve, reject) => {
      axios.get(projUrlgetProject + body.projectId).then((response) => {
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
  putProposal: (req) => {
    const projId = req.params.projectId;
    return new Promise((resolve, reject) => {
      axios.put(projUrlputProposal + projId, req.body).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },
  putProposalStatus: (req) => {
    const projId = req.params.projectId;
    return new Promise((resolve, reject) => {
      axios.put(projUrlputProposalStatus + projId + '/status', req.body).then((response) => {
        resolve(response);
      }).catch((err) => {
        reject(err);
      });
    });
  },
};
