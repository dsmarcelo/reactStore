import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;
  if (method === 'GET') {
    const { slug, name, quantity } = query;

    if (typeof quantity !== 'string' || !query) {
      res.status(400).json({ message: 'Incorrect query' });
      res.end();
    }

    let request = {};

    if (quantity) {
      request = { take: parseInt(quantity as string) };
    } else {
      request = {
        where: {
          OR: [
            slug ? { slug: slug as string } : {},
            name ? { name: name as string } : {},
          ],
        },
      };
    }

    try {
      const category = await prisma.category.findMany(request);
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({
        message: 'An error has occurred',
        error,
      });
    }
  }
}
