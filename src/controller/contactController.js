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
              reject(error);
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
    updateContact: (contactId, req) => {
      const contactUrl = `${global.URL_USER}/contact/update/${contactId}`;
      return new Promise((resolve, reject) => {
        axios.put(contactUrl, req.body).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
      })
    },
    deleteContact: (contactId) => {
      const contactUrl = `${global.URL_USER}/contact/delete/${contactId}`;
      return new Promise((resolve, reject) => {
        axios.delete(contactUrl).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            });
      })
    }
  
};

