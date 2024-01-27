import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import style from "../styles/Home.module.scss"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { KeenSliderArrow } from './keen-slider/KeenSliderArrow';

export default function HomeCarousel() {
  const [items, setItems] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [inLastSlide, setInLastSlide] = React.useState(false)
  const [loaded, setLoaded] = useState(false)

  function fetchImages() {
    const imagesQty = 3
    const images: string[] = []
    for (let i = 0; i < imagesQty; i++) {
      images.push(`/carousel/carousel-ad-${i}.jpg`)
    }
    return images;
  }

  useEffect(() => {
    setItems(fetchImages())
  }, [])

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slideChanged(slider) {
      setInLastSlide(false)
      setCurrentSlide(slider.track.details.rel)
      slider.track.details.progress >= 0.9 && setInLastSlide(true)
    },
    created() {
      setLoaded(true)
    },
    slides: {
      perView: 1,
      // spacing: 12,
    },
  })

  return (
    <div className={`navigation-wrapper ${style.navigation_wrapper}`}>
      <div ref={sliderRef} className={`keen-slider ${style.productCarousel}`}>
        {items.map((image: string, i: number) =>
          <div key={i} className={`keen-slider__slide`}>
            <Image
              className={style.carousel_container_img}
              src={image}
              alt={''}
              sizes='100vw'
              fill
            />
          </div>
        )}
      </div >
    </div >
  )
}