import React, { useState } from 'react'
import { IProduct } from '../../interfaces/productI';
import style from '../../styles/Product.module.scss';
import ProductCard from '../ProductCard';
import Carousel from 'react-multi-carousel';
import CarouselArrow from '../Carousel/CarouselArrow';

type IProps = {
  productList: IProduct[];
}

class ProductCarousel extends React.Component<IProps> {
  state = { isMoving: false };
  render() {
    const { productList } = this.props;
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 977 },
        items: 5,
        slidesToSlide: 3,
      },
      tablet: {
        breakpoint: { max: 977, min: 800 },
        items: 4,
        slidesToSlide: 2,
        partialVisibilityGutter: 20
      },
      mobile: {
        breakpoint: { max: 740, min: 560 },
        items: 3,
        slidesToSlide: 1,
        partialVisibilityGutter: 12
      },
      mobile_sm: {
        breakpoint: { max: 560, min: 0 },
        items: 2,
        slidesToSlide: 1,
        partialVisibilityGutter: 6
      }
    };

    return (
      <Carousel
        // className={style.productCarousel}
        responsive={responsive}
        additionalTransfrom={0}
        keyBoardControl
        customLeftArrow={<CarouselArrow left />}
        customRightArrow={<CarouselArrow />}
        renderArrowsWhenDisabled={false}
        ssr
        containerClass={style.productCarouselContainer}
        itemClass={style.carouselItem}
        removeArrowOnDeviceType={["tablet", "mobile", "mobile_sm"]}
        minimumTouchDrag={0}
        beforeChange={() => this.setState({ isMoving: true })}
        afterChange={() => this.setState({ isMoving: false })}
        partialVisible
      >
        {
          productList.map((product, i) => (
            <div
              // onClick={(e) => e.stopPropagation()}
              key={i}>
              <ProductCard key={i} product={product} isMoving={this.state.isMoving} />
            </div>
          ))
        }
      </Carousel >
    )
  }
}

export default ProductCarousel;
