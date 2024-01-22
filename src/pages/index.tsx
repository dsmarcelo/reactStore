import type { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import CategoryContainer from '../components/categoriesContainer';
import Header from '../components/Header/header';
import SaleProductCard from '../components/saleProductCard';
import styles from '../styles/Home.module.scss';
import { IProduct } from '../interfaces/productI';
import HomeCarousel from '../components/homeCarousel';
import { getProducts } from '../lib/product/getProducts';
import { getCategories } from '../lib/category/getCategories';
import { useCategoryProvider } from '../lib/contexts/CategoryContext';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';

interface Props {
  productList: IProduct[];
}

const Home: React.FC<Props> = ({ productList }) => {
  const { categories } = useCategoryProvider()
  return (
    <div>
      <Head>
        <title>React Store</title>
        <meta name="description" content="A store created with NextJS" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/rs-logo-sm-dark.svg" />
      </Head>

      <Header />
      <main className={''}>
        <HomeCarousel />
        <section className={styles.main}>
          <ProductCarousel productList={productList} />
          <CategoryContainer categoryList={categories} />
          <SaleProductCard />
        </section>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const initialCategories = (await getCategories(20)).map((category) => {
    return {
      id: category.id,
      name: category.name,
      slug: category.slug,
      image: category.image
    }
  });

  const productList = (await getProducts()).map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      images: product.images
    }
  });

  return {
    props: {
      productList,
      initialCategories
    },
  };
};

export default Home;
