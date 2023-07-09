const axios = require('axios');
const controller = require('../../../src/controller/projectController');
const authentication = require('../../../src/utils/authentication');

jest.mock('axios');
jest.mock('../../../src/utils/authentication');

describe('ProjectController', () => {
  describe('getProject', () => {
    it('should fetch a project', async () => {
      const projectId = '123';
      const response = { data: 'project' };
      axios.get.mockResolvedValueOnce(response);

      const result = await controller.getProject(projectId);

      expect(axios.get).toHaveBeenCalledWith(`${global.URL_PROJECT}/project/${projectId}`);
      expect(result).toEqual(response);
    });
  });

  describe('addProject', () => {
    it('should add a project', async () => {
      const req = { body: { name: 'Project' } };
      const response = { data: 'projectAdded' };
      axios.post.mockResolvedValueOnce(response);

      const result = await controller.addProject(req);

      expect(axios.post).toHaveBeenCalledWith(`${global.URL_PROJECT}/project`, req.body);
      expect(result).toEqual(response.data);
    });

    it('should reject with an error if the request fails', async () => {
      const req = { body: { name: 'Project' } };
      const error = new Error('Request failed');
      axios.post.mockRejectedValueOnce(error);

      await expect(controller.addProject(req)).rejects.toThrow(error);
    });
  });

  describe('putProject', () => {
    it('should update a project', async () => {
      const body = { name: 'Project' };
      const response = { data: 'projectUpdated' };
      axios.put.mockResolvedValueOnce(response);

      const result = await controller.putProject(body);

      expect(axios.put).toHaveBeenCalledWith(`${global.URL_PROJECT}/project`, body);
      expect(result).toEqual(response);
    });

    it('should reject with an error if the request fails', async () => {
      const body = { name: 'Project' };
      const error = new Error('Request failed');
      axios.put.mockRejectedValueOnce(error);

      await expect(controller.putProject(body)).rejects.toThrow(error);
    });
  });

  describe('getAllProjects', () => {
    it('should fetch all projects', async () => {
      const response = { data: 'projects' };
      axios.get.mockResolvedValueOnce(response);

      const result = await controller.getAllProjects();

      expect(axios.get).toHaveBeenCalledWith(`${global.URL_PROJECT}/project`);
      expect(result).toEqual(response);
    });
  });

  describe('deleteProject', () => {
    it('should delete a project', async () => {
      const projectId = '123';
      const response = { data: 'projectDeleted' };
      axios.delete.mockResolvedValueOnce(response);

      const result = await controller.deleteProject(projectId);

      expect(axios.delete).toHaveBeenCalledWith(`${global.URL_PROJECT}/project/${projectId}`);
      expect(result).toEqual(response.data);
    });

    it('should reject with an error if the request fails', async () => {
      const projectId = '123';
      const error = new Error('Request failed');
      axios.delete.mockRejectedValueOnce(error);

      await expect(controller.deleteProject(projectId)).rejects.toThrow(error);
    });
  });

  describe('evaluateProject', () => {
    it('should evaluate a project', async () => {
      const body = { evaluation: 'good' };
      const response = { data: 'evaluationResult' };
      axios.put.mockResolvedValueOnce(response);

      const result = await controller.evaluateProject(body);

      expect(axios.put).toHaveBeenCalledWith(`${global.URL_PROJECT}/project/evaluate`, body);
      expect(result).toEqual(response);
    });

    it('should reject with an error if the request fails', async () => {
      const body = { evaluation: 'good' };
      const error = new Error('Request failed');
      axios.put.mockRejectedValueOnce(error);

      await expect(controller.evaluateProject(body)).rejects.toThrow(error);
    });
  });

  describe('reallocateProject', () => {
    it('should reallocate a project', async () => {
      const body = { projectId: '123', userId: '456' };
      const response = { data: 'reallocationResult' };
      axios.put.mockResolvedValueOnce(response);

      const result = await controller.reallocateProject(body);

      expect(axios.put).toHaveBeenCalledWith(`${global.URL_PROJECT}/project/reallocate`, body);
      expect(result).toEqual(response);
    });

    it('should reject with an error if the request fails', async () => {
      const body = { projectId: '123', userId: '456' };
      const error = new Error('Request failed');
      axios.put.mockRejectedValueOnce(error);

      await expect(controller.reallocateProject(body)).rejects.toThrow(error);
    });
  });

  describe('getKeywordsAvailbleToProject', () => {
    it('should fetch available keywords for a project', async () => {
      const response = { data: 'keywords' };
      axios.get.mockResolvedValueOnce(response);

      const result = await controller.getKeywordsAvailbleToProject();

      expect(axios.get).toHaveBeenCalledWith(`${global.URL_PROJECT}/project/keywords`);
      expect(result).toEqual(response);
    });

    it('should reject with an error if the request fails', async () => {
      const error = new Error('Request failed');
      axios.get.mockRejectedValueOnce(error);

      await expect(controller.getKeywordsAvailbleToProject()).rejects.toThrow(error);
    });
  });

  describe('getMyProposals', () => {
    it('should fetch user proposals', async () => {
      const req = { headers: { auth: 'token' }, query: { status: 'pending' } };
      const userId = '123';
      authentication.getUserId.mockReturnValueOnce(userId);
      const response = { data: 'proposals' };
      axios.get.mockResolvedValueOnce(response);

      const result = await controller.getMyProposals(req);

      expect(authentication.getUserId).toHaveBeenCalledWith(req.headers.auth);
      expect(axios.get).toHaveBeenCalledWith(`${global.URL_PROJECT}/userProposals/${userId}`, { params: req.query });
      expect(result).toEqual(response);
    });

    it('should reject with an error if the request fails', async () => {
      const req = { headers: { auth: 'token' }, query: { status: 'pending' } };
      const userId = '123';
      authentication.getUserId.mockReturnValueOnce(userId);
      const error = new Error('Request failed');
      axios.get.mockRejectedValueOnce(error);

      await expect(controller.getMyProposals(req)).rejects.toThrow(error);
    });
  });

  describe('initial', () => {
    it('should fetch initial data', async () => {
      const response = { data: 'initialData' };
      axios.get.mockResolvedValueOnce(response);

      const result = await controller.initial();

      expect(axios.get).toHaveBeenCalledWith(`${global.URL_PROJECT}`);
      expect(result).toEqual(response);
    });
  });
});