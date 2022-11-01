import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import CategoryContainer from '../components/categoriesContainer';
import Header from '../components/header';
import { ICategory } from '../interfaces/category';
import { prisma } from '../../lib/prisma';
import styles from '../styles/Home.module.css';

interface Props {
  categoryList: ICategory[];
}

const Home: React.FC<Props> = ({ categoryList }) => {
  return (
    <div>
      <Head>
        <title>React Store</title>
        <meta name="description" content="A store created with NextJS" />
        <link rel="icon" href="Logo.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Bem vindo a React Store</h1>
        <CategoryContainer categoryList={categoryList} />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await prisma.category.findMany();

  const categoryList = result.map((category) => {
    return {
      id: category.id,
      name: category.name,
      slug: category.slug,
      image: category.slug,
    }
  })

  return {
    props: {
      categoryList,
    },
  };
};

export default Home;
