import { IProduct } from '../interfaces/productI'
const { BACKEND_URL } = process.env;

async function fetchProducts(quantity = 10): Promise<IProduct[]> {
  const response = await fetch(`${BACKEND_URL}/api/p/?quantity=${quantity}`);
  if (!response) return []
  return response.json();
}

export {
  fetchProducts,
}