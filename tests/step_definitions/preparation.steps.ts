import { AfterAll, BeforeAll } from '@cucumber/cucumber';
import { MongoClient } from 'mongodb';

import { MongoProductRepository } from '../../src/product/infrastructure/MongoProductRepository';
import Server from '../../src/server';
import { config } from '../../src/shared/config/appConfig';
import { MongoClientFactory } from '../../src/shared/infrastructure/mongo/MongoClientFactory';

let server: Server;
let _productRepository: MongoProductRepository;
let _mongoClient: Promise<MongoClient>;


BeforeAll(async () => {
  server = new Server(4000);
  await server.start();
  const url = `${config.db.host}/${config.app.env}`;
  _mongoClient = MongoClientFactory.createClient({ url });
  _productRepository = new MongoProductRepository(_mongoClient);
  // await seedDB(_metricRepository)

});

AfterAll(async () => {
  const client = await _mongoClient
  const collections = await client.db().listCollections(undefined, { nameOnly: true }).toArray();
  const collectionsNames = collections.map(collection => collection.name);
  for (const collectionName of collectionsNames) {
    // eslint-disable-next-line no-await-in-loop
    await client.db().collection(collectionName).deleteMany({});
  }

  await client.close(true)
  await server.stop();

});

export {
  _productRepository,
  server
}
