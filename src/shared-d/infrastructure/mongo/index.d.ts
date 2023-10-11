import 'mongodb';

declare module 'mongodb' {
  interface collection {
    insertOne(arg0: unknown): void;
  }
}
