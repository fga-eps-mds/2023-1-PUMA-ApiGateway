const axios = require('axios');
const assert = require('assert');
const request = require('supertest');
const app = require('../utils/testapp');
const CONSTANTS = require('../utils/constants');
const environment = require('../../src/config/environment');

environment.configEnv();

describe('Register Keywords', () => {
    let auth = '';

    before((done) => {
        const url = `${global.URL_GATEWAY}/user/login`;
        console.log({url});
        axios.post(url, CONSTANTS.USER.LOGIN.PROFESSOR.SUCCESS.T1).then((response) => {
            auth = response.data.token;
            done();
        }).catch((error) => {
            done(new Error(error));
        });
    });

    it('Should register keyword', (done) => {
        request(app)
            .post('/keyword/')
            .set({ auth })
            .set('Accept', 'application/json')
            .send(CONSTANTS.KEYWORD.REGISTER.SUCCESS.T1)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});


describe('Register Keywords Failure', () => {
    let auth = '';

    before((done) => {
        const url = `${global.URL_GATEWAY}/user/login`;
        console.log({url});
        axios.post(url, CONSTANTS.USER.LOGIN.PROFESSOR.SUCCESS.T1).then((response) => {
            auth = response.data.token;
            done();
        }).catch((error) => {
            done(new Error(error));
        });
    });

    it('Should not be able to register keyword', (done) => {
        request(app)
            .post('/keyword/')
            .set({ auth })
            .set('Accept', 'application/json')
            .send(CONSTANTS.KEYWORD.REGISTER.FAILURE.T2)
            .expect('Content-Type', /json/)
            .expect(400)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});


describe('Get Keywords', () => {
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

    it('Should get list of keywords', (done) => {
        request(app)
            .get('/keyword/')
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


describe('Update a Keyword', () => {
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

    it('Should update a keyword', (done) => {
        request(app)
            .put('/keyword/')
            .set({ auth })
            .set('Accept', 'application/json')
            .send(CONSTANTS.KEYWORD.UPDATE.SUCCESS.T1)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});



describe('Update Keyword Failure', () => {
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

    it('Shouldnt be able update a keyword', (done) => {
        request(app)
            .put('/keyword/')
            .set({ auth })
            .set('Accept', 'application/json')
            .send(CONSTANTS.KEYWORD.UPDATE.FAILURE.T1)
            .expect('Content-Type', /json/)
            .expect(400)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});


describe('Link Keyword To Subject', () => {
    let auth = '';

    before((done) => {
        const url = `${global.URL_GATEWAY}/user/login`;
        console.log({url});
        axios.post(url, CONSTANTS.USER.LOGIN.PROFESSOR.SUCCESS.T1).then((response) => {
            auth = response.data.token;
            done();
        }).catch((error) => {
            done(new Error(error));
        });
    });

    it('Should link the keyword to subject with success', (done) => {
        request(app)
            .post('/keyword/subject/')
            .set({ auth })
            .set('Accept', 'application/json')
            .send(CONSTANTS.KEYWORD.SUBJECT.SUCCESS.T1)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});


describe('Failure in Link Keyword To Subject', () => {
    let auth = '';

    before((done) => {
        const url = `${global.URL_GATEWAY}/user/login`;
        console.log({url});
        axios.post(url, CONSTANTS.USER.LOGIN.PROFESSOR.SUCCESS.T1).then((response) => {
            auth = response.data.token;
            done();
        }).catch((error) => {
            done(new Error(error));
        });
    });

    it('Should not link the keyword to subject with success', (done) => {
        request(app)
            .post('/keyword/subject/')
            .set({ auth })
            .set('Accept', 'application/json')
            .send(CONSTANTS.KEYWORD.SUBJECT.FAILURE.T1)
            .expect('Content-Type', /json/)
            .expect(400)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});




describe('Update Subject of Keyword', () => {
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

    it('Should subject of a keyword', (done) => {
        request(app)
            .put('/keyword/subject/')
            .set({ auth })
            .set('Accept', 'application/json')
            .send(CONSTANTS.KEYWORD.UPDATE_SUBJECT.SUCCESS.T1)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});


describe('Failure in Update Subject of Keyword', () => {
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

    it('Should not allow switch subject of a keyword', (done) => {
        request(app)
            .put('/keyword/subject/')
            .set({ auth })
            .set('Accept', 'application/json')
            .send(CONSTANTS.KEYWORD.UPDATE_SUBJECT.FAILURE.T1)
            .expect('Content-Type', /json/)
            .expect(400)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});


describe('Delete a Keyword', () => {
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

    it('Should delete a keyword', (done) => {
        request(app)
            .delete('/keyword/1')
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
