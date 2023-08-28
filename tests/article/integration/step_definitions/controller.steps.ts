import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber';
import * as assert from 'assert'
// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';

import Server from '../../../../src/server';

let application: Server;
let _request: supertest.Test;
let _response: supertest.Response;

// const mongoClient = MongoClientFactory.createClient({ url: 'mongodb://localhost:27017/mcc' });

Given('I send a GET request to {string}', (route: string) => {
  _request = supertest(application.getHTTPServer()).get(route)
  // request(application.getHTTPServer()).get(route);
});

Given('I send a POST request to {string} with body:', (route: string, bodyData: string) => {
  const body = JSON.parse(bodyData)
  _request = supertest(application.getHTTPServer()).post(route).send(body);
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

BeforeAll(async () => {
  application = new Server('4000');
  await application.start();
});

AfterAll(async () => {
  await application.stop();
});
