const axios = require('axios');
const controller = require('../../../src/controller/keywordController');

jest.mock('axios');

describe('KeywordController', () => {
  describe('addKeyword', () => {
    it('should add a keyword', async () => {
      const data = { keyword: 'example' };
      const response = { data: 'keywordAdded' };
      axios.post.mockResolvedValueOnce(response);

      const result = await controller.addKeyword(data);

      expect(axios.post).toHaveBeenCalledWith(`${global.URL_PROJECT}/keyword`, data);
      expect(result).toEqual(response.data);
    });

    it('should reject with an error if the request fails', async () => {
      const data = { keyword: 'example' };
      const error = new Error('Request failed');
      axios.post.mockRejectedValueOnce(error);

      await expect(controller.addKeyword(data)).rejects.toThrow(error);
    });
  });

  describe('editKeyword', () => {
    it('should edit a keyword', async () => {
      const data = { keyword: 'example' };
      const response = { data: 'keywordEdited' };
      axios.put.mockResolvedValueOnce(response);

      const result = await controller.editKeyword(data);

      expect(axios.put).toHaveBeenCalledWith(`${global.URL_PROJECT}/keyword`, data);
      expect(result).toEqual(response);
    });

    it('should reject with an error if the request fails', async () => {
      const data = { keyword: 'example' };
      const error = new Error('Request failed');
      axios.put.mockRejectedValueOnce(error);

      await expect(controller.editKeyword(data)).rejects.toThrow(error);
    });
  });

  describe('deleteKeyword', () => {
    it('should delete a keyword', async () => {
      const keywordId = '123';
      const response = { data: 'keywordDeleted' };
      axios.delete.mockResolvedValueOnce(response);

      const result = await controller.deleteKeyword(keywordId);

      expect(axios.delete).toHaveBeenCalledWith(`${global.URL_PROJECT}/keyword/${keywordId}`);
      expect(result).toEqual(response);
    });
  });

  describe('addKeywordSubject', () => {
    it('should add a keyword subject', async () => {
      const data = { subject: 'example' };
      const response = { data: 'keywordSubjectAdded' };
      axios.post.mockResolvedValueOnce(response);

      const result = await controller.addKeywordSubject(data);

      expect(axios.post).toHaveBeenCalledWith(`${global.URL_PROJECT}/keyword/subject`, data);
      expect(result).toEqual(response.data);
    });

    it('should reject with an error if the request fails', async () => {
      const data = { subject: 'example' };
      const error = new Error('Request failed');
      axios.post.mockRejectedValueOnce(error);

      await expect(controller.addKeywordSubject(data)).rejects.toThrow(error);
    });
  });

  describe('updateSubjectKeyword', () => {
    it('should update a keyword subject', async () => {
      const data = { subject: 'example' };
      const response = { data: 'keywordSubjectUpdated' };
      axios.put.mockResolvedValueOnce(response);

      const result = await controller.updateSubjectKeyword(data);

      expect(axios.put).toHaveBeenCalledWith(`${global.URL_PROJECT}/keyword/subject`, data);
      expect(result).toEqual(response.data);
    });

    it('should reject with an error if the request fails', async () => {
      const data = { subject: 'example' };
      const error = new Error('Request failed');
      axios.put.mockRejectedValueOnce(error);

      await expect(controller.updateSubjectKeyword(data)).rejects.toThrow(error);
    });
  });

  describe('getKeywordsAlternative', () => {
    it('should fetch keywords', async () => {
      const response = { data: 'keywords' };
      axios.get.mockResolvedValueOnce(response);

      const result = await controller.getKeywordsAlternative();

      expect(axios.get).toHaveBeenCalledWith(`${global.URL_PROJECT}/keyword`);
      expect(result).toEqual(response);
    });
  });
});