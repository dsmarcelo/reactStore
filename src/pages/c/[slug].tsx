import React from 'react';
import { GetStaticPaths } from 'next';
import ProductContainer from '../../components/productContainer';
import { IProduct } from '../../interfaces/productI';
import HeaderCategory from '../../components/headerCategory';
import { prisma } from '../../lib/prisma';
interface Props {
  productList: IProduct[];
  categoryName: string;
}

export default function Category({ productList, categoryName }: Props) {
  return (
    <>
      <HeaderCategory category={categoryName} />
      <main>
        <div style={{ marginTop: '110px' }} >
          <ProductContainer productList={productList} />
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await prisma.category.findMany();

  const paths = categories.map((category) => ({
    params: {
      slug: category.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context: { params: { slug: string } }) {
  const { slug } = context.params;

  const categoryS = await prisma.category.findFirst({
    where: {
      slug,
    }
  });

  if (!categoryS) {
    throw new Error("No category found")
  }

  const productList = await prisma.product.findMany({
    where: {
      categoryId: categoryS.id
    }
  });

  return {
    props: {
      productList: JSON.parse(JSON.stringify(productList)),
    },
    revalidate: 360, // In seconds
  };
};
