import React from 'react'
import { IProduct } from '../../interfaces/productI';
import style from '../../styles/Product.module.scss';
import ProductCard from '../ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import '../../styles/Product.module.scss'

type IProps = {
  productList: IProduct[];
}

const ProductCarousel: React.FC<IProps> = ({ productList }) => {
  return (
    <Swiper
      className={style.productCarousel}
      slidesPerView={5}
      spaceBetween={12}
      scrollbar={{
        draggable: true,
        hide: true,
      }}
      freeMode={true}
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        560: {
          slidesPerView: 3,
        },
        740: {
          slidesPerView: 4,
        },
        977: {
          slidesPerView: 5,
        },
      }}
    >
      {
        productList.map((product, i) => (
          <SwiperSlide
            key={i}>
            <ProductCard key={i} product={product} />
          </SwiperSlide>
        ))
      }
    </Swiper >
  )
}

export default ProductCarousel
