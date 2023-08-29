import { Collection, MongoClient } from 'mongodb';

import { AggregateRoot } from '../../domain/AggregateRoot';
import { Uuid } from '../../domain/value-objects/Uuid';

export abstract class MongoRepository<T extends AggregateRoot> {
  constructor(private _client: Promise<MongoClient>) { }

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


  protected async persist(id: Uuid, aggregateRoot: T): Promise<void> {
    const collection = await this.collection();

    const document = { ...aggregateRoot.toPrimitives(), _id: id, id: undefined };

    await collection.updateOne({ _id: id }, { $set: document }, { upsert: true });
  }
}
