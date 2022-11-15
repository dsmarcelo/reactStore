import React from 'react'
import style from '../styles/Header.module.scss'
AiOutlineArrowLeft
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router'

interface Props {
  name: string;
}

const BackCategoryBar: React.FC<Props> = ({name}) => {
  const router = useRouter()
  return (
    <div className={style.category_top_bar}>
      <button type="button" onClick={() => router.back()} >
        <AiOutlineArrowLeft />
      </button>
      <p>{name}</p>
    </div>
  )
}

export default BackCategoryBar;
