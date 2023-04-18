import 'jest-localstorage-mock';
import callApi, { hitApi } from '../api.js';

describe('Should create a new game', () => {
  test('should return an ID', async () => {
    const message = await hitApi();
    const arrMess = message.split(' ');
    expect(arrMess[0]).toBe('Game');
  });

  test('should call localStorage', async () => {
    const message = await hitApi();
    const id = localStorage.getItem('id');
    expect(message.split(' ')[3]).toBe(id);
  });

  test('should return undefined', async () => {
    await hitApi();
    const returned = await callApi();
    expect(returned).toBe(undefined);
  });
});