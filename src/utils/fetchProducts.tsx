import { IProduct } from '../interfaces/productI'
import { prisma } from '../lib/prisma';


async function fetchProducts(): Promise<IProduct[]> {
  const res = await prisma.product.findMany({take: 10});
  if (!res) return []
  console.log(res)
  return res;
}

export {
  fetchProducts,
}