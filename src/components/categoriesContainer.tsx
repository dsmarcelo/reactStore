import React from 'react';
import CategoryCard from './categoryCard';
import { ICategory } from '../interfaces/category';
import styles from '../styles/Category.module.scss';

type IProps = {
  categoryList: ICategory[];
}

const CategoryContainer: React.FC<IProps> = ({categoryList}) => {
  return (
    <section className={styles.categoryCardContainer}>
      {categoryList.map((category: ICategory) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </section>
  );
};

export default CategoryContainer;
