import Image from 'next/future/image';
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
            src={ `/categories/${slug}.jpg` || '/imgPlaceholder.png' }
            alt="Category Image"
            sizes="100"
            fill
            priority
          />
        </div>
        <div className={styles.categoryCard_text_div}>
          <p className={styles.categoryCard_text_name}>{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
