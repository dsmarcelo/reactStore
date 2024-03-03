import Image from 'next/image';
import React from 'react';
import { IProduct } from '../interfaces/productI';
import styles from '../styles/Product.module.scss';
import Link from 'next/link';

interface Props {
  product: IProduct;
}

//TODO: Add link to /p/product

const ProductCard: React.FC<Props> = ({ product }) => {
  const { name, price, images } = product;
  return (
    <Link href="/" className={styles.productCard}>
      <div className={styles.productCard_image_div}>
        <Image
          className={styles.productCard_img}
          src={`/products/${images[0]}.jpg`}
          alt={name}
          sizes='(max-width: 240px)'
          fill
        />
      </div>
      <div className={styles.productCard_text_div}>
        <p className={styles.productCard_text_name}>{name}</p>
        <p
          className={styles.productCard_text_price}
        >{price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
