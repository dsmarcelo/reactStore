import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import ProductContainer from '../components/productContainer';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>React Store</title>
        <meta name="description" content="A store created with NextJS" />
        <link rel="icon" href="Logo.ico" />
      </Head>

      <Header/>
      <main>
        <h1 className={styles.title}>React Store</h1>
      </main>
    </div>
  );
};

export default Home;
