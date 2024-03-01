import { categories } from './categories';
import { products } from './products';
import { users } from './users';
import { prisma } from '../../src/lib/prisma';

interface IProduct {
  name: string;
  price: number;
  description: string;
  categoryId: string;
  images: string[];
}

async function main() {
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

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
