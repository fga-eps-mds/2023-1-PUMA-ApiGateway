const axios = require('axios');
const controller = require('../../../src/controller/bannerController');

jest.mock('axios');

describe('BannerController', () => {
  describe('getAllBanners', () => {
    it('should fetch all banners', async () => {
      const responseData = ['banner1', 'banner2'];
      axios.get.mockResolvedValueOnce({ data: responseData });

      const result = await controller.getAllBanners();

      expect(axios.get).toHaveBeenCalledWith(`${global.URL_PROJECT}/banner`);
      expect(result).toEqual(responseData);
    });

    it('should reject with an error if the request fails', async () => {
      const error = new Error('Request failed');
      axios.get.mockRejectedValueOnce(error);

      await expect(controller.getAllBanners()).rejects.toThrow(error);
    });
  });

  describe('getHighlightBanner', () => {
    it('should fetch the highlight banner', async () => {
      const responseData = 'highlightBanner';
      axios.get.mockResolvedValueOnce({ data: responseData });

      const result = await controller.getHighlightBanner();

      expect(axios.get).toHaveBeenCalledWith(`${global.URL_PROJECT}/banner/highlight`);
      expect(result).toEqual(responseData);
    });

    it('should reject with an error if the request fails', async () => {
      const error = new Error('Request failed');
      axios.get.mockRejectedValueOnce(error);

      await expect(controller.getHighlightBanner()).rejects.toThrow(error);
    });
  });

  describe('addBanner', () => {
    it('should add a new banner', async () => {
      const req = { body: 'bannerData' };
      const response = { data: 'bannerAdded' };
      axios.post.mockResolvedValueOnce(response);

      const result = await controller.addBanner(req);

      expect(axios.post).toHaveBeenCalledWith(`${global.URL_PROJECT}/banner`, req.body);
      expect(result).toEqual(response);
    });

    it('should reject with an error if the request fails', async () => {
      const req = { body: 'bannerData' };
      const error = new Error('Request failed');
      axios.post.mockRejectedValueOnce(error);

      await expect(controller.addBanner(req)).rejects.toThrow(error);
    });
  });

  describe('getBanner', () => {
    it('should reject with an error if the request fails', async () => {
      const bannerId = '123';
      const error = new Error('Request failed');
      axios.get.mockRejectedValueOnce(error);

      await expect(controller.getBanner(bannerId)).rejects.toThrow(error);
    });
  });

  describe('updateBanner', () => {
    it('should update a banner', async () => {
      const bannerId = '123';
      const data = { title: 'New Title' };
      const response = { data: 'bannerUpdated' };
      axios.put.mockResolvedValueOnce(response);

      const result = await controller.updateBanner(bannerId, data);

      expect(axios.put).toHaveBeenCalledWith(`${global.URL_PROJECT}/banner/${bannerId}`, data);
      expect(result).toEqual(response);
    });

    it('should reject with an error if the request fails', async () => {
      const bannerId = '123';
      const data = { title: 'New Title' };
      const error = new Error('Request failed');
      axios.put.mockRejectedValueOnce(error);

      await expect(controller.updateBanner(bannerId, data)).rejects.toThrow(error);
    });
  });

  describe('deleteBanner', () => {
    it('should delete a banner', async () => {
      const bannerId = '123';
      const responseData = 'bannerDeleted';
      axios.delete.mockResolvedValueOnce({ data: responseData });

      const result = await controller.deleteBanner(bannerId);

      expect(axios.delete).toHaveBeenCalledWith(`${global.URL_PROJECT}/banner/${bannerId}`);
      expect(result).toEqual(responseData);
    });

    it('should reject with an error if the request fails', async () => {
      const bannerId = '123';
      const error = new Error('Request failed');
      axios.delete.mockRejectedValueOnce(error);

      await expect(controller.deleteBanner(bannerId)).rejects.toThrow(error);
    });
  });
});