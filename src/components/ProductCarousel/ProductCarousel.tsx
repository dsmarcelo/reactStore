import React from 'react'
import { IProduct } from '../../interfaces/productI';
import style from '../../styles/Product.module.scss';
import ProductCard from '../ProductCard';
import Carousel from 'react-multi-carousel';
import CarouselArrow from '../Carousel/CarouselArrow';

type IProps = {
  productList: IProduct[];
}

const ProductCarousel: React.FC<IProps> = ({ productList }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 977 },
      items: 5,
      slidesToSlide: 3,
      partialVisibilityGutter: 100
    },
    tablet: {
      breakpoint: { max: 977, min: 740 },
      items: 4,
      slidesToSlide: 2,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 740, min: 560 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 40
    }
  };

  return (
    <Carousel
      // className={style.productCarousel}
      responsive={responsive}
      additionalTransfrom={0}
      customLeftArrow={<CarouselArrow left />}
      customRightArrow={<CarouselArrow />}
      renderArrowsWhenDisabled={false}
      ssr={true}
      containerClass={style.productCarouselContainer}
      itemClass={style.carouselItem}
    >
      {
        productList.map((product, i) => (
          <div
            key={i}>
            <ProductCard key={i} product={product} />
          </div>
        ))
      }
    </Carousel >
  )
}

export default ProductCarousel
