import React, { useEffect, useState } from 'react'
import { IProduct, IProductList } from '../interfaces/productI';
import styles from '../styles/Product.module.scss';
import ProductCard from './productCard';
import useSWR from 'swr'

// const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function HomeProductsContainer() {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const { data, error } = useSWR('/api/products?quantity=10',
    (apiURL: string) => fetch(apiURL).then(res => res.json()))
  console.log(data)
  if (error) return <h1>Erro ao carregar produtos</h1>
  if (!data) return <h1>Carregando...</h1>
  // if (data) setLoading(false)

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const products = await fetch('/api/products?quantity=10', { next: { revalidate: 60 } }).then(
  //       (res) => res.json());
  //     if (!products) return console.error('No products found');
  //     setProductList(products)
  //     setLoading(false)
  //   }
  //   fetchProducts();
  // }, []);

  return (
    <section className={styles.productCardContainer}>
      {data.map((product: IProduct, i: number) => (
        <ProductCard key={i} product={product} />
      ))}
    </section>
  );
}
