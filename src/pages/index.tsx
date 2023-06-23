import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import React from 'react';
import CategoryContainer from '../components/categoriesContainer';
import Header from '../components/header';
import SaleProductCard from '../components/saleProductCard';
import { ICategory } from '../interfaces/category';
import { prisma } from '../lib/prisma';
import styles from '../styles/Home.module.scss';
import utils from '../styles/utils.module.scss';
import HomeProductsContainer from '../components/homeProductsContainer';
import { IProduct } from '../interfaces/productI';
import HomeCarousel from '../components/homeCarousel';

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
        <link style={{ aspectRatio: '1' }} rel="icon" href="Logo.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <HomeCarousel />
        <h1 className={styles.title}>Bem vindo a React Store</h1>
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
  const result = await prisma.category.findMany();
  const products = await prisma.product.findMany({ take: 5 })

  const categoryList = result.map((category) => {
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
