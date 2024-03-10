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
      <main className={style.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}