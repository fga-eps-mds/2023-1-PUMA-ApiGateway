const axios = require('axios');
const jwt = require('jsonwebtoken');
const controller = require('../../../src/controller/userController');

jest.mock('axios');
jest.mock('jsonwebtoken');

describe('UserController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('registerUser', () => {
    it('should register a user', async () => {
      const body = { username: 'testuser', password: 'testpassword' };
      const response = { data: { id: 1, username: 'testuser' } };
      axios.post.mockResolvedValue(response);

      const result = await controller.registerUser(body);

      expect(result).toEqual(response);
      expect(axios.post).toHaveBeenCalledWith(`${global.URL_USER}/register`, body);
    });

    it('should handle registration error', async () => {
      const body = { username: 'testuser', password: 'testpassword' };
      const error = new Error('Registration failed');
      axios.post.mockRejectedValue(error);

      await expect(controller.registerUser(body)).rejects.toThrow(error);
      expect(axios.post).toHaveBeenCalledWith(`${global.URL_USER}/register`, body);
    });
  });

  describe('logUserIn', () => {
    it('should log in a user', async () => {
      const body = { username: 'testuser', password: 'testpassword' };
      const response = { data: { userId: 1, permission: 'admin' } };
      const token = 'testtoken';
      const expected = { token, ...response.data };
      axios.post.mockResolvedValue(response);
      jwt.sign.mockReturnValue(token);

      const result = await controller.logUserIn(body);

      expect(result).toEqual(expected);
      expect(axios.post).toHaveBeenCalledWith(`${global.URL_USER}/login`, body);
      expect(jwt.sign).toHaveBeenCalledWith({ userId: 1, permission: 'admin' }, global.SECRET, { expiresIn: 604800 });
    });

    it('should handle login error', async () => {
      const body = { username: 'testuser', password: 'testpassword' };
      const error = new Error('Login failed');
      axios.post.mockRejectedValue(error);

      await expect(controller.logUserIn(body)).rejects.toThrow(error);
      expect(axios.post).toHaveBeenCalledWith(`${global.URL_USER}/login`, body);
      expect(jwt.sign).not.toHaveBeenCalled();
    });
  });

  describe('getStudent', () => {
    it('should get a student', async () => {
      const matriculaIdParam = 12345;
      const response = { data: { name: 'John Doe', matriculaId: 12345 } };
      axios.get.mockResolvedValue(response);

      const result = await controller.getStudent(matriculaIdParam);

      expect(result).toEqual(response.data);
      expect(axios.get).toHaveBeenCalledWith(`${global.URL_USER}/aluno/${matriculaIdParam}`);
    });
  });

  describe('initial', () => {
    it('should get initial data', async () => {
      const response = { data: { message: 'Initial data' } };
      axios.get.mockResolvedValue(response);

      const result = await controller.initial();

      expect(result).toEqual(response.data);
      expect(axios.get).toHaveBeenCalledWith(`${global.URL_USER}`);
    });
  });

  describe('updatePassword', () => {
    it('should update user password', async () => {
      const password = 'newpassword';
      const token = 'testtoken';
      const response = { data: { success: true } };
      const body = { password };
      axios.put.mockResolvedValue(response);

      const result = await controller.updatePassword({ password, token });

      expect(result).toEqual(response.data);
      expect(axios.put).toHaveBeenCalledWith(`${global.URL_USER}/password/${token}`, { password });
    });

    it('should handle update password error', async () => {
      const password = 'newpassword';
      const token = 'testtoken';
      const error = new Error('Update password failed');
      axios.put.mockRejectedValue(error);

      await expect(controller.updatePassword({ password, token })).rejects.toThrow(error);
      expect(axios.put).toHaveBeenCalledWith(`${global.URL_USER}/password/${token}`, { password });
    });
  });

  describe('recoverPassword', () => {
    it('should recover user password', async () => {
      const body = { email: 'testuser@example.com' };
      const response = { data: { success: true } };
      axios.post.mockResolvedValue(response);

      const result = await controller.recoverPassword(body);

      expect(result).toEqual(response.data);
      expect(axios.post).toHaveBeenCalledWith(`${global.URL_USER}/recover`, body);
    });

    it('should handle password recovery error', async () => {
      const body = { email: 'testuser@example.com' };
      const error = new Error('Password recovery failed');
      axios.post.mockRejectedValue(error);

      await expect(controller.recoverPassword(body)).rejects.toThrow(error);
      expect(axios.post).toHaveBeenCalledWith(`${global.URL_USER}/recover`, body);
    });

    it('should resolve with error status 404', async () => {
      const body = { email: 'nonexistentuser@example.com' };
      const error = new Error('User not found');
      error.message = 'Request failed with status code 404';
      axios.post.mockRejectedValue(error);

      const result = await controller.recoverPassword(body);

      expect(result).toEqual({ error, status: 404 });
      expect(axios.post).toHaveBeenCalledWith(`${global.URL_USER}/recover`, body);
    });
  });

  describe('addUserType', () => {
    it('should add a user type', async () => {
      const body = { name: 'admin' };
      const response = { data: { id: 1, name: 'admin' } };
      axios.post.mockResolvedValue(response);

      const result = await controller.addUserType(body);

      expect(result).toEqual(response.data);
      expect(axios.post).toHaveBeenCalledWith(`${global.URL_USER}/userType`, body);
    });

    it('should handle add user type error', async () => {
      const body = { name: 'admin' };
      const error = new Error('Add user type failed');
      axios.post.mockRejectedValue(error);

      await expect(controller.addUserType(body)).rejects.toThrow(error);
      expect(axios.post).toHaveBeenCalledWith(`${global.URL_USER}/userType`, body);
    });

    it('should resolve with error status 404', async () => {
      const body = { name: 'admin' };
      const error = new Error('Not found');
      error.message = 'Request failed with status code 404';
      axios.post.mockRejectedValue(error);

      const result = await controller.addUserType(body);

      expect(result).toEqual({ error, status: 404 });
      expect(axios.post).toHaveBeenCalledWith(`${global.URL_USER}/userType`, body);
    });
  });

  describe('getUserType', () => {
    it('should get a user type', async () => {
      const userTypeId = 1;
      const response = { data: { id: 1, name: 'admin' } };
      axios.get.mockResolvedValue(response);

      const result = await controller.getUserType(userTypeId);

      expect(result).toEqual(response.data);
      expect(axios.get).toHaveBeenCalledWith(`${global.URL_USER}/userType/${userTypeId}`);
    });

    it('should handle get user type error', async () => {
      const userTypeId = 1;
      const error = new Error('Get user type failed');
      axios.get.mockRejectedValue(error);

      await expect(controller.getUserType(userTypeId)).rejects.toThrow(error);
      expect(axios.get).toHaveBeenCalledWith(`${global.URL_USER}/userType/${userTypeId}`);
    });

    it('should resolve with error status 404', async () => {
      const userTypeId = 1;
      const error = new Error('Not found');
      error.message = 'Request failed with status code 404';
      axios.get.mockRejectedValue(error);

      const result = await controller.getUserType(userTypeId);

      expect(result).toEqual({ error, status: 404 });
      expect(axios.get).toHaveBeenCalledWith(`${global.URL_USER}/userType/${userTypeId}`);
    });
  });

  describe('updateUserType', () => {
    it('should update a user type', async () => {
      const userTypeId = 1;
      const body = { name: 'admin' };
      const response = { data: { success: true } };
      axios.put.mockResolvedValue(response);

      const result = await controller.updateUserType(userTypeId, body);

      expect(result).toEqual(response.data);
      expect(axios.put).toHaveBeenCalledWith(`${global.URL_USER}/userType/${userTypeId}`, body);
    });

    it('should handle update user type error', async () => {
      const userTypeId = 1;
      const body = { name: 'admin' };
      const error = new Error('Update user type failed');
      axios.put.mockRejectedValue(error);

      await expect(controller.updateUserType(userTypeId, body)).rejects.toThrow(error);
      expect(axios.put).toHaveBeenCalledWith(`${global.URL_USER}/userType/${userTypeId}`, body);
    });

    it('should resolve with error status 404', async () => {
      const userTypeId = 1;
      const body = { name: 'admin' };
      const error = new Error('Not found');
      error.message = 'Request failed with status code 404';
      axios.put.mockRejectedValue(error);

      const result = await controller.updateUserType(userTypeId, body);

      expect(result).toEqual({ error, status: 404 });
      expect(axios.put).toHaveBeenCalledWith(`${global.URL_USER}/userType/${userTypeId}`, body);
    });
  });

  describe('deleteUserType', () => {
    it('should delete a user type', async () => {
      const userTypeId = 1;
      const response = { data: { success: true } };
      axios.delete.mockResolvedValue(response);

      const result = await controller.deleteUserType(userTypeId);

      expect(result).toEqual(response.data);
      expect(axios.delete).toHaveBeenCalledWith(`${global.URL_USER}/userType/${userTypeId}`);
    });

    it('should handle delete user type error', async () => {
      const userTypeId = 1;
      const error = new Error('Delete user type failed');
      axios.delete.mockRejectedValue(error);

      await expect(controller.deleteUserType(userTypeId)).rejects.toThrow(error);
      expect(axios.delete).toHaveBeenCalledWith(`${global.URL_USER}/userType/${userTypeId}`);
    });

    it('should resolve with error status 404', async () => {
      const userTypeId = 1;
      const error = new Error('Not found');
      error.message = 'Request failed with status code 404';
      axios.delete.mockRejectedValue(error);

      const result = await controller.deleteUserType(userTypeId);

      expect(result).toEqual({ error, status: 404 });
      expect(axios.delete).toHaveBeenCalledWith(`${global.URL_USER}/userType/${userTypeId}`);
    });
  });
});