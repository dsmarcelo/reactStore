import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import style from "../styles/Home.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// import 'swiper/swiper.scss'

export default function HomeCarousel() {
  const [items, setItems] = useState<string[]>([]);

  function fetchImages() {
    const imagesQty = 3
    let images: string[] = []
    for (let i = 0; i < imagesQty; i++) {
      images.push(`/carousel/carousel-ad-${i}.jpg`)
    }
    console.log('🚀 ~ fetchImages ~ images', images);
    return images;
  }

  useEffect(() => {
    setItems(fetchImages())
  }, [])

  // const params = {
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true
  //   }
  // }

  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      slidesPerView={"auto"}
      centeredSlides={true}
      modules={[Autoplay, Pagination]}
      className={style.carousel_container}
    >
      {items.map((image: string, i: number) =>
        <SwiperSlide
          key={i}
          className={style.carousel_image_container}
        >
          <Image
            className={style.carousel_container_img}
            src={image}
            alt={''}
            sizes='100vw'
            fill
          />
        </SwiperSlide>
      )}
    </Swiper >
  )
}