import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ICategory } from '../interfaces/category';
import styles from '../styles/Category.module.scss';

interface Props {
  category: ICategory;
}

const CategoryCard: React.FC<Props> = ({ category }) => {
  const { name, slug, image } = category;
  return (
    <Link
      href={`/c/${slug}`}
    >
      <div className={styles.categoryCard}>
        <div className={styles.categoryCard_image_div}>
          <Image
            className={styles.categoryCard_img}
            src={`/categories/${slug}.jpg` || '/imgPlaceholder.png'}
            alt="Category Image"
            sizes="(max-width: 768px) 50vw,
            (max-width: 1200px) 50vw,
            33vw"
            quality={40}
            fill
            priority
          />
        </div>
        <div className={styles.categoryCard_text_div}>
          <h3 className={styles.categoryCard_text_name}>{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
