import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

interface body {
  slug: string;
  name: string;
  image: string;
}
interface query {
  id?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query, body } = req;
  const { id } = query as query;
  const { slug, name, image } = body as body;
  if (!id) {
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
    } catch (err) {
      res.status(500).json({
        message: 'An error has occurred',
        err,
      });
    }
  }

  if (method === 'PUT') {
    try {
      const category = await prisma.category.update({
        where: { id },
        data: {
          slug,
          name,
          image,
        },
      });

      res.status(201).json(category);
    } catch (err) {
      res.status(500).json({
        message: 'An error has occurred',
        err,
      });
    }
  }

  if (method === 'DELETE') {
    try {
      const category = await prisma.category.delete({ where: { id } });

      res.status(201).json(category);
    } catch (err) {
      res.status(500).json({
        message: 'An error has occurred',
        err,
      });
    }
  }
}
