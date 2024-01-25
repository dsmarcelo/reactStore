import React from 'react';
import { IProduct } from '../interfaces/productI';
import styles from '../styles/Product.module.scss';
import ProductCard from './ProductCard';

type IProps = {
  productList: IProduct[];
};

const ProductContainer: React.FC<IProps> = ({ productList }) => {
  return (
    <section className={styles.productCardContainer}>
      {productList.map((product: IProduct, i: number) => (
        <ProductCard key={i} product={product} />
      ))}
    </section>
  );
};

export default ProductContainer;
