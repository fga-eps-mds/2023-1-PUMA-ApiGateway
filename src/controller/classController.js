const axios = require('axios');

module.exports = {
    getClass: (classid) => new Promise((resolve, reject) => {
        const url = `${global.URL_PROJECT}/class/${classid}`;
        axios.get(url).then((response) => {
            resolve(response);
        });
    }),

    getClasses: () => new Promise((resolve, reject) => {
        const url = `${global.URL_PROJECT}/classes`;
        axios.get(url).then((response) => {
            resolve(response);
        });
    }),

    updateClass: (classid, data) => {
        const url = `${global.URL_PROJECT}/class/${classid}`;
        const reqBody = data;
        return new Promise((resolve, reject) => {
            axios.put(url, reqBody).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    },

    deleteClass: (classid) => {
        const url = `${global.URL_PROJECT}/class/${classid}`;
        return new Promise((resolve, reject) => {
            axios.delete(url).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
        });
    },
};
