import React from 'react';
import { GetStaticPaths } from 'next';
import ProductContainer from '../../components/productContainer';
import { IProduct } from '../../interfaces/productI';
import HeaderCategory from '../../components/Header/headerCategory';
import { prisma } from '../../lib/prisma';
import { getCategories, getCategoryBySlug } from '../../lib/category/getCategories';
interface Props {
  productList: IProduct[];
  categoryName: string;
}

export default function Category({ productList, categoryName }: Props) {
  return (
    <>
      <HeaderCategory categoryName={categoryName} />
      <main>
        <div style={{ marginTop: '110px' }} >
          <ProductContainer productList={productList} />
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getCategories();

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

  const category = await getCategoryBySlug(slug);

  if (!category) {
    throw new Error("No category found")
  }

  const productList = await prisma.product.findMany({
    where: {
      categoryId: category.id
    }
  });

  return {
    props: {
      productList: JSON.parse(JSON.stringify(productList)),
      categoryName: category.name
    },
    revalidate: 360, // In seconds
  };
};
