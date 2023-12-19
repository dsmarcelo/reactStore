import { IProduct } from '../interfaces/productI'
import { prisma } from '../lib/prisma';

async function fetchProducts(quantity = 10): Promise<IProduct[]> {
  const res = await prisma.product.findMany({ take: quantity });
  if (!res) return []
  return res;
}

async function fetchProductsByCategory(category: string, quantity = 10): Promise<IProduct[]> {
  const res = await prisma.product.findMany({
    where: {
      slug: { equals: category }
    },
    take: quantity,
  });
  if (!res) return []
  return res;
}

export {
  fetchProducts,
}