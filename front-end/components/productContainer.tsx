import ProductCard from './productCard';
import { IProduct } from '../interfaces/productI';
import styles from '../styles/ProductCard.module.css';

type IProps = {
  products: IProduct[];
}

const ProductContainer: React.FC<IProps> = ({products}) => {
  return (
    <section className={styles.productCardContainer}>
      {products.map((product: IProduct, i: number) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductContainer;
