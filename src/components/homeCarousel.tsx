import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import style from "../styles/Home.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

<style jsx>{`
  .swiper-button-next, .swiper-button-prev {
    background-color: black;
  }
`}</style>

export default function HomeCarousel() {
  const [items, setItems] = useState<string[]>([]);

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

  const NextButton = () => <div>Next</div>;
  const PrevButton = () => <div>Prev</div>;

  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      slidesPerView={"auto"}
      centeredSlides={true}
      modules={[Autoplay, Pagination, Navigation]}
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
      <div className="prevButton"></div>
    </Swiper >
  )
}