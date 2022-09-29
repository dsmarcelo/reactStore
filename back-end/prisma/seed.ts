import { categories } from '../seed/categories';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface ICategory {
  id: string;
  name: string;
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

  const products = [
    {
      name: 'Wireless Gaming Mouse',
      price: 150,
      categoryId: allCategories[0].id
    },
    {
      name: 'Oled TV 65"',
      price: 1799,
      categoryId: allCategories[1].id
    },
    {
      name: 'Coffee Maker',
      price: 50,
      categoryId: allCategories[2].id
    },
    {
      name: 'White Shirt',
      price: 20,
      categoryId: allCategories[3].id
    },
  ]

  for (const product of products) {
    await prisma.product.create({
      data: product,
    })
  }

}

main().catch((e) => {
  console.error(e);
  process.exit(1);
}).finally(() => {
  prisma.$disconnect();
});