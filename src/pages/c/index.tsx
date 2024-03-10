import { GetStaticProps } from 'next';
import React from 'react'
import CategoryContainer from '../../components/categoriesContainer'
import Header from '../../components/Header/header'
import { ICategory } from '../../interfaces/category';
import { getCategories } from '../../lib/category/getCategories';

interface Props {
  categories: ICategory[];
}

const index: React.FC<Props> = ({ categories }) => {
  return (
    <>
      <Header />
      <CategoryContainer categories={categories} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const result = await getCategories();

  const categories = result.map((category) => {
    return {
      id: category.id,
      name: category.name,
      slug: category.slug,
      image: category.slug,
    }
  })

  return {
    props: {
      categories,
    },
  };
};

export default index
