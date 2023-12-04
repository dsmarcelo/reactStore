import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;

  if (method === 'GET') {
    const { id } = query;
    try {
      if (!id) {
        res.status(404).json({ message: 'id not provided' });
        res.end();
      }

      if (typeof id !== 'string') {
        res.status(400).json({ message: 'Incorrect id type' });
      }

      if (typeof id === 'string') {
        const product = await prisma.product.findFirst({
          where: {
            id,
          },
        });

        if (!product) {
          res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ product });
      }
    } catch (error) {
      res.status(500).json({
        message: 'An error occurred',
        error,
      });
    }
  }
}
