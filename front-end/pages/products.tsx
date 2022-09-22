import { GetServerSideProps } from 'next';
import * as React from 'react'
import ProductContainer from '../components/productContainer'
import { IProduct } from '../interfaces/productI';

type IProp = {
  products: IProduct[];
}

const Products:React.FC<IProp> = ({products}) => {
  // const [productList, setProductList] = React.useState(products)
  return (
    <div>
      <h2>Products Page</h2>
      <ProductContainer products={products.slice(0,20)} />
    </div>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const result = await fetchProducts();
  const response = await fetch('https://api.escuelajs.co/api/v1/products');
  const products: IProduct[]= await response.json();
  const date = Date.now().toString()
  console.warn(`--------------API REQUESTED -------------- ${date}`)
  return {
    props: {
      products,
    },
  };
};

export default Products
