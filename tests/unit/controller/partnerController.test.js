const axios = require('axios');
const controller = require('../../../src/controller/partnerController');

// Mock axios methods
jest.mock('axios');

describe('Controller Tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('addPartner should make a POST request to the correct URL', async () => {
    const reqBody = { name: 'John Doe', email: 'johndoe@example.com' };
    const resolvedValue = { status: 200, data: { id: 1 } };

    axios.post.mockResolvedValue(resolvedValue);

    const response = await controller.addPartner(reqBody);

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(expect.stringContaining('/partners'), reqBody);
    expect(response).toEqual(resolvedValue);
  });

  test('getPartner should make a GET request to the correct URL', async () => {
    const partnerId = 1;
    const resolvedValue = { status: 200, data: { id: partnerId, name: 'John Doe' } };

    axios.get.mockResolvedValue(resolvedValue);

    const response = await controller.getPartner(partnerId);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining(`/partner/${partnerId}`));
    expect(response).toEqual(resolvedValue);
  });

  test('getPartners should make a GET request to the correct URL', async () => {
    const resolvedValue = { status: 200, data: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Smith' }] };

    axios.get.mockResolvedValue(resolvedValue);

    const response = await controller.getPartners();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/partners'));
    expect(response).toEqual(resolvedValue);
  });

  test('updatePartner should make a PUT request to the correct URL', async () => {
    const partnerId = 1;
    const data = { name: 'John Doe', email: 'johndoe@example.com' };
    const resolvedValue = { status: 200, data: { id: partnerId, ...data } };

    axios.put.mockResolvedValue(resolvedValue);

    const response = await controller.updatePartner(partnerId, data);

    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(expect.stringContaining(`/partner/${partnerId}`), data);
    expect(response).toEqual(resolvedValue);
  });

  test('deletePartner should make a DELETE request to the correct URL', async () => {
    const partnerId = 1;
    const resolvedValue = { status: 200, data: { message: 'Partner deleted successfully.' } };

    axios.delete.mockResolvedValue(resolvedValue);

    const response = await controller.deletePartner(partnerId);

    expect(axios.delete).toHaveBeenCalledTimes(1);
    expect(axios.delete).toHaveBeenCalledWith(expect.stringContaining(`/partner/${partnerId}`));
    expect(response).toEqual(resolvedValue.data);
  });
});