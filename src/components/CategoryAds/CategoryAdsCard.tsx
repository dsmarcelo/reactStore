import Image from 'next/image';
import React from 'react';
import style from '@/styles/Sales.module.scss'
import Link from 'next/link';

const getImage = () => {
  return `/products/${Math.floor(Math.random() * (24) + 1)}.jpg`
};

interface Props {
  image: string,
  title: string,
  discount_text: string,
  href: string
}

const CategoryAdsCard = ({ data }: { data: Props }) => {
  const { image, title, discount_text, href } = data
  return (
    <Link href={href} className={style.productSaleCard}>
      <div className={style.productSale_image_div}>
        <Image
          className={style.productSale_img}
          src={image}
          alt="Ad Image"
          fill
          priority
          sizes="(max-width: 768px) 95vw,
            (max-width: 1200px) 50vw,
            33vw"
          quality={40}
        />
      </div>
      <p className={style.productSale_text_discount}>{discount_text}</p>
      <p className={style.productSale_text}>{title}</p>
    </Link>
  );
};



export default CategoryAdsCard;
