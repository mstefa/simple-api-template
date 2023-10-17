import { OrderType, OrderTypes } from './OrderType';

export class Order {
  readonly orderBy: string;
  readonly orderType: OrderType;

  constructor(orderBy: string, orderType: OrderType) {
    this.orderBy = orderBy;
    this.orderType = orderType;
  }

  static fromValues(orderBy?: string, orderType?: string): Order {
    if (!orderBy) {
      return Order.none();
    }

    return new Order(orderBy, OrderType.fromValue(orderType || OrderTypes.ASC));
  }

  static none(): Order {
    return new Order('', new OrderType(OrderTypes.NONE));
  }

  static desc(orderBy: string): Order {
    return new Order(orderBy, new OrderType(OrderTypes.DESC));
  }

  static asc(orderBy: string): Order {
    return new Order(orderBy, new OrderType(OrderTypes.ASC));
  }

  public hasOrder() {
    return !this.orderType.isNone();
  }
}
