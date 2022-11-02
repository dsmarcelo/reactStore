import { GetServerSideProps } from 'next';
import * as React from 'react';
import Header from '../components/header';
import ProductContainer from '../components/productContainer';
import { IProduct } from '../interfaces/productI';
import { prisma } from '../lib/prisma';

type IProp = {
  products: IProduct[];
};

const Products: React.FC<IProp> = ({ products }) => {
  return (
    <div>
      <Header />
      <main>
        <ProductContainer productList={products.slice(0, 20)} />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const result = await prisma.product.findMany();

  const products = result.map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      images: product.images,
    }
  })

  return {
    props: {
      products,
    },
  };
};

export default Products;
