
interface IProduct{
  id: number;
  name: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
  }
  images: [string]
}

interface IProductList{
  IProduct: IProduct[];
}

export type {
  IProduct,
}