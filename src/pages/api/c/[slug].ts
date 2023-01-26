import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;

  if (method === 'GET') {
    const { slug } = query;
    if (!slug || Array.isArray(query.slug)) {
      res.status(404).send('Slug not provided');
      res.end();
    }
    if (typeof slug === 'string') {
      const category = await prisma.category.findFirst({
        where: {
          slug,
        },
      });
      if (!category) {
        res.status(204).send('No category found');
      }
      if (category) {
        const productList = await prisma.product.findMany({
          where: {
            categoryId: category.id,
          },
        });
        res.status(200).json({ category, productList });
      }
    }
  }
}
