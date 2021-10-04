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
        return new Promise(async (resolve, reject) => {
            try {
                let userId = await axios.post(userUrl, reqBody);
                userId = userId.data;
                const token = jwt.sign({ userId }, global.SECRET, { expiresIn: 604800 });
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
                resolve(res.data)
            });
        }).catch(() => {
            resolve(JSON.parse('{"cod": 400}'));
        });
    }
}
