const axios = require('axios');
const controller = require('../../../src/controller/subjectController');

jest.mock('axios');

describe('SubjectController', () => {
  describe('addSubject', () => {
    it('should add a subject', async () => {
      const data = { name: 'Subject' };
      const response = { data: 'addedSubject' };
      axios.post.mockResolvedValueOnce(response);

      const result = await controller.addSubject(data);

      expect(axios.post).toHaveBeenCalledWith(`${global.URL_PROJECT}/subject`, data);
      expect(result).toEqual(response);
    });

    it('should reject with an error if the request fails', async () => {
      const data = { name: 'Subject' };
      const error = new Error('Request failed');
      axios.post.mockRejectedValueOnce(error);

      await expect(controller.addSubject(data)).rejects.toThrow(error);
    });
  });

  describe('getSubject', () => {
    it('should fetch a subject', async () => {
      const subjectId = '123';
      const response = { data: 'subjectInfo' };
      axios.get.mockResolvedValueOnce(response);

      const result = await controller.getSubject(subjectId);

      expect(axios.get).toHaveBeenCalledWith(`${global.URL_PROJECT}/subject/${subjectId}`);
      expect(result).toEqual(response);
    });
  });

  describe('getSubjects', () => {
    it('should fetch subjects', async () => {
      const response = { data: 'subjectsList' };
      axios.get.mockResolvedValueOnce(response);

      const result = await controller.getSubjects();

      expect(axios.get).toHaveBeenCalledWith(`${global.URL_PROJECT}/subject`);
      expect(result).toEqual(response);
    });
  });

  describe('updateSubject', () => {
    it('should update a subject', async () => {
      const subjectId = '123';
      const data = { name: 'Updated Subject' };
      const response = { data: 'updatedSubject' };
      axios.put.mockResolvedValueOnce(response);

      const result = await controller.updateSubject(subjectId, data);

      expect(axios.put).toHaveBeenCalledWith(`${global.URL_PROJECT}/subject/${subjectId}`, data);
      expect(result).toEqual(response);
    });

    it('should reject with an error if the request fails', async () => {
      const subjectId = '123';
      const data = { name: 'Updated Subject' };
      const error = new Error('Request failed');
      axios.put.mockRejectedValueOnce(error);

      await expect(controller.updateSubject(subjectId, data)).rejects.toThrow(error);
    });
  });

  describe('deleteSubject', () => {
    it('should delete a subject', async () => {
      const subjectId = '123';
      const response = { data: 'deletedSubject' };
      axios.delete.mockResolvedValueOnce(response);

      const result = await controller.deleteSubject(subjectId);

      expect(axios.delete).toHaveBeenCalledWith(`${global.URL_PROJECT}/subject/${subjectId}`);
      expect(result).toEqual(response.data);
    });

    it('should reject with an error if the request fails', async () => {
      const subjectId = '123';
      const error = new Error('Request failed');
      axios.delete.mockRejectedValueOnce(error);

      await expect(controller.deleteSubject(subjectId)).rejects.toThrow(error);
    });
  });

  describe('getAvailableKeywordsToSubject', () => {
    it('should fetch available keywords for a subject', async () => {
      const response = { data: 'availableKeywords' };
      axios.get.mockResolvedValueOnce(response);

      const result = await controller.getAvailableKeywordsToSubject();

      expect(axios.get).toHaveBeenCalledWith(`${global.URL_PROJECT}/subject/keywords`);
      expect(result).toEqual(response);
    });
  });

  describe('getProfessors', () => {
    it('should fetch professors', async () => {
      const response = { data: 'professorsList' };
      axios.get.mockResolvedValueOnce(response);

      const result = await controller.getProfessors();

      expect(axios.get).toHaveBeenCalledWith(`${global.URL_PROJECT}/professors`);
      expect(result).toEqual(response);
    });
  });

  describe('getSubareas', () => {
    it('should fetch subareas', async () => {
      const response = { data: 'subareasList' };
      axios.get.mockResolvedValueOnce(response);

      const result = await controller.getSubareas();

      expect(axios.get).toHaveBeenCalledWith(`${global.URL_PROJECT}/subareas`);
      expect(result).toEqual(response);
    });
  });

  describe('getKnowledgeAreas', () => {
    it('should fetch knowledge areas', async () => {
      const response = { data: 'knowledgeAreasList' };
      axios.get.mockResolvedValueOnce(response);

      const result = await controller.getKnowledgeAreas();

      expect(axios.get).toHaveBeenCalledWith(`${global.URL_PROJECT}/knowledgeareas`);
      expect(result).toEqual(response);
    });
  });
});