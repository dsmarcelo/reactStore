import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
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
        <FaChevronLeft className={`${style.arrow__icon}`} />
        : <FaChevronRight className={`${style.arrow__icon}`} />}
    </button>
  )
}

export default CarouselArrow
