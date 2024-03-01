import React from 'react'
import CategoryAdsCard from './CategoryAdsCard';
import style from '@/styles/Sales.module.scss'

export const CategoryAds = () => {
  const ads = [{
    title: "Oled TVs",
    discount_text: "Up to 20% off",
    image: "/products/oled_tv.jpg"
  }, {
    title: "Shoes",
    discount_text: "Up to 30% off",
    image: "/products/22.jpg"
  }, {
    title: "Gaming",
    discount_text: "Up to 40% off",
    image: "/products/1.jpg"
  }]
  return (
    <div className={style.container}>{
      ads.map((ad, i) => {
        return <CategoryAdsCard key={i} data={ad} />
      })
    }</div>
  )
}
