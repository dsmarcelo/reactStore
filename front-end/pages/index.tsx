import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import CategoryContainer from '../components/CategoriesContainer';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home: NextPage = ({ categoryList }) => {
  return (
    <div>
      <Head>
        <title>React Store</title>
        <meta name="description" content="A store created with NextJS" />
        <link rel="icon" href="Logo.ico" />
      </Head>

      <Header/>
      <main className={styles.main}>
        <h1 className={styles.title}>Bem vindo a React Store</h1>
        <CategoryContainer categoryList={categoryList} />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.escuelajs.co/api/v1/categories')
  const categoryList = await response.json();
  return {
    props: {
      categoryList,
    },
    revalidate: 60,
  }
}

export default Home;
