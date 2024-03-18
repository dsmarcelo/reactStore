import type { GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import CategoryContainer from '../components/categoriesContainer';
import { IProduct } from '../interfaces/productI';
import BannerCarousel from '../components/BannerCarousel/BannerCarousel';
import { getProducts } from '../lib/product/getProducts';
import { getCategories } from '../lib/category/getCategories';
import { useCategoryProvider } from '../lib/contexts/CategoryContext';
import ProductCarousel from '../components/ProductCarousel/ProductCarousel';
import { CategoryAds } from 'src/components/CategoryAds/CategoryAds';
import { MainLayout } from 'src/components/MainLayout';
import style from '@/styles/Home.module.scss'

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

      <MainLayout>
        <BannerCarousel />
        <div className={style.home_row_section}>
          <h2 className={style.home_page_section_title}>Featured products</h2>
          <ProductCarousel productList={productList} />
        </div>
        <div className={style.home_row_section}>
          <h2 className={style.home_page_section_title}>Shop by catgory</h2>
          <CategoryContainer categories={categories} />
        </div>

        <CategoryAds />
      </MainLayout>
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
