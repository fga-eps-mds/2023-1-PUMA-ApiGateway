const ProjectController = require('../../../src/controller/projectController');

require('../../../src/config/environment').configEnv();

describe('Get initial', () => {
  it('Should get initial', async () => {
    expect(await ProjectController.initial()).toHaveProperty('status', 200);
  }, 50000);
});
