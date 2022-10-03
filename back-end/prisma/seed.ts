import { categories } from '../seed/categories';
import { products } from '../seed/products';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type ICategory = {
  id: string;
  name: string;
}

interface IProduct{
  name: string;
  price: number;
  description: string;
  categoryId: string;
  images: string[]
}

async function main() {
  await prisma.category.deleteMany();
  await prisma.product.deleteMany();

  for (const category of categories) {
    await prisma.category.create({
      data: category,
    })
  }

  const allCategories = await prisma.category.findMany();

  function getRandomCategory(): ICategory {
    return allCategories[Math.floor(Math.random()*allCategories.length)]
  }

  function addCategoryToProduct(product: IProduct) {
    product.categoryId = getRandomCategory().id;
    return product;
  }

  for (const product of products) {
    await prisma.product.create({
      data: addCategoryToProduct(product),
    })
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(() => {
  prisma.$disconnect();
});