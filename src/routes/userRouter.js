const axios = require('axios');

require('../config/environment');

module.exports = {
    addAluno: (body) => {
        const URL = `${global.URL_USER}/aluno`;
        const reqBody = body;
        return new Promise((resolve) => {
            axios.post(URL, reqBody).then((res) => {
                resolve(res.data)
            });
        }).catch(() => {
            resolve(JSON.parse('{"cod": 400}'));
        });
    },
    getAluno: (matriculaIdParam) => {
        const URL = `${global.URL_USER}/aluno:matriculaId`;
        const matriculaId = matriculaIdParam;
        return new Promise((resolve) => {
            axios.get(URL, matriculaId).then((res) => {
                resolve(res.data)
            });
        }).catch(() => {
            resolve(JSON.parse('{"cod": 400}'));
        });
    }
}