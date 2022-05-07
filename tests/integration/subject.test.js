const axios = require('axios');
const assert = require('assert');
const request = require('supertest');
const app = require('../utils/testapp');
const CONSTANTS = require('../utils/constants');
const environment = require('../../src/config/environment');

environment.configEnv();

describe('Get Subjects', () => {
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

    it('Should get the subjects', (done) => {
        request(app)
            .get('/subject/')
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




describe('Get Available Keywords To Subject', () => {
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

    it('Should get the subjects', (done) => {
        request(app)
            .get('/subject/keywords')
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


describe('Get Subareas of Subject', () => {
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

    it('Should get the subareas of subjects', (done) => {
        request(app)
            .get('/subject/subareas')
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



describe('Get Knowledge Areas of Subject', () => {
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

    it('Should get the Knowledge Areas of subjects', (done) => {
        request(app)
            .get('/subject/knowledgeareas')
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


describe('Get Professors of Subject', () => {
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

    it('Should get the Knowledge Areas of subjects', (done) => {
        request(app)
            .get('/subject/professors')
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

describe('Get Details of Subject', () => {
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

    it('Should get the Knowledge Areas of subjects', (done) => {
        request(app)
            .get('/subject/1')
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



describe('Register Subjects', () => {
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

    it('Should register a subject', (done) => {
        request(app)
            .post('/subject/')
            .set({ auth })
            .set('Accept', 'application/json')
            .send(CONSTANTS.SUBJECT.REGISTER.SUCCESS.T1)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});


describe('Register Subjects Failure', () => {
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

    it('Should not be able to register a subject', (done) => {
        request(app)
            .post('/subject/')
            .set({ auth })
            .set('Accept', 'application/json')
            .send(CONSTANTS.SUBJECT.REGISTER.FAILURE.T1)
            .expect('Content-Type', /json/)
            .expect(400)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});


describe('Update Details Subjects', () => {
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

    it('Should update a subject', (done) => {
        request(app)
            .put('/subject/1')
            .set({ auth })
            .set('Accept', 'application/json')
            .send(CONSTANTS.SUBJECT.UPDATE.SUCCESS.T1)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});


describe('Failure Update Details Subjects', () => {
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

    it('Should not update a subject', (done) => {
        request(app)
            .put('/subject/1')
            .set({ auth })
            .set('Accept', 'application/json')
            .send(CONSTANTS.SUBJECT.UPDATE.FAILURE.T1)
            .expect('Content-Type', /json/)
            .expect(400)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});


describe('Delete a Subject', () => {
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

    it('Should delete a subject', (done) => {
        request(app)
            .delete('/subject/2')
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
