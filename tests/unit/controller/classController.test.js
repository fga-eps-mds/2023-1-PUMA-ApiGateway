const axios = require('axios');
const controller = require('../../../src/controller/classController');

jest.mock('axios');

describe('ClassController', () => {
  describe('getClass', () => {
    it('should fetch a class by ID', async () => {
      const classId = '123';
      const responseData = 'classData';
      axios.get.mockResolvedValueOnce({ data: responseData });

      const result = await controller.getClass(classId);

      expect(axios.get).toHaveBeenCalledWith(`${global.URL_PROJECT}/class/${classId}`);
      expect(result).toEqual({ data: responseData });
    });
  });

  describe('getClasses', () => {
    it('should fetch all classes', async () => {
      const responseData = ['class1', 'class2'];
      axios.get.mockResolvedValueOnce({ data: responseData });

      const result = await controller.getClasses();

      expect(axios.get).toHaveBeenCalledWith(`${global.URL_PROJECT}/classes`);
      expect(result).toEqual({ data: responseData });
    });
  });

  describe('updateClass', () => {
    it('should update a class', async () => {
      const classId = '123';
      const data = { title: 'New Title' };
      const response = { data: 'classUpdated' };
      axios.put.mockResolvedValueOnce(response);

      const result = await controller.updateClass(classId, data);

      expect(axios.put).toHaveBeenCalledWith(`${global.URL_PROJECT}/class/${classId}`, data);
      expect(result).toEqual(response);
    });

    it('should reject with an error if the request fails', async () => {
      const classId = '123';
      const data = { title: 'New Title' };
      const error = new Error('Request failed');
      axios.put.mockRejectedValueOnce(error);

      await expect(controller.updateClass(classId, data)).rejects.toThrow(error);
    });
  });

  describe('deleteClass', () => {
    it('should delete a class', async () => {
      const classId = '123';
      const responseData = 'classDeleted';
      axios.delete.mockResolvedValueOnce({ data: responseData });

      const result = await controller.deleteClass(classId);

      expect(axios.delete).toHaveBeenCalledWith(`${global.URL_PROJECT}/class/${classId}`);
      expect(result).toEqual(responseData);
    });

    it('should reject with an error if the request fails', async () => {
      const classId = '123';
      const error = new Error('Request failed');
      axios.delete.mockRejectedValueOnce(error);

      await expect(controller.deleteClass(classId)).rejects.toThrow(error);
    });
  });
});