import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import style from "./BannerCarousel.module.scss"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { KeenSliderArrow } from '../keen-slider/KeenSliderArrow';

export default function BannerCarousel() {
  const [items, setItems] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  function fetchImages() {
    const imagesQty = 3
    const images: string[] = []
    for (let i = 1; i <= imagesQty; i++) {
      images.push(`/carousel/banner-${i}.jpg`)
    }
    if (images) {
      setImagesLoaded(true)
    } else {
      console.error("Error fetching Banner images")
    }
    return images;
  }

  useEffect(() => {
    setItems(fetchImages())
  }, [])

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    created() {
      setLoaded(true)
    },
    loop: true,
  },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 6000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ])

  return (
    <div className={`navigation-wrapper ${style.navigation_wrapper}`}>
      {imagesLoaded && (
        <div ref={sliderRef} className={`keen-slider ${style.carousel}`}>
          {items.map((image: string, i: number) =>
            <div key={i} className={`keen-slider__slide`}>
              <Image
                src={image}
                alt={''}
                objectFit="cover"
                fill
              />
            </div>
          )}
        </div >
      )}
      {loaded && instanceRef.current && (
        <>
          <KeenSliderArrow
            left
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={false}
          />

          <KeenSliderArrow
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={false}
          />
        </>
      )}
    </div >
  )
}