const ClassController = require('../../../src/controller/classController');

describe('Class Controller', () => {
  it('Should list all classes', async () => {
    expect(await ClassController.getClasses()).toHaveProperty('status', 200);
  }, 50000);
});
