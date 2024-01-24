import React, { useState } from 'react'
import { IProduct } from '../../interfaces/productI';
import style from '../../styles/Product.module.scss';
import ProductCard from '../productCard';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import '../../styles/Product.module.scss'
import { KeenSliderArrow } from '../keen-slider/KeenSliderArrow';

type IProps = {
  productList: IProduct[];
}

const ProductCarousel: React.FC<IProps> = ({ productList }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [inLastSlide, setInLastSlide] = React.useState(false)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setInLastSlide(false)
      setCurrentSlide(slider.track.details.rel)
      slider.track.details.progress >= 0.9 && setInLastSlide(true)
      console.log(slider.track.details.progress)
    },
    created() {
      setLoaded(true)
    },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 12 },
      },
      "(min-width: 560px)": {
        slides: { perView: 3, spacing: 12 },
      },
      "(min-width: 740px)": {
        slides: { perView: 4, spacing: 12 },
      },
      "(min-width: 977px)": {
        slides: { perView: 5, spacing: 12 },
      },
    },
    slides: {
      perView: 5,
      spacing: 12,
    },
  })
  // loaded && instanceRef && console.log(instanceRef.current)
  return (
    <div className={`navigation-wrapper ${style.navigation_wrapper}`}>
      <div ref={sliderRef} className={`keen-slider ${style.productCarousel}`}>
        {
          productList.map((product, i) => (
            <div key={i} className={`keen-slider__slide ${style.cardWrapper}`}>
              <ProductCard key={i}
                product={product}
              />
            </div>
          ))
        }
      </div >
      {loaded && instanceRef.current && (
        <>
          <KeenSliderArrow
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          />

          <KeenSliderArrow
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={
              inLastSlide
            }
          />
        </>
      )}
    </div>
  )
}

export default ProductCarousel
