import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;
  const { id } = query;
  if (typeof id !== 'string' || !id) {
    res.status(400).json({ message: 'ID must be a hex string' });
    res.end();
  }

  if (method === 'GET') {
    try {
      const category = await prisma.category.findFirst({
        where: {
          id: id as string,
        },
      });

      if (!category) {
        res.status(404).json({ message: 'Category not found' });
        res.end();
      }

      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({
        message: 'An error occurred',
        error,
      });
    }
  }
}
