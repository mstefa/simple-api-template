import { Collection, MongoClient } from 'mongodb';

export abstract class MongoRepository<T> {
  constructor(private _client: Promise<MongoClient>) {}

  protected abstract collectionName(): string;

  protected client(): Promise<MongoClient> {
    return this._client;
  }

  protected async collection(): Promise<Collection> {
    return (await this._client).db().collection(this.collectionName());
  }

  async _drop(): Promise<void> {
    const collection = await this.collection();
    await collection.drop();
  }
}
