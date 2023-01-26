import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.scss';

const getImage = () => {
  return `/products/${Math.floor(Math.random() * (24) + 1)}.jpg`
};

const SaleProductCard = () => {
  return (
    <a href="" className={styles.productSaleCard}>
      <div className={styles.productSale_image_div}>
        <Image
          className={styles.productSale_img}
          src={'/products/oled_tv.jpg'}
          alt="Ad Image"
          fill
          priority
          sizes="(max-width: 768px) 95vw,
            (max-width: 1200px) 50vw,
            33vw"
          quality={40}
        />
      </div>
      <div className={styles.productSale_text_div}>
        <p className={styles.productSale_text_name_amount}>Até 30% de desconto</p>
        <p className={styles.productSale_text}>Oled TVs</p>
      </div>
    </a>
  );
};



export default SaleProductCard;
