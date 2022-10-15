import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber';
import request from 'supertest';
import assert from 'assert'
import Server from '../../../src/server';


let application: Server;
let _request: request.Test;
let _response: request.Response;

// const mongoClient = MongoClientFactory.createClient({ url: 'mongodb://localhost:27017/mcc' });

Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.getHTTPServer()).get(route);
});

Given('I send a POST request to {string} with body:', (route: string, bodyData: string) => {
  const body = JSON.parse(bodyData)
  _request = request(application.getHTTPServer()).post(route).send(body);
});

Then('the response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status);
});

Then('the response should be empty', () => {
  assert.deepStrictEqual(_response.body, {});
});

BeforeAll(async () => {
  application = new Server('4000');
  await application.start();
});

AfterAll(async () => {
  await application.stop();
});