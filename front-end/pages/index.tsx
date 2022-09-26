import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import CategoryContainer from '../components/CategoriesContainer';
import Header from '../components/Header';
import { ICategory } from '../interfaces/category';
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
  const response = await fetch('https://api.escuelajs.co/api/v1/categories');
  const allCategories: ICategory[] = await response.json();
  const categoryList = allCategories.slice(0, 5);
  return {
    props: {
      categoryList,
    },
    revalidate: 86400,
  };
};

export default Home;
