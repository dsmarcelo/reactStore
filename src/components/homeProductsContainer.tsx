import React, { useEffect, useState } from 'react'
import { IProduct, IProductList } from '../interfaces/productI';
import styles from '../styles/Product.module.scss';
import ProductCard from './ProductCard';
import useSWR from 'swr'
// import { fetchProducts } from '../utils/fetchProducts';

type IProps = {
  productList: IProduct[];
}

const HomeProductsContainer: React.FC<IProps> = ({ productList }) => {
  // const { data, error } = useSWR('/api/products?quantity=10',
  //   (apiURL: string) => fetch(apiURL).then(res => res.json()))
  // console.log(data)
  // if (error) {
  //   console.error(error);
  //   return <h1>Erro ao carregar produtos</h1>
  // }
  // if (!data) return <h1>Carregando...</h1>

  return (
    <section className={styles.productCardContainer}>
      {productList.map((product: IProduct, i: number) => (
        <ProductCard key={i} product={product} />
      ))}
    </section>
  );
}

export default HomeProductsContainer
