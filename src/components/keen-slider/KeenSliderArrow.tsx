import style from './keenSliderArrow.module.scss'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export const KeenSliderArrow = (props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) => {
  const disabled = props.disabled ? `${style.arrow__disabled}` : ""
  return (
    <button
      onClick={props.onClick}
      className={`${style.arrow} ${props.left ? `${style.arrow__left}` : `${style.arrow__right}`
        } ${disabled}`}
    >
      {props.left ?
        <FaChevronLeft className={`${style.arrow__icon}`} />
        : <FaChevronRight className={`${style.arrow__icon}`} />}
    </button>
  )
}
