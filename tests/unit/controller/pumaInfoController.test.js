const axios = require('axios');
const controller = require('../../../src/controller/PumaInfoController');

jest.mock('axios');

describe('PumaInfoController', () => {
  describe('getPumaInfo', () => {
    it('should fetch Puma info', async () => {
      const response = { data: 'pumaInfo' };
      axios.get.mockResolvedValueOnce(response);

      const result = await controller.getPumaInfo();

      expect(axios.get).toHaveBeenCalledWith(`${global.URL_PROJECT}/pumaInfo`);
      expect(result).toEqual(response);
    });

    it('should reject with an error if the request fails', async () => {
      const error = new Error('Request failed');
      axios.get.mockRejectedValueOnce(error);

      await expect(controller.getPumaInfo()).rejects.toThrow(error);
    });
  });

  describe('updatePumaInfo', () => {
    it('should update Puma info', async () => {
      const data = { name: 'Puma', age: 5 };
      const response = { data: 'updatedPumaInfo' };
      axios.put.mockResolvedValueOnce(response);

      const result = await controller.updatePumaInfo(data);

      expect(axios.put).toHaveBeenCalledWith(`${global.URL_PROJECT}/pumaInfo`, data);
      expect(result).toEqual(response);
    });

    it('should reject with an error if the request fails', async () => {
      const data = { name: 'Puma', age: 5 };
      const error = new Error('Request failed');
      axios.put.mockRejectedValueOnce(error);

      await expect(controller.updatePumaInfo(data)).rejects.toThrow(error);
    });
  });
});