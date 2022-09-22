import { IProduct } from '../interfaces/productI'


async function fetchProducts(): Promise<IProduct[]> {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const products: IProduct[] = await res.json();
  return products.slice(0,20)
}

export {
  fetchProducts,
}