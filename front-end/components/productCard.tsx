import Image from 'next/future/image';
import React from 'react';
import { IProduct } from '../interfaces/productI';
import styles from '../styles/ProductCard.module.scss';

interface Props {
  product: IProduct;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { title, price, images } = product;
  return (
    <a href="" className={styles.productCard}>
      <div className={styles.productCard_image_div}>
        <Image
          className={styles.productCard_img}
          src={images[0]}
          alt="Product Image"
          sizes='100'
          fill
          // width="100px"
          // height="100px"
        />
      </div>
      <div className={styles.productCard_text_div}>
        <p className={styles.productCard_text_title}>{title}</p>
        <p
          className={styles.productCard_text_price}
        >{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      </div>
    </a>
  );
};

export default ProductCard;
