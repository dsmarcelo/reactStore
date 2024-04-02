import React, { ReactNode } from 'react'
import style from '@/styles/Home.module.scss'
import Header from './Header/header';
import { Footer } from './Footer';

type Props = {
  children: ReactNode | ReactNode[]
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div className={style.layout}>
      <Header />
      <div className={style.main}>
        {children}
      </div>
      <Footer />
    </div>
  )
}