import React, { useEffect, useState } from 'react';
import CategoryCard from './categoryCard';
import { ICategory } from '../interfaces/category';
import styles from '../styles/Category.module.scss';

type IProps = {
  categories: ICategory[];
}

const CategoryContainer: React.FC<IProps> = ({ categories }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (categories) {
      setIsLoading(false);
    }
  }, [categories]);

  if (isLoading) {
    return <></>;
  }
  return (
    <section className={styles.categoryCardContainer}>
      {categories.slice(0, 6).map((category: ICategory) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </section>
  );
};

export default CategoryContainer;
