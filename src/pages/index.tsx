import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import React from 'react';
import CategoryContainer from '../components/categoriesContainer';
import Header from '../components/Header/header';
import SaleProductCard from '../components/saleProductCard';
import { ICategory } from '../interfaces/category';
import { prisma } from '../lib/prisma';
import styles from '../styles/Home.module.scss';
import utils from '../styles/utils.module.scss';
import HomeProductsContainer from '../components/homeProductsContainer';
import { IProduct } from '../interfaces/productI';
import HomeCarousel from '../components/homeCarousel';
import rslogo from '../../public/rs-logo.svg'
import { fetchProducts } from '../utils/fetchProducts';

interface Props {
  categoryList: ICategory[];
  productList: IProduct[];
}

const Home: React.FC<Props> = ({ categoryList, productList }) => {
  return (
    <div>
      <Head>
        <title>React Store</title>
        <meta name="description" content="A store created with NextJS" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/rs-logo.svg" />
      </Head>

      <Header />
      <main className={styles.main}>
        <HomeCarousel />
        <section className={utils.center}>
          <CategoryContainer categoryList={categoryList} />
          <SaleProductCard />
          <HomeProductsContainer productList={productList} />
        </section>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const categories = await prisma.category.findMany();
  const products = await fetchProducts()

  const categoryList = categories.map((category) => {
    return {
      id: category.id,
      name: category.name,
      slug: category.slug,
      image: category.slug,
    };
  });

  const productList = products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      images: product.images
    };
  });

  return {
    props: {
      categoryList,
      productList
    },
  };
};

export default Home;
