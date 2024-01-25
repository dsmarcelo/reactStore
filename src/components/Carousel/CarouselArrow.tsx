import React from 'react'
import { TbChevronCompactLeft } from "react-icons/tb";
import { TbChevronCompactRight } from "react-icons/tb";
import style from './CarouselArrow.module.scss'
import { ArrowProps } from 'react-multi-carousel/lib/types';
interface CustomLeftArrowProps extends ArrowProps {
  left?: boolean
}

const CarouselArrow = ({ onClick, left }: CustomLeftArrowProps) => {
  return (
    <button
      onClick={() => onClick?.()}
      className={`${style.arrow} ${left ? `${style.arrow__left}` : `${style.arrow__right}`
        }`}
    >
      {left ?
        <TbChevronCompactLeft className={`${style.arrow__icon}`} />
        : <TbChevronCompactRight className={`${style.arrow__icon}`} />}
    </button>
  )
}

export default CarouselArrow
