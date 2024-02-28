import React from 'react'
import { Sidenav } from '../../components/dashboard/Sidenav';
import style from '../../styles/Dashboard.module.scss'

export default function categories() {
  return (
    <div className={style.main}>
      <Sidenav />
      <main>Products</main>
    </div>
  )
}
