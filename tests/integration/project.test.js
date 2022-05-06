const axios = require('axios');
const assert = require('assert');
const request = require('supertest');
const app = require('../utils/testapp');
const CONSTANTS = require('../utils/constants');
const environment = require('../../src/config/environment');

environment.configEnv();

describe('Register Project Success', () => {
    let auth = '';

    before((done) => {
        const url = `${global.URL_GATEWAY}/user/login`;
        axios.post(url, CONSTANTS.USER.LOGIN.SUCCESS.T1).then((response) => {
            auth = response.data.token;
            done();
        }).catch((error) => {
            done(new Error(error));
        });
    });

    it('Should register project', (done) => {
        request(app)
            .post('/project')
            .set({ auth })
            .set('Accept', 'application/json')
            .send(CONSTANTS.PROJECT.REGISTER.SUCCESS.T1)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});

describe('Register Project Failure', () => {
    let auth = '';

    before((done) => {
        const url = `${global.URL_GATEWAY}/user/login`;
        axios.post(url, CONSTANTS.USER.LOGIN.SUCCESS.T1).then((response) => {
            auth = response.data.token;
            done();
        }).catch((error) => {
            done(new Error(error));
        });
    });

    it('Should not register project', (done) => {
        request(app)
            .post('/project')
            .set({ auth })
            .set('Accept', 'application/json')
            .send(CONSTANTS.PROJECT.REGISTER.FAILURE.T1)
            .expect('Content-Type', /json/)
            .expect(400)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error('The project has been registered'));
            });
    });
});

describe('Update Project Success', () => {
    let auth = '';

    before((done) => {
        const url = `${global.URL_GATEWAY}/user/login`;
        axios.post(url, CONSTANTS.USER.LOGIN.SUCCESS.T1).then((response) => {
            auth = response.data.token;
            done();
        }).catch((error) => {
            done(new Error(error));
        });
    });

    it('Should update project', (done) => {
        request(app)
            .put('/project')
            .set({ auth })
            .set('Accept', 'application/json')
            .send(CONSTANTS.PROJECT.UPDATE.SUCCESS.T1)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});

describe('Update Project Failure', () => {
    let auth = '';

    before((done) => {
        const url = `${global.URL_GATEWAY}/user/login`;
        axios.post(url, CONSTANTS.USER.LOGIN.SUCCESS.T1).then((response) => {
            auth = response.data.token;
            done();
        }).catch((error) => {
            done(new Error(error));
        });
    });

    it('Should not update project', (done) => {
        request(app)
            .put('/project')
            .set({ auth })
            .set('Accept', 'application/json')
            .send(CONSTANTS.PROJECT.UPDATE.FAILURE.T1)
            .expect('Content-Type', /json/)
            .expect(400)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error('The project has been updated'));
            });
    });
});

describe('Get Success Keywords Availble To Project', () => {
    let auth = '';

    before((done) => {
        const url = `${global.URL_GATEWAY}/user/login`;
        axios.post(url, CONSTANTS.USER.LOGIN.SUCCESS.T1).then((response) => {
            auth = response.data.token;
            done();
        }).catch((error) => {
            done(new Error(error));
        });
    });

    it('Should get keywords availble to project', (done) => {
        request(app)
            .get('/project/keywords')
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
