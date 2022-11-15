import React, { useEffect, useState } from 'react'
import { IProduct, IProductList } from '../interfaces/productI';
import styles from '../styles/Product.module.scss';
import ProductCard from './productCard';

export default function HomeProductsContainer() {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await fetch('/api/products?quantity=10', { next: { revalidate: 60 } }).then(
        (res) => res.json());
      if (!products) return console.error('No products found');
      setProductList(products)
      setLoading(false)
    }
    fetchProducts();
  }, []);

  return (
    loading ? <h1>Carregando</h1> :
      <section className={styles.productCardContainer}>
        {productList.map((product: IProduct, i: number) => (
          <ProductCard key={i} product={product} />
        ))}
      </section>
  );
}
