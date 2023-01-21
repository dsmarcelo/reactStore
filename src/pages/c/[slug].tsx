import React from 'react';
import { GetStaticPaths } from 'next';
import ProductContainer from '../../components/productContainer';
import { IProduct } from '../../interfaces/productI';
import HeaderCategory from '../../components/headerCategory';
import { prisma } from '../../lib/prisma';
import BackCategoryBar from '../../components/backCategoryBar';
interface Props {
  productList: IProduct[];
  categoryName: string;
}
// TODO: Better performance
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
    fallback: 'blocking',
  };
};

export async function getStaticProps(context: { params: { slug: string; }; }) {
  const slug = context.params.slug;
  const res = await fetch(`http://localhost:3000/api/c/${slug}`)
  const data = await res.json()
  const { category, productList } = data

  return {
    props: {
      productList: JSON.parse(JSON.stringify(productList)),
      categoryName: category.name,
    },
    revalidate: 60, // In seconds
  };
};
