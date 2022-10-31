import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths } from 'next';
import { ICategory } from '../../interfaces/category';
import ProductContainer from '../../components/productContainer';
import { IProduct } from '../../interfaces/productI';
import Header from '../../components/header';

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/categories`);
  const data: ICategory[] = await response.json();

  const paths = data.map((category) => {
    return {
      params: {
        id: category.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: { id: any; }; }) => {
  const id = context.params.id;
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${id}/products`
  );
  const productList: IProduct[] = await response.json();
  return {
    props: {
      productList,
    },
    revalidate: 86400,
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
        <ProductContainer products={productList} />
      </main>

    </>
  );
}

export default Category;