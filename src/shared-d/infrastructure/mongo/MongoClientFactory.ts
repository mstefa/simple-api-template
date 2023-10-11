import { MongoClient } from 'mongodb';

import MongoConfig from './MongoConfig';

export class MongoClientFactory {
  static async createClient(config: MongoConfig): Promise<MongoClient> {
    const client = new MongoClient(config.url, { ignoreUndefined: true });

    return client;
  }
}
