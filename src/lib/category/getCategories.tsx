import { ICategory } from '../../interfaces/category'
import { prisma } from '../prisma';

export async function getCategories(quantity = 10): Promise<ICategory[]> {
  const category = await prisma.category.findMany({ take: quantity });
  return category;
}

export async function getCategoryBySlug(slug: string): Promise<ICategory | null> {
  const category = await prisma.category.findFirst({ where: { slug } });
  return category;
}
