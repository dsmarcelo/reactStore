import { IProduct } from '../../interfaces/productI'
import { prisma } from '../prisma';

export async function getProducts(quantity = 10): Promise<IProduct[]> {
  const products = await prisma.product.findMany({ take: quantity })
  return products;
}

export async function getProductById(id: string): Promise<IProduct | null> {
  const products = await prisma.product.findUnique({ where: { id } })
  return products;
}
