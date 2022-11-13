import React from 'react';
import { GetStaticPaths } from 'next';
import ProductContainer from '../../components/productContainer';
import { IProduct } from '../../interfaces/productI';
import HeaderCategory from '../../components/headerCategory';
import { prisma } from '../../lib/prisma';
import BackCategoryBar from '../../components/backCategoryBar';

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await prisma.category.findMany();

  const paths = data.map((category) => {
    return {
      params: {
        slug: category.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: { slug: string; }; }) => {
  const slug = context.params.slug;

  const category = await prisma.category.findFirst({
    where: {
      slug: {
        equals: slug,
        mode: 'insensitive',
      }
    }
  });

  if (!category) {
    return {
      props: {
        productList: []
      }
    }
  };

  const productList = await prisma.product.findMany({
    where: { categoryId: category.id }
  });

  return {
    props: {
      productList: JSON.parse(JSON.stringify(productList)),
      categoryName: category.name,
    },
    revalidate: 10000,
  };
};

interface Props {
  productList: IProduct[];
  categoryName: string;
}

const Category: React.FC<Props> = ({ productList, categoryName }) => {
  return (
    <>
      <HeaderCategory category={categoryName}/>
      <main>
        <div style={{marginTop: '110px'}} >
          <ProductContainer productList={productList} />
        </div>
      </main>

    </>
  );
}

export default Category;
