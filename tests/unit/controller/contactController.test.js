const axios = require('axios');
const controller = require('../../../src/controller/contactController');

jest.mock('axios');

describe('ContactController', () => {
  describe('getContacts', () => {
    it('should fetch contacts', async () => {
      const responseData = ['contact1', 'contact2'];
      axios.get.mockResolvedValueOnce({ data: responseData });

      const result = await controller.getContacts();

      expect(axios.get).toHaveBeenCalledWith(`${global.URL_USER}/contact`);
      expect(result).toEqual(responseData);
    });

    it('should reject with an error if the request fails', async () => {
      const error = new Error('Request failed');
      axios.get.mockRejectedValueOnce(error);

      await expect(controller.getContacts()).rejects.toThrow(error);
    });
  });

  describe('createContact', () => {
    it('should create a contact', async () => {
      const req = { body: 'contactData' };
      const response = { data: 'contactCreated' };
      axios.post.mockResolvedValueOnce(response);

      const result = await controller.createContact(req);

      expect(axios.post).toHaveBeenCalledWith(`${global.URL_USER}/contact/create`, req.body);
      expect(result).toEqual(response.data);
    });

    it('should reject with an error if the request fails', async () => {
      const req = { body: 'contactData' };
      const error = new Error('Request failed');
      axios.post.mockRejectedValueOnce(error);

      await expect(controller.createContact(req)).rejects.toThrow(error);
    });
  });

  describe('updateContact', () => {
    it('should update a contact', async () => {
      const contactId = '123';
      const req = { body: 'contactData' };
      const response = { data: 'contactUpdated' };
      axios.put.mockResolvedValueOnce(response);

      const result = await controller.updateContact(contactId, req);

      expect(axios.put).toHaveBeenCalledWith(`${global.URL_USER}/contact/update/${contactId}`, req.body);
      expect(result).toEqual(response.data);
    });

    it('should reject with an error if the request fails', async () => {
      const contactId = '123';
      const req = { body: 'contactData' };
      const error = new Error('Request failed');
      axios.put.mockRejectedValueOnce(error);

      await expect(controller.updateContact(contactId, req)).rejects.toThrow(error);
    });
  });

  describe('deleteContact', () => {
    it('should delete a contact', async () => {
      const contactId = '123';
      const responseData = 'contactDeleted';
      axios.delete.mockResolvedValueOnce({ data: responseData });

      const result = await controller.deleteContact(contactId);

      expect(axios.delete).toHaveBeenCalledWith(`${global.URL_USER}/contact/delete/${contactId}`);
      expect(result).toEqual(responseData);
    });

    it('should reject with an error if the request fails', async () => {
      const contactId = '123';
      const error = new Error('Request failed');
      axios.delete.mockRejectedValueOnce(error);

      await expect(controller.deleteContact(contactId)).rejects.toThrow(error);
    });
  });
});
