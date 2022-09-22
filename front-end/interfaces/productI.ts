
interface IProduct{
  id: number;
  title: string;
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