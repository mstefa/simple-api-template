export abstract class AggregateRoot {
  abstract toPrimitives(): object;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static fromPrimitives(plainData: object): void {}
}
