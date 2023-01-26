interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
}

interface IProductList {
  IProduct: IProduct[];
}

export type { IProduct, IProductList };
