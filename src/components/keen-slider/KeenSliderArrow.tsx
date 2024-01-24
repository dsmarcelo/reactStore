import style from './keenSlider.module.scss'
import { TbChevronCompactLeft } from "react-icons/tb";
import { TbChevronCompactRight } from "react-icons/tb";
// import './keenSlider.scss'

export const KeenSliderArrow = (props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) => {
  const disabled = props.disabled ? `${style.arrow__disabled}` : ""
  console.log(disabled)
  return (
    <div
      onClick={props.onClick}
      className={`${style.arrow} ${props.left ? `${style.arrow__left}` : `${style.arrow__right}`
        }`}
    >
      {props.left ?
        <TbChevronCompactLeft className={`${style.arrow__icon} ${disabled}`} />
        : <TbChevronCompactRight className={`${style.arrow__icon} ${disabled}`} />}
    </div>
  )
}