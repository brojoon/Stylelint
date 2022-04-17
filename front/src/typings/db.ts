export interface IUser {
  userId: string;
  password: string;
  address: string;
  email: string;
  phone_number: string;
}

export interface IProductSubImg {
  subimage: string;
}

export interface IProducts {
  id: number;
  code: string;
  name: string;
  type: string;
  price: number;
  dibs: number;
  perchase_quantity: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface IProductDetailInfo {
  code: string;
  name: string;
  type: string;
  price: number;
  dibs: number;
  image: string;
  perchase_quantity: number;
  color: string;
  size: string;
  quantity: number;
  subimage: IProductSubImg[];
}

export interface IProductsWithSubImg {
  code: string;
  name: string;
  type: string;
  price: number;
  productSubImgCode: IProductSubImg[];
}

export interface IBasketProduct {
  id: number;
  product_name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  image: string;
}

export interface IPaymentsDoneInfo {
  id: number;
  product_name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  address: string;
  phone_number: string;
  receiver: string;
  image: string;
  createdAt: Date;
}
