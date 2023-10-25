export type CartProductDto = {
  id: string;
  quantity: number;
}

export type CartDto = {
  id: string;
  userId: string;
  products: CartProductDto[];
};
