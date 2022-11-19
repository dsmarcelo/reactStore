import React, { useEffect, useState } from 'react'
import { IProduct, IProductList } from '../interfaces/productI';
import styles from '../styles/Product.module.scss';
import ProductCard from './productCard';
import useSWR from 'swr'
import { fetchProducts } from '../utils/fetchProducts';

export default function HomeProductsContainer() {
  const { data, error } = useSWR('/api/products?quantity=10',
    (apiURL: string) => fetch(apiURL).then(res => res.json()))
  console.log(data)
  if (error) {
    console.error(error);
    return <h1>Erro ao carregar produtos</h1>
  }
  if (!data) return <h1>Carregando...</h1>

  return (
    <section className={styles.productCardContainer}>
      {data.products.map((product: IProduct, i: number) => (
        <ProductCard key={i} product={product} />
      ))}
    </section>
  );
}
