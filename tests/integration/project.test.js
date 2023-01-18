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
        axios.post(url, CONSTANTS.USER.LOGIN.PROFESSOR.SUCCESS.T1).then((response) => {
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
        axios.post(url, CONSTANTS.USER.LOGIN.PROFESSOR.SUCCESS.T1).then((response) => {
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
                done(new Error(error));
            });
    });
});

describe('Update Project Success', () => {
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
        axios.post(url, CONSTANTS.USER.LOGIN.PROFESSOR.SUCCESS.T1).then((response) => {
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
                done(new Error(error));
            });
    });
});

describe('Get Success Keywords Availble To Project', () => {
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

describe('Professor Evaluate Project Success', () => {
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

    it('Should Evaluate the project', (done) => {
        request(app)
            .put('/project/evaluate')
            .set({ auth })
            .set('Accept', 'application/json')
            .send(CONSTANTS.PROJECT.EVALUATE.SUCCESS.T1)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});

describe('Professor Evaluate Project Failure', () => {
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

    it('Should Failure Evaluate the project', (done) => {
        request(app)
            .put('/project/evaluate')
            .set({ auth })
            .set('Accept', 'application/json')
            .send(CONSTANTS.PROJECT.EVALUATE.FAILURE.T1)
            .expect('Content-Type', /json/)
            .expect(400)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});

describe('Realocation of Project with Success', () => {
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

    it('Should Realocation the project success', (done) => {
        request(app)
            .put('/project/reallocate')
            .set({ auth })
            .set('Accept', 'application/json')
            .send(CONSTANTS.PROJECT.REALLOCATE.SUCCESS.T1)
            .expect('Content-Type', /json/)
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});

describe('Realocation of Project with Failures', () => {
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

    it('Should Failure Realocation the project', (done) => {
        request(app)
            .put('/project/reallocate')
            .set({ auth })
            .set('Accept', 'application/json')
            .send(CONSTANTS.PROJECT.REALLOCATE.FAILURE.T1)
            .expect('Content-Type', /json/)
            .expect(400)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});

describe('Get Project by ID', () => {
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

    it('Should get specific project', (done) => {
        request(app)
            .get('/project/1')
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

describe('Delete a Project', () => {
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

    it('Should delete a project', (done) => {
        request(app)
            .delete('/project/1')
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

describe('Initial Project Page', () => {
    it('Should get initial page from Project Service', (done) => {
        request(app)
            .get('/project/initial')
            .expect(200)
            .then(() => {
                done();
            }).catch((error) => {
                done(new Error(error));
            });
    });
});