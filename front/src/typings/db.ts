export interface IProducts {
  code: string;
  name: string;
  type: number;
  dibs: number;
  perchase_quantity: string;
  price: number;
  image: string;
}

export interface IProductSubImg {
  subimage: string;
}

export interface IProductsWithSubImg {
  code: string;
  name: string;
  type: string;
  price: number;
  productSubImgCode: IProductSubImg[];
}
