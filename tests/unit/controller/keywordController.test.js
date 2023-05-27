const KeywordController = require('../../../src/controller/keywordController');

describe('Add new keyword', () => {
  const data = {
    keyword: 'test',
  };
  it('Should add new keyword', async () => {
    expect(await KeywordController.addKeyword(data)).toHaveProperty('keyword', 'test');
  }, 50000);
});
