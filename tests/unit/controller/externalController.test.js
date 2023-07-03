const axios = require('axios');
const controller = require('../../../src/controller/externalController');

jest.mock('axios');

describe('ExternalController', () => {
  describe('getExternal', () => {
    it('should fetch external data', async () => {
      const responseData = 'externalData';
      axios.get.mockResolvedValueOnce({ data: responseData });

      const result = await controller.getExternal();

      expect(axios.get).toHaveBeenCalledWith(`${global.URL_EXTERNAL}/`);
      expect(result).toEqual({ data: responseData });
    });

    it('should reject with an error if the request fails', async () => {
      const error = new Error('Request failed');
      axios.get.mockRejectedValueOnce(error);

      await expect(controller.getExternal()).rejects.toThrow(error);
    });
  });
});