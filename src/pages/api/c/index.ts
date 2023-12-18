import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;
  if (method === 'GET') {
    const quantity = query.quantity || 5;
    const request = { take: +quantity };
    const category = await prisma.category.findMany(request);
    res.status(200).json(category);
  }
}
