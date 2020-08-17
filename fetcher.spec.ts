import { describe, expect, it } from '@jest/globals';
import { fetcher } from './fetcher';

describe('fetcher', () => {
  it('deve usar opçoes default', () => {
    expect(fetcher.optionsDefault).toMatchObject({
      url: '',
      method: 'GET',
      baseUrl: '',

      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      params: {},
      body: {},
      timeout: 0,
      responseType: 'json',
    });
  });
  it('deve fazer get', async () => {
    const resp = await fetcher.get('get', {
      baseUrl: 'https://postman-echo.com',
    });

    expect(resp.args).toEqual({});
    expect(resp.url).toEqual('https://postman-echo.com/get');
  });

  it('deve fazer get com params', async () => {
    const resp = await fetcher.get('get', {
      baseUrl: 'https://postman-echo.com',
      params: { foo1: 'bar1', foo2: 'bar2' },
    });

    expect(resp.args).toEqual({
      foo1: 'bar1',
      foo2: 'bar2',
    });
    expect(resp.url).toEqual(
      'https://postman-echo.com/get?foo1=bar1&foo2=bar2'
    );
  });
  it('deve fazer post', async () => {
    const resp = await fetcher.post(
      'post',
      { foo1: 'bar1', foo2: 'bar2' },
      {
        baseUrl: 'https://postman-echo.com',
      }
    );

    expect(resp.args).toEqual({});
    expect(resp.data).toEqual({ foo1: 'bar1', foo2: 'bar2' });
    expect(resp.url).toEqual('https://postman-echo.com/post');
  });
});
