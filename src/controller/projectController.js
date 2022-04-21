const axios = require('axios');
const authentication = require('../utils/authentication');

const projUrlGetAlocated = `${global.URL_PROJECT}/alocated/`;
const projUrlGetProject = `${global.URL_PROJECT}/project/get/`;
const projUrlPostProject = `${global.URL_PROJECT}/project/create`;
const projUrlPutProject = `${global.URL_PROJECT}/project/update`;
const projUrlDeleteProject = `${global.URL_PROJECT}/project/delete/`;
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
    const reqBody = req.body;
    return new Promise((resolve, reject) => {
      reqBody.userid = authentication.getUserId(req.headers.auth);
      axios.post(projUrlPostProject, reqBody).then((response) => {
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

  deleteProject: (projectId) => {
    return new Promise((resolve, reject) => {
      axios.delete(projUrlDeleteProject + projectId).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  getKeywordsAvailbleToProject: () => new Promise((resolve, reject) => {
    const url = `${global.URL_PROJECT}/keywords`;
    axios.get(url).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),

  getKeywords: () => {
    const projectUrl = `${global.URL_PROJECT}/palavra-chave`;
    console.log('Projecturl', projectUrl);
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

  getAvailableKeywordsToSubject: () => new Promise((resolve, reject) => {
    const projectUrl = `${global.URL_PROJECT}/subject/keywords`;
    axios.get(projectUrl).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),

  getSubareas: () => new Promise((resolve, reject) => {
    const projectUrl = `${global.URL_PROJECT}/subareas`;
    axios.get(projectUrl).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  }),

  addSubject: (data) => {
    const projectUrl = `${global.URL_PROJECT}/subject`;
    const reqBody = data;
    return new Promise((resolve, reject) => {
      axios.post(projectUrl, reqBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  editKeyword: (data) => {
    // console.log('Chegou no Gateway');
    const projectUrl = `${global.URL_PROJECT}/palavra-chave/edit`;
    const reqBody = data;
    return new Promise((resolve, reject) => {
      axios.put(projectUrl, reqBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        console.log('erro',error);
        reject(error);
      });
    });
  },

  deleteKeyword: (data) => {
    const projectUrl = `${global.URL_PROJECT}/palavra-chave/${data.keywordid}/delete`;
    return new Promise((resolve, reject) => {
      axios.put(projectUrl).then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    });
  },

  addKeyword: (data) => {
    const projectUrl = `${global.URL_PROJECT}/palavra-chave`;
    const reqBody =  data;
    
    return new Promise((resolve, reject) => {
      axios.post(projectUrl, reqBody).then((response) => {
        console.log('RESPONSESE', response.data);
        resolve(response.data);
      }).catch((error) => {
        
        // console.log('erro',error);
        reject(error);
      });
    });
  },  


  addKeywordSubject: (data) => {
    const projectUrl = `${global.URL_PROJECT}/subject/keyword`;
    const reqBody =  data;
    
    return new Promise((resolve, reject) => {
      axios.post(projectUrl, reqBody).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        
        // console.log('erro',error);
        reject(error);
      });
    });
  },  


  updateSubjectKeyword: (data) => {
    const projectUrl = `${global.URL_PROJECT}/subject/keyword`;
    const reqBody =  data;
    
    return new Promise((resolve, reject) => {
      axios.put(projectUrl, reqBody).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        
        // console.log('erro',error);
        reject(error);
      });
    });
  },  


  getKeywordsAlternative: (data) => {
    // console.log('Tá aqui na poha Gateway');
    const projectUrl = `${global.URL_PROJECT}/palavra-chave2`;
    const reqBody =  data;
        
    return new Promise((resolve, reject) => {
      axios.get(projectUrl, reqBody).then((response) => {
        resolve(response);
      }).catch((error) => {
        
        console.log('erro',error);
        reject(error);
      });
    });
  },  

getSubjectsKey: (data) => {
  console.log('Subjects');
  const projectUrl = `${global.URL_PROJECT}/subjects`;
  const reqBody =  data;
      
  return new Promise((resolve, reject) => {
    axios.get(projectUrl, reqBody).then((response) => {
      resolve(response);
    }).catch((error) => {
      
      console.log('erro',error);
      reject(error);
    });
  });
},

getProfessors: () => new Promise((resolve, reject) => {
  const projectUrl = `${global.URL_PROJECT}/professors`;
  axios.get(projectUrl).then((response) => {
    resolve(response);
  }).catch((error) => {
    reject(error);
  });
}),

getSubject: (subjectid) => new Promise((resolve, reject) => {
  const projectUrl = `${global.URL_PROJECT}/subject/${subjectid}`;
  axios.get(projectUrl).then((response) => {
    resolve(response);
  }).catch((error) => {
    reject(error);
  });
}),

getSubjects: () => new Promise((resolve, reject) => {
  const projectUrl = `${global.URL_PROJECT}/subjectList`;
  axios.get(projectUrl).then((response) => {
    resolve(response);
  }).catch((error) => {
    reject(error);
  });
}),

updateSubject: (subjectid, data) => {
  const projectUrl = `${global.URL_PROJECT}/subject/${subjectid}`;
  const reqBody = data;
  return new Promise((resolve, reject) => {
    axios.put(projectUrl, reqBody).then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  });
},
};
  