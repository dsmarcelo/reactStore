import { categories } from './seed/categories';
import { products } from './seed/products';
import { users } from './seed/users';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface ICategory {
  id: string;
  name: string;
  image: string;
}

interface IProduct {
  name: string;
  price: number;
  description: string;
  categoryId: string;
  images: string[];
}

async function main() {
  await prisma.category.deleteMany();
  await prisma.product.deleteMany();

  for (const category of categories) {
    await prisma.category.create({
      data: category,
    });
  }

  const allCategories = await prisma.category.findMany();

  function getRandomCategory() {
    return allCategories[Math.floor(Math.random() * allCategories.length)];
  }

  function addRandomImages() {
    const imagesPerProduct = 3;
    const totalImages = 24;
    let images = [] as string[];

    for (let i = 1; i <= imagesPerProduct; i++) {
      const randomIndex = Math.floor(Math.random() * totalImages) + 1;
      images.push(randomIndex.toString());
    }
    return images;
  }

  function addCategoryToProduct(product: IProduct) {
    product.categoryId = getRandomCategory().id;
    product.images = addRandomImages();
    return product;
  }

  for (const product of products) {
    await prisma.product.create({
      data: addCategoryToProduct(product),
    });
  }

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
