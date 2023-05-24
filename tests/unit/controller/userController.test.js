const UserController = require('../../../src/controller/userController');

require('../../../src/config/environment').configEnv();

const newUser = {
  name: 'John',
  email: 'john@test.com',
  password: 'password',
  type: 'Aluno',
  matricula: '180138888',
  externalAgentType: 'Pessoa Fisica',
  phoneNumber: '61999999991',
  cpf: '99999999999',
};

const newUserType = {
  typeName: 'test',
  description: 'test user type',
};

const updatedUserType = {
  typeName: 'test',
  description: 'test user type',
};

describe('User Controller', () => {
  it('should get home page', async () => {
    expect(await UserController.initial()).toHaveProperty('Service', 'User-Service');
  });
  it('Should register a student agent', async () => {
    expect(await UserController.registerUser(newUser)).toHaveProperty('status', 200);
  }, 50000);
  it('should login a registered user', async () => {
    expect(await UserController.logUserIn(newUser)).toHaveProperty('email', newUser.email);
  });
  it('should return a registered student', async () => {
    expect((await UserController.getStudent(1))[0]).toHaveProperty('regnumber', newUser.matricula);
  });
  it('should add a user type', async () => {
    expect(await UserController.addUserType(newUserType)).toHaveProperty('response', {});
  });
  it('should return a user type', async () => {
    expect(await UserController.getUserType(1)).toHaveProperty('typeName', newUserType.typeName);
  });
  it('should update a user type', async () => {
    expect(await UserController.updateUserType(1, updatedUserType)).toEqual(1);
  });
  it('should delete a user type', async () => {
    expect(await UserController.deleteUserType(1)).toEqual(true);
  });
});
