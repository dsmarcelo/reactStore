import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

interface body {
  slug: string;
  name: string;
  image: string;
}

interface query {
  id?: string;
  slug?: string;
  name?: string;
  quantity?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query, body } = req;
  const { slug, name, image } = body as body;
  const { id } = query as query;

  if (method === 'GET') {
    const { slug, name, quantity } = query as query;
    const takeQuantity = quantity ? parseInt(quantity) : 100;

    if (!query) {
      res.status(400).json({ message: 'Incorrect query' });
      res.end();
    }

    try {
      const category = await prisma.category.findMany({
        where: {
          OR: [id ? { id } : {}, slug ? { slug } : {}, name ? { name } : {}],
        },
        take: takeQuantity,
      });
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json({
        message: 'An error has occurred',
        err,
      });
    }
  }

  if (method === 'POST') {
    try {
      const categoryExists = await prisma.category.findFirst({
        where: { slug },
      });
      if (categoryExists) {
        res.status(400).json({ message: 'Category already exists' });
        res.end();
      }

      const category = await prisma.category.create({
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
}
