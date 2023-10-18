import { Then, When } from '@cucumber/cucumber';
import * as assert from 'assert'
import supertest from 'supertest';

import { server } from './preparation.steps';

let _request: supertest.Test;
let _response: supertest.Response;

When('I send a GET request to {string}', (route: string) => {
  _request = supertest(server.getHTTPServer()).get(route)
});

When('I send a POST request to {string} with body:', (route: string, bodyData: string) => {
  const body = JSON.parse(bodyData)
  _request = supertest(server.getHTTPServer()).post(route).send(body);
});

Then('the response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status);
});

Then('the response should be empty', () => {
  assert.deepStrictEqual(_response.body, {});
});

Then('the body should have a message {string}', (message: string) => {
  assert.deepStrictEqual(_response.body, { message });
});

Then('the response should have a payload:', (payload: string) => {
  const expected = JSON.parse(payload)
  assert.deepStrictEqual(_response.body, expected);
});

Then('the response should have a payload with {int} elements', (numberOfProduct: number) => {
  const received = (_response.body as unknown as Array<unknown>).length;
  assert.deepEqual(received, numberOfProduct);
});




