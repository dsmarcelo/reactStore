import React from 'react';
import { GetStaticPaths } from 'next';
import ProductContainer from '../../components/productContainer';
import { IProduct } from '../../interfaces/productI';
import Header from '../../components/header';
import { prisma } from '../../lib/prisma';

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await prisma.category.findMany();

  const paths = data.map((category) => {
    return {
      params: {
        slug: category.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: { slug: string; }; }) => {
  const slug = context.params.slug;

  const category = await prisma.category.findFirst({
    where: {
      slug: {
        equals: slug,
        mode: 'insensitive',
      }
    }
  });

  if (!category) {
    return {
      props: {
        productList: []
      }
    }
  };

  const productList = await prisma.product.findMany({
    where: { categoryId: category.id }
  });

  return {
    props: {
      productList: JSON.parse(JSON.stringify(productList)),
    },
    revalidate: 10000,
  };
};

interface Props {
  productList: IProduct[];
}

const Category: React.FC<Props> = ({ productList }) => {
  return (
    <>
      <Header />
      <main>
        <ProductContainer productList={productList} />
      </main>

    </>
  );
}

export default Category;
