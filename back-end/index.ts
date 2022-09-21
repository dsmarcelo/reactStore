import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Connect the client
  await prisma.$connect()
  // ... you will write your Prisma Client queries here
  // await prisma.product.create({
  //   data: {
  //     name: "TV",
  //     price: 1000.00,
  //     category: "Eletronics",
  //     onSale : false,
  //   },
  // })
  const allUsers = await prisma.product.findMany()
  console.log(allUsers)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })