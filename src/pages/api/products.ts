import type { NextApiRequest, NextApiResponse } from 'next'
import { IProduct } from '../../interfaces/productI';
import { prisma } from '../../lib/prisma';

type Query = {
  quantity: number
}

type Data = {
  products: IProduct[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;
  if (method === 'GET') {
    let products: IProduct[] = []
    const quantity = query.quantity || 0;
    const request = quantity <= 0 ? undefined : { take: +quantity }
    if (quantity !== 0) {
      products = await prisma.product.findMany(request)
    }
    // products = await prisma.product.findMany()
    res.status(200).json(products)
  }
}
