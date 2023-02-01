const axios = require('axios');
const assert = require('assert');
const request = require('supertest');
const app = require('../utils/testapp');
const CONSTANTS = require('../utils/constants');
const environment = require('../../src/config/environment');

describe('Get Classes', () => {
    let auth = '';

    before((done) => {
        const url = `${global.URL_GATEWAY}/user/login`;
        axios.post(url, CONSTANTS.USER.LOGIN.PROFESSOR.SUCCESS.T1).then((response) => {
            auth = response.data.token;
            done();
        }).catch((error) => {
            done(new Error(error));
        });
    });

    it('Should get list of classes', (done) => {
        request(app)
            .get('/class/')
            .set({ auth })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});

describe('Get Class by ID', () => {
    let auth = '';

    before((done) => {
        const url = `${global.URL_GATEWAY}/user/login`;
        axios.post(url, CONSTANTS.USER.LOGIN.PROFESSOR.SUCCESS.T1).then((response) => {
            auth = response.data.token;
            done();
        }).catch((error) => {
            done(new Error(error));
        });
    });

    it('Should get specific class', (done) => {
        request(app)
            .get('/class/1')
            .set({ auth })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});

describe('Delete a Class', () => {
    let auth = '';

    before((done) => {
        const url = `${global.URL_GATEWAY}/user/login`;
        axios.post(url, CONSTANTS.USER.LOGIN.PROFESSOR.SUCCESS.T1).then((response) => {
            auth = response.data.token;
            done();
        }).catch((error) => {
            done(new Error(error));
        });
    });

    it('Should delete a class', (done) => {
        request(app)
            .delete('/class/1')
            .set({ auth })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});