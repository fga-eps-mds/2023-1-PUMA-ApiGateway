/* eslint-disable import/no-unresolved */
const axios = require('axios');
const jwt = require('jsonwebtoken');

require('../config/environment');

module.exports = {
    getContacts: () => {
        const contactUrl = `${global.URL_USER}/contact`;
        return new Promise((resolve, reject) => {
            axios.get(contactUrl).then((response) => {
              resolve(response.data);
            }).catch((error) => {
              console.log(error);
            });
          });
    },
    createContact: (req) => {
        const contactUrl = `${global.URL_USER}/contact/create`;
        return new Promise((resolve, reject) => {
            axios.post(contactUrl, req.body).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
          });
    },
};

