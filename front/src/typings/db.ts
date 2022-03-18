export interface IProducts {
  code: string;
  name: string;
  type: number;
  image: string;
}

export interface IProductSubImg {
  subimage: string;
}

export interface IProductsWithSubImg {
  code: string;
  name: string;
  type: string;
  productSubImgCode: IProductSubImg[];
}
