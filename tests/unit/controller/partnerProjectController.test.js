const axios = require('axios');
const controller = require('../../../src/controller/partnerProjectController');

jest.mock('axios');

describe('PartnerProjectController', () => {
  describe('getProjects', () => {
    it('should fetch projects', async () => {
      const response = { data: 'projects' };
      axios.get.mockResolvedValueOnce(response);

      const result = await controller.getProjects();

      expect(axios.get).toHaveBeenCalledWith(`${global.URL_PROJECT}/partnerProject`);
      expect(result).toEqual(response);
    });

    it('should reject with an error if the request fails', async () => {
      const error = new Error('Request failed');
      axios.get.mockRejectedValueOnce(error);

      await expect(controller.getProjects()).rejects.toThrow(error);
    });
  });

  describe('getProject', () => {
    it('should fetch a project', async () => {
      const id = '123';
      const response = { data: 'project' };
      axios.get.mockResolvedValueOnce(response);

      const result = await controller.getProject(id);

      expect(axios.get).toHaveBeenCalledWith(`${global.URL_PROJECT}/partnerProject/${id}`);
      expect(result).toEqual(response);
    });

    it('should reject with an error if the request fails', async () => {
      const id = '123';
      const error = new Error('Request failed');
      axios.get.mockRejectedValueOnce(error);

      await expect(controller.getProject(id)).rejects.toThrow(error);
    });
  });

  describe('updateProject', () => {
    it('should update a project', async () => {
      const id = '123';
      const data = { name: 'Project' };
      const response = { data: 'projectUpdated' };
      axios.put.mockResolvedValueOnce(response);

      const result = await controller.updateProject(id, data);

      expect(axios.put).toHaveBeenCalledWith(`${global.URL_PROJECT}/partnerProject/${id}`, data);
      expect(result).toEqual(response);
    });

    it('should reject with an error if the request fails', async () => {
      const id = '123';
      const data = { name: 'Project' };
      const error = new Error('Request failed');
      axios.put.mockRejectedValueOnce(error);

      await expect(controller.updateProject(id, data)).rejects.toThrow(error);
    });
  });

  describe('deleteProject', () => {
    it('should delete a project', async () => {
      const id = '123';
      const response = { data: 'projectDeleted' };
      axios.delete.mockResolvedValueOnce(response);

      const result = await controller.deleteProject(id);

      expect(axios.delete).toHaveBeenCalledWith(`${global.URL_PROJECT}/partnerProject/${id}`);
      expect(result).toEqual(response);
    });

    it('should reject with an error if the request fails', async () => {
      const id = '123';
      const error = new Error('Request failed');
      axios.delete.mockRejectedValueOnce(error);

      await expect(controller.deleteProject(id)).rejects.toThrow(error);
    });
  });

  describe('createProject', () => {
    it('should create a project', async () => {
      const data = { name: 'Project' };
      const response = { data: 'projectCreated' };
      axios.post.mockResolvedValueOnce(response);

      const result = await controller.createProject(data);

      expect(axios.post).toHaveBeenCalledWith(`${global.URL_PROJECT}/partnerProject`, data);
      expect(result).toEqual(response);
    });

    it('should reject with an error if the request fails', async () => {
      const data = { name: 'Project' };
      const error = new Error('Request failed');
      axios.post.mockRejectedValueOnce(error);

      await expect(controller.createProject(data)).rejects.toThrow(error);
    });
  });
});