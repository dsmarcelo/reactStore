import Image from 'next/future/image';
import React from 'react';
import { IProduct } from '../interfaces/productI';
import styles from '../styles/Product.module.scss';
import imgPlaceholder from '../../public/imgPlaceholder.png'

interface Props {
  product: IProduct;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { name, price, images } = product;
  return (
    <a href="" className={styles.productCard}>
      <div className={styles.productCard_image_div}>
        <Image
          className={styles.productCard_img}
          src={images[0] || imgPlaceholder}
          alt="Product Image"
          sizes='100'
          fill
        />
      </div>
      <div className={styles.productCard_text_div}>
        <p className={styles.productCard_text_name}>{name}</p>
        <p
          className={styles.productCard_text_price}
        >{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      </div>
    </a>
  );
};

export default ProductCard;
