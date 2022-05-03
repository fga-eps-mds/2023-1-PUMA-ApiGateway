const axios = require('axios');

module.exports = {
    addSubject: (data) => {
        const url = `${global.URL_PROJECT}/subject`;
        const reqBody = data;
        return new Promise((resolve, reject) => {
            axios.post(url, reqBody).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    },

    getSubject: (subjectid) => new Promise((resolve, reject) => {
        const url = `${global.URL_PROJECT}/subject/${subjectid}`;
        axios.get(url).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    }),

    getSubjects: () => new Promise((resolve, reject) => {
        const url = `${global.URL_PROJECT}/subject`;
        axios.get(url).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    }),

    updateSubject: (subjectid, data) => {
        const url = `${global.URL_PROJECT}/subject/${subjectid}`;
        const reqBody = data;
        return new Promise((resolve, reject) => {
            axios.put(url, reqBody).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    },

    deleteSubject: (subjectid) => {
        const url = `${global.URL_PROJECT}/subject/${subjectid}`;
        return new Promise((resolve, reject) => {
            axios.delete(url).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    },

    getAvailableKeywordsToSubject: () => new Promise((resolve, reject) => {
        const url = `${global.URL_PROJECT}/subject/keywords`;
        axios.get(url).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    }),

    getProfessors: () => new Promise((resolve, reject) => {
        const url = `${global.URL_PROJECT}/professors`;
        axios.get(url).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    }),

    getSubareas: () => new Promise((resolve, reject) => {
        const url = `${global.URL_PROJECT}/subareas`;
        axios.get(url).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    }),

    getKnowledgeAreas: () => new Promise((resolve, reject) => {
        const url = `${global.URL_PROJECT}/knowledgeareas`;
        axios.get(url).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    }),
};