export interface IBasket_numbersType {
  id: string;
}
export interface IPostType {
  address: string;
  basket_numbers: IBasket_numbersType[];
  receiver: string;
  phone_number: string;
}

export interface paymentSaveRequest {
  userId: string;
  image: string;
  color: string;
  size: string;
  product_name: string;
  quantity: number;
  price: number;
  state: boolean;
}

export interface paymentBasketRequest {
  userId: string;
  image: string;
  color: string;
  size: string;
  product_name: string;
  quantity: number;
  price: number;
  basket_number: number;
  state: boolean;
}
