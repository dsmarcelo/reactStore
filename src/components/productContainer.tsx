import React from 'react';
import { IProduct } from '../interfaces/productI';
import styles from '../styles/ProductCard.module.scss';
import ProductCard from './productCard';

type IProps = {
  products: IProduct[];
};

const ProductContainer: React.FC<IProps> = ({ products }) => {
  return (
    <section className={styles.productCardContainer}>
      {products.map((product: IProduct, i: number) => (
        <ProductCard key={i} product={product} />
      ))}
    </section>
  );
};

export default ProductContainer;