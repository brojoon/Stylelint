export interface IProducts {
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
