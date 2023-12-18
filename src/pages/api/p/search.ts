import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;

  if (method === 'GET') {
    const { name, minPrice, maxPrice } = query;
    try {
      if (!query) {
        res.status(400).json({ message: 'Bad request' });
        res.end();
      }

      const products = await prisma.product.findMany({
        where: {
          AND: [
            name
              ? { name: { contains: name as string, mode: 'insensitive' } }
              : {},
            minPrice ? { price: { gte: parseFloat(minPrice as string) } } : {},
            maxPrice ? { price: { lte: parseFloat(maxPrice as string) } } : {},
          ],
        },
      });

      if (!products || products.length === 0) {
        res.status(404).json({ message: 'Product not found' });
        res.end();
      }
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({
        message: 'An error has occurred',
        error,
      });
    }
  }
}
