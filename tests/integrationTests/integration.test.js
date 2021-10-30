const assert = require('assert');
const axios = require('axios');
const environment = require('../../src/config/environment');

environment.configEnv();

const users = require('./constants');

const registerUrl = `${global.URL_GATEWAY}/user/register`;
const loginUrl = `${global.URL_GATEWAY}/user/login`;
const projectUrl = `${global.URL_GATEWAY}/project`;

const failedToRegisterMessage = 'Failed to register';
const userWasRegisteredMessage = 'User was Registered';
const failedToLoginMessage = 'Failed to login';

const cadastroProjects = require('./cadastroConstants');

const cadastroProjectsUrl = `${global.URL_GATEWAY}/projeto/cadastro`;

const failedToRegisterProject = 'Failed to register the project';
const failedToRegisterProjectBy1 = 'Failed to register the project, titulo was not found';
const failedToRegisterProjectBy2 = 'Failed to register the project, descricao was not found';
const failedToRegisterProjectBy3 = 'Failed to register the project, resultadoEsperado was not found';
const failedToRegisterProjectBy4 = 'Failed to register the project, areasConhecimento was not found';

let auth = '';

describe('Register Success', () => {
  it('Should register Aluno', (done) => {
    axios.post(registerUrl, users.success.aluno).then(() => {
      done();
    }).catch(() => {
      done(new Error(failedToRegisterMessage));
    });
  });

  it('Should register Professor', (done) => {
    axios.post(registerUrl, users.success.professor).then(() => {
      done();
    }).catch(() => {
      done(new Error(failedToRegisterMessage));
    });
  });

  it('Should register External Physical', (done) => {
    axios.post(registerUrl, users.success.externalPhysical).then(() => {
      done();
    }).catch(() => {
      done(new Error(failedToRegisterMessage));
    });
  });

  it('Should register External Juridical', (done) => {
    axios.post(registerUrl, users.success.externaljuridical).then(() => {
      done();
    }).catch(() => {
      done(new Error(failedToRegisterMessage));
    });
  });
});

describe('Register Fail', () => {
  it('Should not register Aluno', (done) => {
    axios.post(registerUrl, users.fail.aluno).then(() => {
      done(new Error(userWasRegisteredMessage));
    }).catch(() => {
      done();
    });
  });

  it('Should not register Professor', (done) => {
    axios.post(registerUrl, users.fail.professor).then(() => {
      done(new Error(userWasRegisteredMessage));
    }).catch(() => {
      done();
    });
  });

  it('Should not register External Physical', (done) => {
    axios.post(registerUrl, users.fail.externalPhysical).then(() => {
      done(new Error(userWasRegisteredMessage));
    }).catch(() => {
      done();
    });
  });

  it('Should not register External Juridical', (done) => {
    axios.post(registerUrl, users.fail.externaljuridical).then(() => {
      done(new Error(userWasRegisteredMessage));
    }).catch(() => {
      done();
    });
  });
});

describe('Login', () => {
  it('Should Login Aluno', (done) => {
    axios.post(loginUrl, users.success.aluno).then((response) => {
      assert.equal(response.data.auth, true);
      done();
    }).catch(() => {
      done(new Error(failedToLoginMessage));
    });
  });

  it('Should Login Professor', (done) => {
    axios.post(loginUrl, users.success.professor).then((response) => {
      assert.equal(response.data.auth, true);
      auth = response.data.token;
      done();
    }).catch(() => {
      done(new Error(failedToLoginMessage));
    });
  });

  it('Should Login External Physical', (done) => {
    axios.post(loginUrl, users.success.externalPhysical).then((response) => {
      assert.equal(response.data.auth, true);
      done();
    }).catch(() => {
      done(new Error(failedToLoginMessage));
    });
  });

  it('Should Login External Juridical', (done) => {
    axios.post(loginUrl, users.success.externaljuridical).then((response) => {
      assert.equal(response.data.auth, true);
      done();
    }).catch(() => {
      done(new Error(failedToLoginMessage));
    });
  });
});

describe('Login Fail', () => {
  it('Should not Login missing e mail', (done) => {
    axios.post(loginUrl, users.fail.alunoLoginWithoutemail).then(() => {
      done(new Error('Logged in'));
    }).catch((response) => {
      assert.equal(response.response.data.auth, false);
      done();
    });
  });

  it('Should not Login missing password', (done) => {
    axios.post(loginUrl, users.fail.alunoLoginWithoutPassword).then(() => {
      done(new Error('Logged in'));
    }).catch((response) => {
      assert.equal(response.response.data.auth, false);
      done();
    });
  });

  it('Should not Login unexisting user', (done) => {
    axios.post(loginUrl, users.fail.loginUnexistingUser).then(() => {
      done(new Error('Logged in'));
    }).catch((response) => {
      assert.equal(response.response.data.auth, false);
      done();
    });
  });
});

describe('Evaluate proposal', () => {
  it('Should accept proposal', (done) => {
    axios.put(`${projectUrl}/alocate/1/status`,
      { proposal: { approved: true } },
      { headers: { auth } }).then(() => {
        done();
      }).catch((error) => {
        done(new Error(error));
      });
  });

  it('Should realocate proposal', (done) => {
    axios.put(`${projectUrl}/proposal/2`, { subjectId: 2 },
      { headers: { auth } }).then(() => {
        done();
      }).catch((error) => {
        done(new Error(error));
      });
  });
});

describe('Register Project Success', () => {
  it('Should register Projeto', (done) => {
    axios.post(cadastroProjectsUrl, cadastroProjects.success.projeto).then(() => {
      done();
    }).catch(() => {
      done(new Error(failedToRegisterProject));
    });
  });
});

describe('Register Project Fail', () => {
  it('Should not register Projeto', (done) => {
    axios.post(cadastroProjectsUrl, cadastroProjects.fail.projeto1).then(() => {
      done(new Error(failedToRegisterProjectBy1));
    }).catch(() => {
      done();
    });
  });

  it('Should not register Projeto', (done) => {
    axios.post(cadastroProjectsUrl, cadastroProjects.fail.projeto2).then(() => {
      done(new Error(failedToRegisterProjectBy2));
    }).catch(() => {
      done();
    });
  });

  it('Should not register Projeto', (done) => {
    axios.post(cadastroProjectsUrl, cadastroProjects.fail.projeto3).then(() => {
      done(new Error(failedToRegisterProjectBy3));
    }).catch(() => {
      done();
    });
  });

  it('Should not register Projeto', (done) => {
    axios.post(cadastroProjectsUrl, cadastroProjects.fail.projeto4).then(() => {
      done(new Error(failedToRegisterProjectBy4));
    }).catch(() => {
      done();
    });
  });
});
