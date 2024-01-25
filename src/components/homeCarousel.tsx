import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import style from "../styles/Home.module.scss"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselArrow from './Carousel/CarouselArrow';

const HomeCarousel = () => {
  const [images, setImages] = useState<string[]>([]);

  function fetchImages() {
    const imagesQty = 3
    const images: string[] = []
    for (let i = 0; i < imagesQty; i++) {
      images.push(`/carousel/carousel-ad-${i}.jpg`)
    }
    return images;
  }

  useEffect(() => {
    setImages(fetchImages())
  }, [])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <Carousel
      className={style.carousel_container}
      responsive={responsive}
      autoPlay
      autoPlaySpeed={6000}
      rewind={false}
      shouldResetAutoplay
      showDots={false}
      swipeable
      infinite
      arrows
      keyBoardControl={true}
      minimumTouchDrag={80}
      pauseOnHover
      sliderClass={style.ab}
      additionalTransfrom={0}
      customLeftArrow={<CarouselArrow left />}
      customRightArrow={<CarouselArrow />}
      renderArrowsWhenDisabled={false}
      ssr={true}
    >
      {images.map((image: string, i: number) =>
        <div
          key={i}
          className={style.carousel_image_container}
        >
          <Image
            className={style.carousel_container_img}
            src={image}
            alt={''}
            fill
          />
        </div>
      )}
    </Carousel >
  )
}

export default HomeCarousel
